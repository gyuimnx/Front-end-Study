import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import './Player.css';

function Player({ selectedCards, onClickCard, round, discardedPlayerCard }) {
    const [PlayerCardSize1, setPlayerCardSize1] = useState("");
    const [PlayerCardSize2, setPlayerCardSize2] = useState("");
    const [highlightedCardIndex, setHighlightedCardIndex] = useState(null);  // 클릭된 카드 인덱스 상태

    useEffect(() => {
        if (selectedCards[0]) {
            const value = parseInt(selectedCards[0].content, 10);
            setPlayerCardSize1(value < 11 ? "下" : "上");
        } else {
            setPlayerCardSize1("");
        }

        if (selectedCards[1]) {
            const value = parseInt(selectedCards[1].content, 10);
            setPlayerCardSize2(value < 11 ? "下" : "上");
        } else {
            setPlayerCardSize2("");
        }
    }, [selectedCards]);

    function handleCardClick(index) {
        setHighlightedCardIndex(index);  // 카드 클릭 시 해당 카드 인덱스를 저장
        onClickCard(index);  // 부모 컴포넌트에 클릭된 카드 인덱스 전달
    };

    //라운드 바뀔 때마다 하이라이트 제거
    useEffect(() => {
        setHighlightedCardIndex(null);
    },[round])

    return (
        <div className="Player">
            <div className="PlayerCardSpace">
                <PlayerCard 
                    selectedCards={selectedCards} 
                    onClickCard={handleCardClick} 
                    highlightedCardIndex={highlightedCardIndex}  // 하이라이트 인덱스를 전달
                    discardedPlayerCard={discardedPlayerCard}
                />
                <div className="PlayerCardSizes">
                    <div>{PlayerCardSize1}</div>
                    <div>{PlayerCardSize2}</div>
                </div>
            </div>
        </div>
    );
}

export default Player;
