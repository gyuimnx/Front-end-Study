import React from "react";
import Card from "./Card";
import './GameSpace.css';

function GameSpace({cards, onSelected, opponentSelectedCardIds }) {
    return (
        <div className="GameSpace">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    isDone={card.isDone || opponentSelectedCardIds.includes(card.id)}
                    onSelected={onSelected}
                />
            ))}
        </div>
    );
};

export default GameSpace;