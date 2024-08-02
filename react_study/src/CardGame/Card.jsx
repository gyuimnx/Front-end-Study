import React from "react";
import './Card.css'

function Card({id, isDone, content, onSelected}) {
    function handleClick() {
        if (!isDone) {
            onSelected(id);
        }
    };

    return (
        <div className={`CardItem ${isDone ? 'disabled' : ''}`} onClick={handleClick}>
            {(<img src="img/Card.png" alt="Card"></img>)}
        </div>
    );
};

export default Card;