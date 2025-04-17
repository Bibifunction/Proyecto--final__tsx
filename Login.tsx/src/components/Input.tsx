import "./styles/Input.css"
import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export default function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="form__group">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <input id={id} className={`form__input ${className}`} {...props} />
    </div>
  )
}

