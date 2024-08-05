import React from "react";
import './PlayerCard.css';

function PlayerCard({ selectedCards = [], onClickCard, highlightedCardIndex }) {
    const card1BorderStyle = highlightedCardIndex === 0 ? '3px solid red' : '2px solid black';
    const card2BorderStyle = highlightedCardIndex === 1 ? '3px solid red' : '2px solid black';

    const card1ColorStyle = selectedCards[0] ? '#9999FF' : '#f0f0f0';
    const card2ColorStyle = selectedCards[1] ? '#9999FF' : '#f0f0f0';

    return (
        <div className="PlayerCards">
            <div
                className="PlayerCard1"
                style={{ border: card1BorderStyle, backgroundColor: card1ColorStyle }}
                onClick={() => onClickCard(0)}  // 카드 클릭 시 인덱스를 전달
            >
                {selectedCards[0] ? selectedCards[0].content : '카드1'}
            </div>
            <div
                className="PlayerCard2"
                style={{ border: card2BorderStyle, backgroundColor: card2ColorStyle }}
                onClick={() => onClickCard(1)}  // 카드 클릭 시 인덱스를 전달
            >
                {selectedCards[1] ? selectedCards[1].content : '카드2'}
            </div>
        </div>
    );
}

export default PlayerCard;
