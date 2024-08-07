import React from "react";
import './Btn.css';

function Btn({ onDiscard, onRevealResult, onDie }) {
    function reload() {
        window.location.replace("/")
    }
    return (
        <div className="btn1">
            <button onClick={onRevealResult}>결과보기</button>
            <button onClick={onDie}>다이</button>
            <button onClick={onDiscard}>버리기</button>
            <button onClick={reload}>게임 초기화</button>
        </div>
    );
}

export default Btn;
