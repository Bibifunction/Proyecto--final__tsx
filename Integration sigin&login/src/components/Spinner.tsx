import type React from "react"
import "./Spinner.css"

interface SpinnerProps {
  size?: "small" | "medium" | "large"
  color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size = "medium", color = "var(--color-button)" }) => {
  const sizeClass = `spinner--${size}`

  return (
    <div className={`spinner ${sizeClass}`} style={{ borderTopColor: color }}>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner

