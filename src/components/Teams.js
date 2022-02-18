import React from 'react';
import PlayerCard from './PlayerCard';
import Agam from '../images/pfp.jpg';
import '../styles/PlayerCard.css';
import csIcon from '../images/csgoicon.png';
import r6s from '../images/r6s.png';
import rqm from '../images/redquestionmark.png';
import yoav from '../images/yoav.jpg';
import ziv from '../images/ziv.jpg';

function Teams() {
  return (
    <div>
      <div className='about-title-container'>
        <h1 id='about-title'>OUR TEAMS</h1>
        <hr/>
      </div>
      <div className='game-container animate__animated animate__backInLeft'>
        <h3>CS:GO | <img alt='' style={{width: 50}} src={csIcon} /></h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
         }}>
          <PlayerCard name="Agam Farajpur" img={Agam} />
          <PlayerCard name="Agam Farajpur" img={Agam} />
          <PlayerCard name="Agam Farajpur" img={Agam} />
          <PlayerCard name="Agam Farajpur" img={Agam} />
          <PlayerCard name="Agam Farajpur" img={Agam} />
        </div>
      </div>
      <br/><br/><br/>
      <div className='game-container animate__animated animate__backInLeft'>
        <h3>Rainbow Six Siege | <img alt='' style={{width: 50}} src={r6s} /></h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
         }}>
          <PlayerCard name="Yoav Mend" img={yoav} />
          <PlayerCard name="Ziv Eini" img={ziv} />
          <PlayerCard name="Unknown" img={rqm} />
          <PlayerCard name="Unknown" img={rqm} />
          <PlayerCard name="Unknown" img={rqm} />
        </div>
      </div>
    </div>
  ); 
}

export default Teams;