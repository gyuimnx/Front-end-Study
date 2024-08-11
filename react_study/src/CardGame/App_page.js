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
            <h1 className="pageTitle">Final Choice</h1>
            <button className="pageBtn" onClick={goToHome}>Start Game</button>
            <button className="pageBtn" onClick={goToRules}>Game Rules</button>
        </div>
    )
};

export default App;

//<img className="topImg" src="img/커튼.png" alt="4" />
// <img className="leftImg" src="img/카니발.png" alt="1" />
// <img className="centerImg" src="img/카니발.png" alt="2" />
// <img className="rightImg" src="img/카니발.png" alt="3" />