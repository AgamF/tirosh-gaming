import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='herosection-container animate__animated animate__backInUp'>
      <h1>The best that Esports have ever seen.</h1>
      <button onClick={() => {
        window.location.href = "https://agamfaraj.netlify.app"
      }}>More about the developer</button>
    </div>
  );
}

export default HeroSection;