import React, { useState, useEffect } from "react";
import './PlayerInfo.css';

function PlayerInfo({point}) {
    const [myPoint, setMyPoint] = useState(point);

    useEffect(() => {
        setMyPoint(point);
    },[point])

    return (
        <div className="PlayerInfo">
            <p className="MyPoint">{ myPoint }</p>
            <div className="betBtns">
                <button className="betBtn">+</button>
                <button className="betBtn">-</button>
                <button className="betBtn">all</button>
                <button className="betBtn">배팅</button>
            </div>
        </div>
    );
}

export default PlayerInfo;