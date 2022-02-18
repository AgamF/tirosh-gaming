import React from 'react';
import '../styles/Navbar.css';
import tiroshPic from '../images/tirosh.png';

function Navbar({ getAbout,
  getMerch, 
  getTeams, 
  getWallpapers }) {
  return (
    <nav className='animate__animated animate__backInDown'>
      <div className='site-title'>
        <h1 onClick={()=>window.location.reload()}>Tirosh Gaming</h1>
        <img alt='' src={tiroshPic}/>
        <p>We are intoxicating.</p>
      </div>
      <div className='btn-array'>
        <button onClick={getAbout}>About</button>
        <button onClick={getMerch}>Merch</button>
        <button onClick={getTeams}>Teams</button>
        <button onClick={getWallpapers}>Wallpapers</button>
      </div>
    </nav>
  );
}

export default Navbar;