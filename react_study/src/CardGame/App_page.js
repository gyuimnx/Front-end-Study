import React from "react";
import { useNavigate } from "react-router-dom";
import './App_page.css'

function App() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/home');
    };

    const goToRules = () => {
        navigate('/rules');
    };

    return (
        <div className="pageApp">
            <h1 className="pageTitle">Welcom to the CardGame</h1>
            <button className="pageBtn" onClick={goToHome}>Start Game</button>
            <button className="pageBtn" onClick={goToRules}>Game Rules</button>
        </div>
    )
};

export default App;