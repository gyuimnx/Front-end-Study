import React, { useState, useEffect } from "react";
import OpponentCard from "./OpponentCard";
import './Opponent.css';

function Opponent({ cards = [], selectedPlayerCards = [], onOpponentDiscard }) {
    const [opponentCards, setOpponentCards] = useState([]);
    const [OpponentCardSize1, setOpponentCardSize1] = useState("");
    const [OpponentCardSize2, setOpponentCardSize2] = useState("");

    useEffect(() => {
        if (selectedPlayerCards.length === 2) {
            // 플레이어가 선택한 카드를 제외한 남은 카드들 필터링
            const availableCards = cards.filter(card => 
                !selectedPlayerCards.some(selectedCard => selectedCard.id === card.id)
            );

            // 남은 카드 중에서 랜덤으로 두 개 선택
            const selectedOpponentCards = [];
            while (selectedOpponentCards.length < 2 && availableCards.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableCards.length);
                const selectedCard = availableCards.splice(randomIndex, 1)[0];
                selectedOpponentCards.push(selectedCard);
            }

            // 상태 업데이트
            setOpponentCards(selectedOpponentCards);
        }
    }, [cards, selectedPlayerCards]);

    //상대방 카드 크기 표시
    useEffect(() => {
        if (opponentCards[0]) {
            const value = parseInt(opponentCards[0].content, 10);
            if (value < 11) {
                setOpponentCardSize1("下");
            } else {
                setOpponentCardSize1("上");
            }
        } else {
            setOpponentCardSize1("");
        }

        if (opponentCards[1]) {
            const value = parseInt(opponentCards[1].content, 10);
            if (value < 11) {
                setOpponentCardSize2("下");
            } else {
                setOpponentCardSize2("上");
            }
        } else {
            setOpponentCardSize2("");
        }
    }, [opponentCards]);

    //상대방이 버릴 카드 자동 선택
    function discardOpponentCard() {
        if (opponentCards.length !== 2) return;

        const [card1, card2] = opponentCards;
        const getValue = (card) => parseInt(card.content.replace('★', ''), 10);
        const value1 = getValue(card1);
        const value2 = getValue(card2);

        let cardToKeep;

        if (value1 <= 10 && value2 <= 10) {  // 하하
            if ((value1 === 1 && value2 !== 1) || (value1 === 1 && card1.content.includes('★'))) {
                cardToKeep = card1;
            } else if ((value2 === 1 && value1 !== 1) || (value2 === 1 && card2.content.includes('★'))) {
                cardToKeep = card2;
            } else if (value1 === 1 && value2 === 1) {
                cardToKeep = card1.content.includes('★') ? card1 : card2;
            } else {
                cardToKeep = value1 < value2 ? card2 : card1;
            }
        } else if ((value1 <= 10 && value2 > 10) || (value1 > 10 && value2 <= 10)) {  // 하상 or 상하
            if ((value1 === 1 && value2 === 20) || (value1 === 20 && value2 === 1)) {
                cardToKeep = value1 === 20 ? card1 : card2;
            }else if ((value1 === 1 && value2 !== 20) || (value2 === 1 && value1 !== 20)) {
                    cardToKeep = value1 === 1 ? card1 : card2;
            } else {
                cardToKeep = value1 > value2 ? card1 : card2;
            }
        } else {  // 상상
            if ((value1 === 20 && value2 !== 20) || (value1 === 20 && card1.content.includes('★'))) {
                cardToKeep = card1;
            } else if ((value2 === 20 && value1 !== 20) || (value2 === 20 && card2.content.includes('★'))) {
                cardToKeep = card2;
            } else if (value1 === 20 && value2 === 20) {
                cardToKeep = card1.content.includes('★') ? card1 : card2;
            } else {
                cardToKeep = value1 > value2 ? card1 : card2;
            }
        }

        setOpponentCards([cardToKeep]);
    };

    useEffect(() => {
        if (onOpponentDiscard) {
            const timer = setTimeout(() => {
                discardOpponentCard();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [onOpponentDiscard]);

    return (
        <div className="Opponent">
            <OpponentCard opponentCards={opponentCards} />
            <div className="OpponentCardSizes">
                {OpponentCardSize1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{OpponentCardSize2}
            </div>
        </div>
    );
};

export default Opponent;