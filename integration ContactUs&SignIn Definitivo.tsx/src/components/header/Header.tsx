import type React from "react"
import { useEffect, useState } from "react"
import "./Header.css"
import "../button/Button.css"
import type { PageType } from "../../App"

interface HeaderProps {
  toggleMenu?: () => void
  navigateTo?: (path: PageType) => void
  pageType: PageType
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, navigateTo, pageType }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Verificar si estamos en móvil al cargar
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 576)
    }

    // Verificar inicialmente
    checkMobile()

    // Verificar cuando cambie el tamaño de la ventana
    window.addEventListener("resize", checkMobile)

    // Limpiar el event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (navigateTo) {
      navigateTo("signin")
    }
  }

  const handleLogoClick = () => {
    if (navigateTo) {
      navigateTo("contact")
    }
  }

  return (
    <header className="header">
      <img
        src="/src/assets/logo.svg"
        alt="Logo"
        className="header__logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />

      {/* Solo mostrar los botones y menu en  header de contactUs */}
      {pageType === "contact" && (
        <div className="header__actions">
          {!isMobile && <button className="button button--yellow">Create event</button>}
          <a href="#" className="header__sign-in" onClick={handleSignInClick}>
            Sign in
          </a>
          <button className="header__menu-toggle" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" fill="black" />
              <rect y="11" width="24" height="2" fill="black" />
              <rect y="18" width="24" height="2" fill="black" />
            </svg>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header









