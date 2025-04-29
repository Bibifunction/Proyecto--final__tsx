import type { InputHTMLAttributes } from "react"
import "./Input.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = ({ error, className, ...props }: InputProps) => {
  return (
    <div className="input-wrapper">
      <input className={`signin__input ${error ? "signin__input--error" : ""} ${className || ""}`} {...props} />
      {error && <div className="input-error">{error}</div>}
    </div>
  )
}

export default Input


