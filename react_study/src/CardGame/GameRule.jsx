import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './GameRule.css';

function GameRule() {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [
        {
            title: "게임 규칙",
            content: (
                <>
                    <p className="subTitle">게임 목표</p>
                    <p className="explan">이 게임의 목표는 상대방의 카드보다 높은 카드를 가지고 승리하는 것이다.</p>
                    <p className="subTitle">카드 설명</p>
                    <p className="explan">각 카드에는 1부터 20까지의 숫자와 1★, 20★의 숫자가 적혀 있다. 숫자가 높을수록 강한 카드이다.</p>
                    <p className="subTitle">주의 사항</p>
                    <p className="explan">1과 1★, 20과 20★ 카드인 경우에는 특별한 규칙이 적용된다.</p>
                    <ul>
                        <li>1은 20을 이긴다.</li>
                        <li>1★은 1, 20, 20★을 이긴다.</li>
                        <li>20★은 1, 20을 이긴다.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "게임 규칙",
            content: (
                <>
                    <p className="subTitle">게임 진행</p>
                    <ul>
                        <li>각 플레이어는 2장의 카드를 선택한다.</li>
                        <li>선택한 카드에 따라 1부터 10까지는 Low, 11부터 20까지는 High라고 표시된다.</li>
                        <li>플레이어는 카드 중 하나를 선택후 <button className="DiscardBtn">Discard</button> 버튼을 눌러 카드를 버릴 수 있다.</li>
                        <li>카드를 버리고 난 후 버린 카드의 숫자가 공개된다.</li>
                        <li>버려진 카드를 보고 게임을 계속 진행할지 카드를 다시 선택할지 고를 수 있다.</li>
                        <li><button className="DieBtn">Die</button> 버튼을 누르면 선택했던 카드는 사라지고 카드를 다시 선택하게 된다.</li>
                        <li><button className="CheckBtn">Check</button> 버튼을 누르면 서로의 카드가 공개된다.</li>
                        <li>서로의 카드가 공개되고, <button className="CheckBtn">Next</button> 버튼을 누르면 승자가 결정된다.</li>
                        <li>필드에 카드가 4장 이하로 남게되면 게임은 종료된다.</li>
                    </ul>
                </>
            ),
        },
    ];

    const navigate = useNavigate();
    function goToHome() {
        navigate('/');
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const { title, content } = pages[currentPage - 1];

    return (
        <div className="RulesContainer">
            <button className="homeBtn" onClick={goToHome}><img src="img/arrow.png" alt="Home" /></button>
            <div className="Rules">
                <h1>{title}</h1>
                {content}
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><img src="img/leftArrow.png" alt="leftArrow" /></button>
                    <span>{currentPage} / {pages.length}</span>
                    <button onClick={handleNextPage} disabled={currentPage === pages.length}><img src="img/rightArrow.png" alt="rightArrow" /></button>
                </div>
            </div>
        </div>
    );
};

export default GameRule;
