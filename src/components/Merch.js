import React from 'react';
import Card from './Card';
import '../styles/Card.css';
import 'animate.css';
import tiroshBottle from '../images/tirosh-bottle.jpg';
import tiroshShirt from '../images/tirosh-shirt.png';
import tiroshHoodie from '../images/tirosh-hoodie.png';
import tiroshKeyboard from '../images/tirosh-keyboard.jpg';
import tiroshPackage from '../images/tirosh-package.jpg';

function Merch() {
  return (
    <div>
      <div className='about-title-container'>
        <h1 id='about-title'>OUR MERCH</h1>
        <hr/>
      </div>
      <div className='card-array animate__animated animate__backInLeft'>
        <Card title="Tirosh Keyboard" img={tiroshKeyboard} price='99$'/>
        <Card title="Hoodie" img={tiroshHoodie} price='21.99$'/>
        <Card title="Shirt" img={tiroshShirt} price='10.99$'/>
        <Card title="Tirosh Bottle" img={tiroshBottle} price='5.99$'/>
        <Card title="Tirosh Bundle" img={tiroshPackage} price='35.99$'/>
      </div>
    </div>
  );
}

export default Merch;