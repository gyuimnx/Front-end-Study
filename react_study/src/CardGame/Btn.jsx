import React, { useState, useEffect } from "react";
import './Btn.css';
import { useNavigate } from "react-router-dom";

function Btn({ onDiscard, onRevealResult, onDie, round }) {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Check");

    function reload() {
        window.location.replace('/home')
    };

    function goToHome() {
        navigate('/');
    }

    const handleRevealResult = () => {
        setDisabled(true); // 다른 버튼들 비활성화
        onRevealResult(); // 기존 결과 보기 실행
        setButtonText("Next"); //버튼 텍스트 다음으로 바꾸기
    };

    //라운드 바뀔 때마다 버튼 원래대로
    useEffect(() => {
        setDisabled(false);
        setButtonText("Check");
    },[round])

    return (
        <div className="btn1">
            <button onClick={handleRevealResult}>{buttonText}</button>
            <button onClick={onDie} disabled={disabled}>Die</button>
            <button onClick={onDiscard} disabled={disabled}>Discard</button>
            <button onClick={reload}>Reset Game</button>
            <button onClick={goToHome}>Home</button>
        </div>
    );
}

export default Btn;
