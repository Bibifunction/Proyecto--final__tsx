import type React from "react"
import "./Input.css"

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return <input className={`form__input ${className || ""}`} {...props} />
}

export default Input

