import "./styles/Button.css"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button className={`button ${variant === "secondary" ? "button--secondary" : ""} ${className}`} {...props}>
      {children}
    </button>
  )
}

