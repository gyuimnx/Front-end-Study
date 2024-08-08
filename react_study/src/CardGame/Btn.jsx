import React, { useState, useEffect } from "react";
import './Btn.css';
import { useNavigate } from "react-router-dom";

function Btn({ onDiscard, onRevealResult, onDie, round }) {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("결과보기");

    function reload() {
        window.location.replace('/home')
    };

    function goToHome() {
        navigate('/');
    }

    const handleRevealResult = () => {
        setDisabled(true); // 다른 버튼들 비활성화
        onRevealResult(); // 기존 결과 보기 실행
        setButtonText("다음"); //버튼 텍스트 다음으로 바꾸기
    };

    //라운드 바뀔 때마다 버튼 원래대로
    useEffect(() => {
        setDisabled(false);
        setButtonText("결과보기");
    },[round])

    return (
        <div className="btn1">
            <button onClick={handleRevealResult}>{buttonText}</button>
            <button onClick={onDie} disabled={disabled}>다이</button>
            <button onClick={onDiscard} disabled={disabled}>버리기</button>
            <button onClick={reload}>게임 초기화</button>
            <button onClick={goToHome}>홈</button>
        </div>
    );
}

export default Btn;
