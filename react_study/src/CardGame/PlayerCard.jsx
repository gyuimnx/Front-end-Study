import React from "react";
import './PlayerCard.css';

function PlayerCard({ selectedCards = [], onClickCard, highlightedCardIndex }) {
    const card1BorderStyle = (selectedCards.length >= 1) ? (highlightedCardIndex === 0 ? '2px solid black' : '2px solid black') : '2px dashed gray';
    const card2BorderStyle = (selectedCards.length >= 1) ? (highlightedCardIndex === 1 ? '2px solid black' : '2px solid black') : '2px dashed gray';

    const card1ColorStyle = selectedCards[0] ? '#9999FF' : '#f0f0f0';
    const card2ColorStyle = selectedCards[1] ? '#9999FF' : '#f0f0f0';

    const card1ShadowStyle = highlightedCardIndex === 0 ? '3px 7px 10px black' : 'none';
    const card2ShadowStyle = highlightedCardIndex === 1 ? '3px 7px 10px black' : 'none';

    return (
        <div className="PlayerCards">
            <div
                className="PlayerCard1"
                style={{ border: card1BorderStyle, backgroundColor: card1ColorStyle, boxShadow: card1ShadowStyle }}
                onClick={() => onClickCard(0)}  // 카드 클릭 시 인덱스를 전달
            >
                {selectedCards[0] ? selectedCards[0].content : 'Card1'}
            </div>
            <div
                className="PlayerCard2"
                style={{ border: card2BorderStyle, backgroundColor: card2ColorStyle, boxShadow: card2ShadowStyle }}
                onClick={() => onClickCard(1)}  // 카드 클릭 시 인덱스를 전달
            >
                {selectedCards[1] ? selectedCards[1].content : 'Card2'}
            </div>
        </div>
    );
}

export default PlayerCard;
