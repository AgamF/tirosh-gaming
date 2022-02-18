import React from 'react';
import '../styles/About.css';
import tiroshPic from '../images/tirosh.png';

function AboutSection() {
  return (
    <div className='animate__animated animate__backInRight'>
      <div className='about-title-container'>
        <h1 id='about-title'>OUR STORY</h1>
        <hr/>
      </div>
      <div className='paragraph-div'>
        <p>
          Tirosh Gaming is an international Esports organization <br/>
          founded by Yoav Mendelovich A.K.A Yoavik and Agam Farajpur A.K.A Adapt. <br/>
          It all started as a joke but once we started to understand <br/>
          the hidden potential of Tirosh Gaming, we had comitted everything to the cause <br/>
        </p>
      </div>
      <div className='paragraph-div'>
        <p>
          Our brand is based on the famous Israeli wine brand, Tirosh. <br/>
          It is the tastiest wine you'll ever get to drink. <br/>
          During our gaming sessions, we always gulp a good bottle of Tirosh.
        </p>
      </div>
      <div className='paragraph-div'>
        <p>
          We are sponsored by Tirosh, <br/>
          if it wasn't clear already. 
        </p>
      </div>
      <div className='paragraph-div'>
        <p>
          Make sure to buy some Tirosh at your local store.
        </p>
        <img alt='' src={tiroshPic}/>
      </div>
    </div>
  );
}

export default AboutSection;