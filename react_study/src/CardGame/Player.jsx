import React from "react";
import PlayerCard from "./PlayerCard";
import './Player.css'

function Player({selectedCards}) {
    return (
        <div className="Player">
            <PlayerCard selectedCards={selectedCards} />
            <div>
                상 하
            </div>
        </div>
    )
};

export default Player;