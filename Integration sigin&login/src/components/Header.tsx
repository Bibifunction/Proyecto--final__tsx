import type React from "react"
import "./Header.css"

interface HeaderProps {
  logoSrc: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="header">
      <img src={logoSrc || "/placeholder.svg"} alt="PawPlay Logo" className="header__logo" />
    </header>
  )
}

export default Header




