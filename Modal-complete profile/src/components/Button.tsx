import type React from "react"
import "./Button.css"

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`} type={type}>
      <span className="button-text">{children}</span>
    </button>
  )
}

export default Button
