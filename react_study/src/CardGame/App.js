import React, { useState, useEffect } from "react";
import './App.css';
import GameSpace from './GameSpace';
import Opponent from './Opponent';
import Player from './Player';
import Btn from './Btn';


const initialCards = [
    {id: 0, isDone: false, content: "1"},
    {id: 1, isDone: false, content: "2"},
    {id: 2, isDone: false, content: "3"},
    {id: 3, isDone: false, content: "4"},
    {id: 4, isDone: false, content: "5"},
    {id: 5, isDone: false, content: "6"},
    {id: 6, isDone: false, content: "7"},
    {id: 7, isDone: false, content: "8"},
    {id: 8, isDone: false, content: "9"},
    {id: 9, isDone: false, content: "10"},
    {id: 10, isDone: false, content: "1★"},
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

function App() {
    const [cards, setCards] = useState(shuffleArray([...initialCards])); //Card 배치(랜덤)
    const [selectedCards, setSelectedCards] = useState([]); //Player가 선택한 카드 정보
    const [selectedCardIndexToDiscard, setSelectedCardIndexToDiscard] = useState(null);  // 플레이어가 버린 카드의 인덱스
    const [playerDiscardedCard, setPlayerDiscardedCard] = useState(false); //Player가 카드를 버렸는지 여부
    const [opponentDiscarded, setOpponentDiscarded] = useState(false); //Opponent가 카드를 버렸는지 여부
    const [isOpponentCardRevealed, setIsOpponentCardRevealed] = useState(false); //Opponent의 카드 공개 여부
    const [winner, setWinner] = useState(null); //승패 결정
    const [opponentCards, setOpponentCards] = useState([]);
    const [resetOpponentCards, setResetOpponentCards] = useState(false); // 새로운 상태 추가

    function onSelected(targetId) {
        const selectedCard = cards.find(card => card.id === targetId);
        if (selectedCards.length < 2 && !selectedCard.isDone) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, selectedCard]);
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
            setSelectedCards(prevCards => prevCards.filter((_, index) => index !== selectedCardIndexToDiscard));
            setSelectedCardIndexToDiscard(null);
            setPlayerDiscardedCard(true);
    
            // 플레이어가 카드를 버렸다고 표시
            setTimeout(() => setPlayerDiscardedCard(false), 300000);
        }
    }
    
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
            setWinner('Player');
        } else if (playerValue === 1 && opponentValue === 20 && opponentPickCard.content.includes('★')) {
            setWinner('Opponent');
        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 20) {
            setWinner('Player');
        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 20 && opponentPickCard.content.includes('★')) {
            setWinner('Player');
        } else if (playerValue === 1 && playerPickCard.content.includes('★') && opponentValue === 1) {
            setWinner('Player');
        } else if (playerValue === 20 && !playerPickCard.content.includes('★') && opponentValue === 1 && opponentPickCard.content.includes('★')) {
            setWinner('Opponent');
        } else if (playerValue === 20 && playerPickCard.content.includes('★') && opponentValue === 20 && !opponentPickCard.content.includes('★')) {
            setWinner('Player');
        } else if (playerValue > opponentValue) {
            setWinner('Player');
        } else {
            setWinner('Opponent');
        }
    
        console.log("승리자:", winner);
    };

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
    }

    useEffect(() => {
        if (winner) {
            const timer = setTimeout(() => {
                setWinner(null);
            }, 5000); // 3초 후 메시지 제거
            return () => clearTimeout(timer);
        }
    }, [winner]);

    return (
        <div className="App">
            {winner && <div className="overlay">
                <div className="result">{winner} 승!</div>
            </div>}
            <Opponent 
                cards={cards} 
                selectedPlayerCards={selectedCards}
                opponentCards={opponentCards}
                onOpponentDiscard={playerDiscardedCard} 
                isRevealed={isOpponentCardRevealed}
                setOpponentDiscarded={setOpponentDiscarded}
                resetOpponentCards={resetOpponentCards}
                onOpponentCardsUpdate={updateOpponentCards}
            />
            <GameSpace cards={cards} onSelected={onSelected} />
            <Player selectedCards={selectedCards} onClickCard={handleCardClick} highlightedCardindex={selectedCardIndexToDiscard}/>
            <Btn onDiscard={handleDiscardCard} onRevealResult={handleRevealResult} onDie={handleDie}/>
        </div>
    );
}

export default App;