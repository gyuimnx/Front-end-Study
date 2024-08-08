import { useParams, useNavigate } from "react-router-dom";

function GameRule() {
    const navigate = useNavigate();
    function goToHome() {
        navigate('/');
    }
    const params = useParams();
    console.log(params)
    return (
        <button onClick={goToHome}>홈</button>
    )
};

export default GameRule;