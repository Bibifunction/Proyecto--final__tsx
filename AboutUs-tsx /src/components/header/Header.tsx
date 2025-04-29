import React from 'react';
import './Header.css';

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <header className="header">
      <img src="/src/assets/logo.svg" alt="Logo" className="header__logo" />
      
      <div className="header__actions">
        <button className="button button--yellow">Create event</button>
        <a href="#" className="header__sign-in">Sign in</a>
        <button className="header__menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" fill="black"/>
            <rect y="11" width="24" height="2" fill="black"/>
            <rect y="18" width="24" height="2" fill="black"/>
          </svg>
        </button>
      </div>
    </header>
  );
};