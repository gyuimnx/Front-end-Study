import React from "react";
import OpponentCard from "./OpponentCard";
import './Opponent.css'

function Opponent() {
    return (
        <div className="Opponent">
            <div>
                상 하
            </div>
            <OpponentCard></OpponentCard>
        </div>
    )
};

export default Opponent;