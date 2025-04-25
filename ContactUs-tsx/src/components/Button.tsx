import type React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'brown';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'yellow',
  type = 'button',
  onClick,
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
