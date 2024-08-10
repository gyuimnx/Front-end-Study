import React, { useState, useEffect, useCallback } from "react";
import OpponentCard from "./OpponentCard";
import './Opponent.css';

function Opponent({ cards = [], selectedPlayerCards = [], onOpponentDiscard, isRevealed, setOpponentDiscarded, resetOpponentCards, onOpponentCardsUpdate, round, resetTrigger }) {
    const [opponentCards, setOpponentCards] = useState([]);
    const [OpponentCardSize1, setOpponentCardSize1] = useState("");
    const [OpponentCardSize2, setOpponentCardSize2] = useState("");
    const [cardDiscard, setCardDiscard] = useState(null);

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
            if (onOpponentCardsUpdate) {
                onOpponentCardsUpdate(selectedOpponentCards); // 상태 업데이트 콜백 호출
            }
            
            if (onOpponentCardsUpdate) {
                onOpponentCardsUpdate(selectedOpponentCards); 
            }
        }
    }, [cards, selectedPlayerCards, round]);

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
    const discardOpponentCard = useCallback(()=> {
        if (opponentCards.length !== 2) return;

        const [card1, card2] = opponentCards;
        const getValue = (card) => parseInt(card.content.replace('★', ''), 10);
        const value1 = getValue(card1);
        const value2 = getValue(card2);

        let cardToKeep;
        let cardDiscard;

        if (value1 <= 10 && value2 <= 10) {  // 하하
            if ((value1 === 1 && value2 !== 1) || (value1 === 1 && card1.content.includes('★'))) {
                cardToKeep = card1;
                cardDiscard = card2;

            } else if ((value2 === 1 && value1 !== 1) || (value2 === 1 && card2.content.includes('★'))) {
                cardToKeep = card2;
                cardDiscard = card1;

            } else if (value1 === 1 && value2 === 1) {
                cardToKeep = card1.content.includes('★') ? card1 : card2;
                cardDiscard = card1.content.includes('★') ? card2 : card1;

            } else {
                cardToKeep = value1 < value2 ? card2 : card1;
                cardDiscard = value1 < value2 ? card1 : card2;
            }
        } else if ((value1 <= 10 && value2 > 10) || (value1 > 10 && value2 <= 10)) {  // 하상 or 상하
            if ((value1 === 1 && value2 === 20) || (value1 === 20 && value2 === 1)) {
                cardToKeep = value1 === 20 ? card1 : card2;
                cardDiscard = value1 === 20 ? card2 : card1;

            }else if ((value1 === 1 && value2 !== 20) || (value2 === 1 && value1 !== 20)) {
                    cardToKeep = value1 === 1 ? card1 : card2;
                    cardDiscard = value1 === 1 ? card2 : card1;

            } else {
                cardToKeep = value1 > value2 ? card1 : card2;
                cardDiscard = value1 > value2 ? card2 : card1;
            }
        } else {  // 상상
            if ((value1 === 20 && value2 !== 20) || (value1 === 20 && card1.content.includes('★'))) {
                cardToKeep = card1;
                cardDiscard = card2;

            } else if ((value2 === 20 && value1 !== 20) || (value2 === 20 && card2.content.includes('★'))) {
                cardToKeep = card2;
                cardDiscard = card1;

            } else if (value1 === 20 && value2 === 20) {
                cardToKeep = card1.content.includes('★') ? card1 : card2;
                cardDiscard = card1.content.includes('★') ? card2 : card1;

            } else {
                cardToKeep = value1 > value2 ? card1 : card2;
                cardDiscard = value1 > value2 ? card2 : card1;
            }
        }

        setCardDiscard(cardDiscard);
        setOpponentCards([cardToKeep]);

        return cardDiscard;
    }, [opponentCards]);

    console.log("Opponent가 버린 카드: ",cardDiscard);

    useEffect(() => {
        if (onOpponentDiscard && opponentCards.length === 2) {
            const timer = setTimeout(() => {
                discardOpponentCard();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [onOpponentDiscard, opponentCards, discardOpponentCard]);

    // useEffect(() => {
    //     if (resetOpponentCards) {
    //         setOpponentCards([]);
    //         if (onOpponentCardsUpdate) {
    //             onOpponentCardsUpdate([]); // 상태 초기화 콜백 호출
    //         }
    //     }
    // }, [resetOpponentCards]);

    useEffect(() => {
        setOpponentCards([]);
        if (onOpponentCardsUpdate) {
            onOpponentCardsUpdate([]);
        }
    }, [resetTrigger, resetOpponentCards]);

    return (
        <div className="Opponent">
            <OpponentCard opponentCards={opponentCards} isRevealed={isRevealed} cardDiscard={cardDiscard}/>
            <div className="OpponentCardSizes">
                <div>{OpponentCardSize1}</div>
                <div>{OpponentCardSize2}</div>
            </div>
        </div>
    );
};

export default Opponent;