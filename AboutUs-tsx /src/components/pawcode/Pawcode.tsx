import React from 'react';
import './Pawcode.css';

interface CodeItem {
  title: string;
  text: string;
}

export const Pawcode: React.FC = () => {
  const codeItems: CodeItem[] = [
    { title: 'Paw first', text: 'Happy pups, happy people. That\'s our priority.' },
    { title: 'Play together', text: 'Friendships are better with wagging tails.' },
    { title: 'Stay pawsitive', text: 'We believe in good wibes and good doggos.' },
    { title: 'Unleash joy', text: 'Every meetup is a chance for zoomies and fun.' },
    { title: 'Fetch pawsibility', text: 'Building a world where all dogs (and humans) belong.' }
  ];

  return (
    <div className="pawcode-section">
      <div className="pawcode-tag">
        <span className="dot"></span>
        <span className="label-text">The paw code</span>
      </div>
      
      <div className="code-items">
        {codeItems.map((item, index) => (
          <div key={index} className="code-item">
            <h3 className="code-title">{item.title}</h3>
            <p className="code-text">{item.text}</p>
            {index < codeItems.length - 1 && <div className="separator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};