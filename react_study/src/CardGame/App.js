import React, {useState} from "react";
import './App.css';
import GameSpace from './GameSpace';
import Opponent from './Opponent';
import Player from './Player';
import Btn from './Btn';


const initialCards = [
    {
        id: 0,
        isDone: false,
        content: "1",
    },
    {
        id: 1,
        isDone: false,
        content: "2",
    },
    {
        id: 2,
        isDone: false,
        content: "3",
    },
    {
        id: 3,
        isDone: false,
        content: "4",
    },
    {
        id: 4,
        isDone: false,
        content: "5",
    },
    {
        id: 5,
        isDone: false,
        content: "6",
    },
    {
        id: 6,
        isDone: false,
        content: "7",
    },
    {
        id: 7,
        isDone: false,
        content: "8",
    },
    {
        id: 8,
        isDone: false,
        content: "9",
    },
    {
        id: 9,
        isDone: false,
        content: "10",
    },
    {
        id: 10,
        isDone: false,
        content: "11",
    },
    {
        id: 11,
        isDone: false,
        content: "12",
    },
    {
        id: 12,
        isDone: false,
        content: "13",
    },
    {
        id: 13,
        isDone: false,
        content: "14",
    },
    {
        id: 14,
        isDone: false,
        content: "15",
    },
    {
        id: 15,
        isDone: false,
        content: "16",
    },
    {
        id: 16,
        isDone: false,
        content: "17",
    },
    {
        id: 17,
        isDone: false,
        content: "18",
    },
    {
        id: 18,
        isDone: false,
        content: "19",
    },
    {
        id: 19,
        isDone: false,
        content: "20",
    },
    {
        id: 20,
        isDone: false,
        content: "21",
    },
    {
        id: 21,
        isDone: false,
        content: "22",
    }
]

function App() {
    const [cards, setCards] = useState(initialCards);
    const [selectedCards, setSelectedCards] = useState([]);

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


    return (
        <div className="App">
            <Opponent></Opponent>
            <GameSpace cards={cards} onSelected={onSelected}></GameSpace>
            <Player selectedCards={selectedCards}></Player>
            <Btn></Btn>
        </div>
    );
};

export default App;