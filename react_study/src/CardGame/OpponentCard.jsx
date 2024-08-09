import React from "react";
import './OpponentCard.css';

function OpponentCard({ opponentCards = [], isRevealed, discardedCardIndex  }) {
    const OpponentCardBorderStyle1 = opponentCards[0] ? '2px solid black' : '2px dashed gray';
    const OpponentCardBorderStyle2 = opponentCards[1] ? '2px solid black' : '2px dashed gray';

    const OpponentCardColorStyle1 = opponentCards[0] ? '#ffffff' : '#f0f0f0';
    const OpponentCardColorStyle2 = opponentCards[1] ? '#ffffff' : '#f0f0f0';

    return (
        <div className="OpponentCards">
            <div className="OpponentCard1" style={{ border: OpponentCardBorderStyle1, backgroundColor: OpponentCardColorStyle1 }}>
                {isRevealed && opponentCards[0] ? opponentCards[0].content : 'Card1' }
            </div>
            <div className="OpponentCard2" style={{ border: OpponentCardBorderStyle2, backgroundColor: OpponentCardColorStyle2 }}>
                {isRevealed && opponentCards[1] ? opponentCards[1].content : 'Card2' }
            </div>
        </div>
    );
}

export default OpponentCard;

// (<img src="img/Card.png" alt="Card"></img>)