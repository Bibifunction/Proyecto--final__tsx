import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  isLoading?: boolean
  children: ReactNode
}

const Button = ({ children, variant = "primary", isLoading = false, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`signin__button ${variant === "secondary" ? "signin__button--secondary" : ""} ${className || ""}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="signin__button-loader">
          <span className="signin__button-spinner"></span>
        </span>
      ) : (
        <span className="signin__button-text">{children}</span>
      )}
    </button>
  )
}

export default Button












