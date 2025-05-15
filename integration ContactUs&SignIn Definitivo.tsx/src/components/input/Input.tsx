import type React from "react"
import "./Input.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input: React.FC<InputProps> = ({ error, className = "", ...props }) => {
  const inputClassName = `input ${error ? "input--error" : ""} ${className}`

  return (
    <div className="input-container">
      <input className={inputClassName} {...props} />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}

export default Input



