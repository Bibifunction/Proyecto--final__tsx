import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="contact-text-container">
        <p className="contact-title">Want to know more about us or the project?</p>
        <p className="contact-subtitle">Get in touch!</p>
      </div>
      <button className="button button--yellow">Contact us</button>
    </div>
  );
};