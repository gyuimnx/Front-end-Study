import React, { useState, useEffect } from "react";
import './Home.css';
import GameSpace from './GameSpace';
import Opponent from './Opponent';
import Player from './Player';
import Btn from './Btn';
import WinOrLose from './WinOrLose';


const initialCards = [
    {id: 0, isDone: false, content: "1★"},
    {id: 1, isDone: false, content: "1"},
    {id: 2, isDone: false, content: "2"},
    {id: 3, isDone: false, content: "3"},
    {id: 4, isDone: false, content: "4"},
    {id: 5, isDone: false, content: "5"},
    {id: 6, isDone: false, content: "6"},
    {id: 7, isDone: false, content: "7"},
    {id: 8, isDone: false, content: "8"},
    {id: 9, isDone: false, content: "9"},
    {id: 10, isDone: false, content: "10"},
    {id: 11, isDone: false, content: "11"},
    {id: 12, isDone: false, content: "12"},
    {id: 13, isDone: false, content: "13"},
    {id: 14, isDone: false, content: "14"},
    {id: 15, isDone: false, content: "15"},
    {id: 16, isDone: false, content: "16"},
    {id: 17, isDone: false, content: "17"},
    {id: 18, isDone: false, content: "18"},
    {id: 19, isDone: false, content: "19"},
    {id: 20, isDone: false, content: "20"},
    {id: 21, isDone: false, content: "20★"}
]

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function Home() {
    const [cards, setCards] = useState(shuffleArray([...initialCards])); //Card 배치(랜덤)
    const [selectedCards, setSelectedCards] = useState([]); //Player가 선택한 카드 정보
    const [selectedCardIndexToDiscard, setSelectedCardIndexToDiscard] = useState(null);  // 플레이어가 버린 카드의 인덱스
    const [playerDiscardedCard, setPlayerDiscardedCard] = useState(false); //Player가 카드를 버렸는지 여부
    const [opponentDiscarded, setOpponentDiscarded] = useState(false); //Opponent가 카드를 버렸는지 여부
    const [isOpponentCardRevealed, setIsOpponentCardRevealed] = useState(false); //Opponent의 카드 공개 여부
    const [winner, setWinner] = useState(null); //승패 결정
    const [opponentCards, setOpponentCards] = useState([]);
    const [resetOpponentCards, setResetOpponentCards] = useState(false); // 새로운 상태 추가
    const [count, setCount] = useState(3);
    const [opponentSelectedCardIds, setOpponentSelectedCardIds] = useState([]);
    const [round, setRound] = useState(1);
    const [allSelectedCardIds, setAllSelectedCardIds] = useState([]);
    const [resetTrigger, setResetTrigger] = useState(0);
    const [playerWins, setPlayerWins] = useState(0); // 플레이어 승리 카운트
    const [opponentWins, setOpponentWins] = useState(0); // 상대방 승리 카운트
    const [gameOver, setGameOver] = useState(false); // 게임 종료 상태
    const [discardedPlayerCard,setDiscardedPlayerCard] = useState(null);

    function onSelected(targetId) {
        const selectedCard = cards.find(card => card.id === targetId);
        if (selectedCards.length < 2 && !selectedCard.isDone  && !opponentSelectedCardIds.includes(targetId) && selectedCardIndexToDiscard === null) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, selectedCard]);
            setAllSelectedCardIds(prevIds => [...prevIds, targetId]);
            setCards(prevCards => 
                prevCards.map(card => 
                    card.id === targetId ? {...card, isDone: true} : card
                )
            );
        }
    }

    function handleCardClick(index) {   
        setSelectedCardIndexToDiscard(index);
    }

    function handleDiscardCard() {
        if (selectedCardIndexToDiscard !== null) {
            const discardedCard = selectedCards[selectedCardIndexToDiscard];
            setSelectedCards(prevCards => prevCards.filter((_, index) => index !== selectedCardIndexToDiscard));
            setSelectedCardIndexToDiscard(null);
            setPlayerDiscardedCard(true);

                    // 버려진 카드 저장
            setDiscardedPlayerCard(discardedCard);
    
            // 플레이어가 카드를 버렸다고 표시
            setTimeout(() => setPlayerDiscardedCard(false), 300000);
        }
    };

    console.log("Player가 버린 카드: ", discardedPlayerCard);

    function handleRevealResult() {
        if (playerDiscardedCard) {
            // 카드가 버려졌고, 상대 카드가 공개되어 있는지 확인
            if (selectedCards.length > 0 && opponentCards.length > 0) {
                determineWinner();
                setIsOpponentCardRevealed(true);
            } else {
                console.log("결과를 공개할 수 없습니다. 카드가 버려지고 선택되었는지 확인하세요.");
            }
        } else {
            console.log("플레이어가 카드를 버리지 않았습니다.");
        }
    }

    useEffect(() => {
        if (isOpponentCardRevealed) {
            console.log("상대 카드가 공개되었습니다.");
        }
    }, [isOpponentCardRevealed]);
    
    //승패 결정
    function determineWinner() {
        if (!isOpponentCardRevealed) {
            console.log("상대 카드가 공개되지 않았습니다.");
            return;
        }
    
        const playerPickCard = selectedCards[0];
        const opponentPickCard = opponentCards[0];
    
        if (!playerPickCard || !opponentPickCard) {
            console.log("선택된 카드 또는 상대 카드가 없습니다.");
            return;
        }
    
        console.log("플레이어 카드:", playerPickCard);
        console.log("상대 카드:", opponentPickCard);
    
        const getValue = (card) => parseInt(card.content.replace('★', ''), 10);
        const playerValue = getValue(playerPickCard);
        const opponentValue = getValue(opponentPickCard);
    
        console.log("플레이어 카드 값:", playerValue);
        console.log("상대 카드 값:", opponentValue);
    
        if (playerValue === 1 && opponentValue === 20 && !opponentPickCard.content.includes('★')) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1); // 플레이어 승리 카운트 증가

        } else if (playerValue === 1 && opponentValue === 20 && opponentPickCard.content.includes('★')) {
            setWinner('Lose');
            setOpponentWins(prevWins => prevWins + 1); // 상대방 승리 카운트 증가
            
        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 20) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1);

        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 20 && opponentPickCard.content.includes('★')) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1);

        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 1) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1);

        } else if (playerValue === 20 && !playerPickCard.content.includes('★') && opponentValue === 1 && opponentPickCard.content.includes('★')) {
            setWinner('Lose');
            setOpponentWins(prevWins => prevWins + 1);

        } else if (playerValue === 20 && playerPickCard.content.includes('★') && opponentValue === 20 && !opponentPickCard.content.includes('★')) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1);

        } else if (playerValue > opponentValue) {
            setWinner('Win!');
            setPlayerWins(prevWins => prevWins + 1);

        } else {
            setWinner('Lose');
            setOpponentWins(prevWins => prevWins + 1);

        }
    
        console.log(winner);
    };

    function resetGame() {
        setSelectedCards([]);
        setPlayerDiscardedCard(false);
        setOpponentDiscarded(false);
        setIsOpponentCardRevealed(false);
        setResetTrigger(prev => prev + 1);
        setWinner(null);
        setResetOpponentCards(prev => !prev);
        setOpponentSelectedCardIds([]);
        setCards(prevCards => prevCards.map(card => ({
            ...card,
            isDone: allSelectedCardIds.includes(card.id)
        })));
        setRound(prevRound => prevRound + 1);
        setOpponentCards([]);
    }

    function handleDie() {
        setSelectedCards([]);
        setPlayerDiscardedCard(false);
        setOpponentDiscarded(false);
        setIsOpponentCardRevealed(false);
        setWinner(null);
        setResetOpponentCards(prev => !prev); // 상태 토글로 초기화
    }

    function updateOpponentCards(cards) {
        setOpponentCards(cards);
        const newOpponentCardIds = cards.map(card => card.id);
        setOpponentSelectedCardIds(prevIds => [...prevIds, ...newOpponentCardIds]);
        setAllSelectedCardIds(prevIds => [...prevIds, ...newOpponentCardIds]);
    }

    useEffect(() => {
        if (winner) {
            const countdownTimer = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount > 0) return prevCount -1;
                    clearInterval(countdownTimer);
                    return 0;
                });
            }, 1000);

            const timer = setTimeout(() => {
                resetGame();
                setCount(3);
            }, 3000); // 3초 후 메시지 제거
            return () => {
                clearInterval(countdownTimer);
                clearTimeout(timer);
            };
        }
    }, [winner]);

    function handleGameOver() {
        setGameOver(true); // 게임 종료 상태 설정
    }

    return (
        <div className="App">
            {gameOver && (
                <div className="overlay-GameOver">
                    <h1 className="GameOverMessage">The game ends</h1>
                    <button onClick={() => window.location.replace('/home')} className="btn">Restart Game</button>
                    <button onClick={() => window.location.href = '/'}>Home</button>
                </div>
            )}
            {winner && <div className="overlay">
                <div className="countdown">{count > 0 ? count : ''}</div>
                <div className="result">{winner}</div>
            </div>}
            <div className="round">{round} Round</div>
            <Opponent 
                cards={cards} 
                selectedPlayerCards={selectedCards}
                opponentCards={opponentCards}
                onOpponentDiscard={playerDiscardedCard} 
                isRevealed={isOpponentCardRevealed}
                setOpponentDiscarded={setOpponentDiscarded}
                resetOpponentCards={resetOpponentCards}
                onOpponentCardsUpdate={updateOpponentCards}
                setOpponentCards={setOpponentCards}
                round={round}
                resetTrigger={resetTrigger}
            />
            <GameSpace cards={cards} onSelected={onSelected} opponentSelectedCardIds={opponentSelectedCardIds} onGameOver={handleGameOver}/>
            <Player 
                selectedCards={selectedCards} 
                onClickCard={handleCardClick} 
                highlightedCardindex={selectedCardIndexToDiscard} 
                round={round} 
                discardedPlayerCard={discardedPlayerCard}
            />
            <WinOrLose playerWins={playerWins} opponentWins={opponentWins} />
            <Btn onDiscard={handleDiscardCard} onRevealResult={handleRevealResult} onDie={handleDie} round={round}/>
        </div>
    );
}

export default Home;