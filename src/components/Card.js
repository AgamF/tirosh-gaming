import React from 'react';
import '../styles/Card.css';

const clickItem = () => {
  alert("Sorry, this item isn't available at this moment.");
}

function Card({ title, img, price }) {
  return (
    <div onClick={clickItem} className='card-container'>
      <div>
        <h3>{`${title} | ${price}`}</h3>
      </div>
      <img alt='' src={img}/>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default Card;