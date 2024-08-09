import React from "react";
import './WinOrLose.css';

function WinOrLose({ playerWins, opponentWins }) {
    const text1 = "Win";
    const text2 = "Lose";

    return (
        <div className="WinOrLose">
            <p>{playerWins} <span className="text1">{text1}</span> {opponentWins} <span className="text2">{text2}</span></p>
        </div>
    );
}

export default WinOrLose;