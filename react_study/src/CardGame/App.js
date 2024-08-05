import React, {useState,useEffect} from "react";
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
    const [playerDiscardedCard, setPlayerDiscardedCard] = useState(false); //Player가 카드를 버렸나 안버렸나 여부
    // const [opponentCards, setOpponentCards] = useState([]);
    // const [revealOpponentCards, setRevealOpponentCards] = useState(false);  // 상대방 카드 공개 여부

    // useEffect(() => {
    //     if (playerDiscardedCard) {
    //         setIsRevealed(true); // 카드 공개
    //         setTimeout(() => {
    //             // 카드 공개 후 상대방 카드 처리
    //             setSelectedOpponentCards(prevCards => prevCards.slice(0, 1)); // 상대방 카드 한 장만 공개
    //         }, 1500); // 카드 공개 지연
    //     }
    // }, [playerDiscardedCard]);

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

            setTimeout(() => setPlayerDiscardedCard(false), 1500);
        }
    }

    return (
        <div className="App">
            <Opponent cards={cards} selectedPlayerCards={selectedCards} onOpponentDiscard={playerDiscardedCard} />
            <GameSpace cards={cards} onSelected={onSelected} />
            <Player selectedCards={selectedCards} onClickCard={handleCardClick} highlightedCardindex={selectedCardIndexToDiscard}/>
            <Btn onDiscard={handleDiscardCard} />
        </div>
    );
}

export default App;