import React, { useState } from "react";
import PlayerInfo from './PlayerInfo';
import BetInfo from './BetInfo';
import './Betting.css';

function Betting() {
    const [point, setPoint] = useState(500);

    function upPoint() {
        setPoint(point + 100);
    };

    function downPoint() {
        if (point > 100) {
            setPoint(point - 100);
        }
    };

    return (
        <div className="Betting">
            <div className="startPoint">
                <p>Start Point : {point}</p>
                <button onClick={upPoint}>+</button>
                <button onClick={downPoint}>-</button>
            </div>
            <PlayerInfo point={point}></PlayerInfo>
            <BetInfo point={point}></BetInfo>
        </div>
    )
};

export default Betting;