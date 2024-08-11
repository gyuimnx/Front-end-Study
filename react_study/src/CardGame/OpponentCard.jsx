import React from "react";
import './OpponentCard.css';

function OpponentCard({ opponentCards = [], isRevealed, discardedCardIndex, cardDiscard }) {
    const OpponentCardBorderStyle1 = opponentCards[0] ? '2px solid black' : '2px dashed black';
    const OpponentCardBorderStyle2 = opponentCards[1] ? '2px solid black' : '2px dashed black';
    const OpponentDiscardCardBorderStyle = opponentCards.length === 1 ? '2px solid black' : '2px dashed black';

    const OpponentCardColorStyle1 = opponentCards[0] ? '#4682b4' : '#8a8a8a';
    const OpponentCardColorStyle2 = opponentCards[1] ? '#4682b4' : '#8a8a8a';
    const OpponentDiscardCardColorStyle = opponentCards.length === 1 ? '#444444' : '#8a8a8a';

    const OpponentDiscardCardFontColorStyle = opponentCards.length === 1 ? 'white' : 'black';

    return (
        <div className="OpponentCards">
            <div className="OpponentDiscardCard" style={{border: OpponentDiscardCardBorderStyle, backgroundColor: OpponentDiscardCardColorStyle, color: OpponentDiscardCardFontColorStyle}}>
                {opponentCards.length === 1 ? cardDiscard.content : 'Discard' }
            </div>
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
