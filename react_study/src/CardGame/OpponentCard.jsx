import React from "react";
import './OpponentCard.css';

function OpponentCard({ opponentCards = [] }) {
    const OpponentCardBorderStyle1 = opponentCards[0] ? '2px solid black' : '2px dashed gray';
    const OpponentCardBorderStyle2 = opponentCards[1] ? '2px solid black' : '2px dashed gray';

    const OpponentCardColorStyle1 = opponentCards[0] ? '#9999FF' : '#f0f0f0';
    const OpponentCardColorStyle2 = opponentCards[1] ? '#9999FF' : '#f0f0f0';

    return (
        <div className="OpponentCards">
            <div className="OpponentCard1" style={{ border: OpponentCardBorderStyle1, backgroundColor: OpponentCardColorStyle1 }}>
                {opponentCards[0] ? opponentCards[0].content : '카드1'}
            </div>
            <div className="OpponentCard2" style={{ border: OpponentCardBorderStyle2, backgroundColor: OpponentCardColorStyle2 }}>
                {opponentCards[1] ? opponentCards[1].content : '카드2'}
            </div>
        </div>
    );
}

export default OpponentCard;
