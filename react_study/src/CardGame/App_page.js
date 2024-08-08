import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import './App_page.css'

function App() {
    const [point, setPoint] = useState(500);
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/home');
    };
    const goToRules = () => {
        navigate('/rules');
    }

    function upPoint() {
        setPoint(point + 100);
    };

    function downPoint() {
        setPoint(point - 100);
        if (point === 100) {
            setPoint(100)
        }
    };

    return (
        <div className="pageApp">
            <h1 className="pageTitle">Welcom to the CardGame</h1>
            <button className="pageBtn" onClick={goToHome}>Start Game</button>
            <button className="pageBtn" onClick={goToRules}>Game Rules</button>
            <div className="startPoint">
                <p>Start Point : {point}</p>
                <button onClick={upPoint}>+</button>
                <button onClick={downPoint}>-</button>
            </div>
        </div>
    )
};

export default App;