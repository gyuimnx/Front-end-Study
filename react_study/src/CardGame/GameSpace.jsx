import React, { useEffect } from "react";
import Card from "./Card";
import './GameSpace.css';

function GameSpace({cards, onSelected, opponentSelectedCardIds, onGameOver }) {

    useEffect(() => {
        const remainingCards = cards.filter(card => !card.isDone).length; // 남은 카드 수(isDone : false)

        if (remainingCards <= 4) {
            onGameOver(true);
        }
    })

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