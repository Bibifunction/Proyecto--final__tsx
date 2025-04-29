import React from 'react';
import './Team.css';

export const Team: React.FC = () => {
  return (
    <div className="team-section">
      <div className="team-container">
        <div className="team-tag">
          <span className="dot dot--yellow"></span>
          <span className="label-text label-text--white">Our team</span>
        </div>

        <div className="team-members">
          <div className="team-member">
            <img
              src="/src/assets/Bi.png"
              alt="Team member"
              className="team-img"
            />
          </div>

          <div className="team-member">
            <img
              src="/src/assets/Joan.png"
              alt="Team member"
              className="team-img"
            />
          </div>

          <div className="team-member">
            <img
              src="/src/assets/Alvaro.png"
              alt="Team member"
              className="team-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
