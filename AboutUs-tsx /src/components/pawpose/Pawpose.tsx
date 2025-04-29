import React from 'react';
import './Pawpose.css';

export const Pawpose: React.FC = () => {
  return (
    <div className="pawpose-section">
      <div className="pawpose-tag">
        <span className="dot"></span>
        <span className="label-text">Our pawpose</span>
      </div>
      
      <div className="info-items">
        <div className="info-item">
          <h3 className="info-title">Unleashing connections</h3>
          <p className="info-text">We make it easy fot pups and their humans to meet, play, and build lifelong friendships.</p>
          <div className="separator"></div>
        </div>
        
        <div className="info-item">
          <h3 className="info-title">Move waggily, love wildly</h3>
          <p className="info-text">No more lonely walks! We connect dog lovers for tail-wagging meetups anytime, anywhere.</p>
          <div className="separator"></div>
        </div>
        
        <div className="info-item">
          <h3 className="info-title">Meet, greet, stay</h3>
          <p className="info-text">Because life's better when shared-especially with paws, barks, and happy xoomies.</p>
        </div>
      </div>
    </div>
  );
};