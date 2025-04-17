import "./styles/Header.css"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <img src={logo || "/placeholder.svg"} alt="PawPlay Logo" className="header__logo" />
    </header>
  )
}

  

