import React from "react";
import Card from "./Card";
import './GameSpace.css';

function GameSpace({cards, onSelected}) {
    return (
        <div className="GameSpace">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    isDone={card.isDone}
                    onSelected={onSelected}
                />
            ))}
        </div>
    );
};

export default GameSpace;