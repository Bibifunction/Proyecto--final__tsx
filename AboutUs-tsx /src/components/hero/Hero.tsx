import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <div className="about-tag">
          <span className="dot"></span>
          <span className="label-text">About us</span>
        </div>
        
        <div className="main-title-container">
          <h1 className="main-title">We fetch friendships by bringing pups and people together for tail-wagging adventures</h1>
        </div>
      </div>
      
      <div className="main-image-container">
        <img src="/src/assets/image.png" alt="Dogs on leashes" className="main-image" />
      </div>
    </>
  );
};