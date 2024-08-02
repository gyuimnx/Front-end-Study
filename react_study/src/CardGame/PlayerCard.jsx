import React from "react";
import './PlayerCard.css'

function PlayerCard({selectedCards = [] }) {
    const card1BorderStyle = selectedCards[0] ? '2px solid black' : '2px dashed gray';
    const card2BorderStyle = selectedCards[1] ? '2px solid black' : '2px dashed gray';

    return (
        <div className="PlayerCards">
            <div className="PlayerCard1" style={{ border : card1BorderStyle}}>{selectedCards[0] ? selectedCards[0].content : '카드1'}</div>
            <div className="PlayerCard2" style={{ border : card2BorderStyle}}>{selectedCards[1] ? selectedCards[1].content : '카드2'}</div>
        </div>
    );
};

export default PlayerCard;