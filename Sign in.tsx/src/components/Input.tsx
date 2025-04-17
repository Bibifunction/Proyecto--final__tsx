import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = ({ error, className, ...props }: InputProps) => {
  return (
    <div className="input-wrapper">
      <input className={`signin__input ${error ? "signin__input--error" : ""} ${className || ""}`} {...props} />
    </div>
  )
}

export default Input





















