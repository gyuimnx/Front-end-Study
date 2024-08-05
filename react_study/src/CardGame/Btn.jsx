import React from "react";
import './Btn.css';

function Btn({ onDiscard }) {
    return (
        <div className="btn1">
            <button>선택</button>
            <button onClick={onDiscard}>버리기</button>
            <button>게임 초기화</button>
        </div>
    );
}

export default Btn;
