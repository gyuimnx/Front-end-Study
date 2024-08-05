import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import './Player.css';

function Player({ selectedCards, onClickCard }) {
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
    }

    return (
        <div className="Player">
            <PlayerCard 
                selectedCards={selectedCards} 
                onClickCard={handleCardClick} 
                highlightedCardIndex={highlightedCardIndex}  // 하이라이트 인덱스를 전달
            />
            <div className="PlayerCardSizes">
                {PlayerCardSize1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{PlayerCardSize2}
            </div>
        </div>
    );
}

export default Player;
