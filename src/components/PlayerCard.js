import React from "react";
import '../styles/PlayerCard.css';

function PlayerCard({ name, img }) {
  return (
    <div className="playercard-container">
      <h3>{name}</h3>
      <img alt='' src={img}/>
    </div>
  );
}

export default PlayerCard;