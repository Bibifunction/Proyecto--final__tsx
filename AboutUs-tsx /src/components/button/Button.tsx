import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'yellow' | 'brown';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'yellow', 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={`button button--${variant}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};