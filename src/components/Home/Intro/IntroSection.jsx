import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>Introducing Scout</h1>
        <p>Scout allows you to instantly search ingredients and identify prospects so you spend less time prospecting and more time selling.</p>
        <button className="intro-button">Try for free</button>
      </div>
      <div className="intro-graphics">
        <img src="../images/main.png" alt="Abstract shapes and smartphone" />
      </div>
    </div>
  );
}

export default IntroSection;
