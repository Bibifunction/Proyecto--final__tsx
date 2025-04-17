import logoSvg from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <img src={logoSvg || "/placeholder.svg"} alt="PawPlay Logo" className="header__logo" />
    </header>
  )
}
  
  
  