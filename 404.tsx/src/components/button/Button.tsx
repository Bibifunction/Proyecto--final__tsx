import type React from "react"

import { useCallback } from "react"
import "./Button.css"

interface ButtonProps {
  text: string
  url?: string
  onClick?: () => void
  className?: string
}

function Button({ text, url = "/", onClick, className = "" }: ButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (onClick) {
        onClick()
      } else if (url) {
        window.location.href = url
      }
    },
    [onClick, url],
  )

  return (
    <a href={url} className={`button ${className}`} onClick={handleClick}>
      {text}
    </a>
  )
}

export default Button
