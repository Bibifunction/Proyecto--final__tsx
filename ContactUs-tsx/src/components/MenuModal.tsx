import type React from "react"
import "./MenuModal.css"

interface MenuModalProps {
  isOpen: boolean
  closeMenu: () => void
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, closeMenu }) => {
  return (
    <div className={`menu-modal ${isOpen ? "menu-modal--active" : ""}`}>
      <div className="menu-modal__content">
        <button className="menu-modal__close" onClick={closeMenu}>
          <img src="/src/assets/close-thick.svg" alt="Close" className="menu-modal__close-icon" />
        </button>
        <div className="menu-modal__items">
          {/* Grupo 1: My account y My events */}
          <div className="menu-modal__group">
            <a href="#" className="menu-modal__item">
              My account
            </a>
            <a href="#" className="menu-modal__item">
              My events
            </a>
          </div>
          <div className="menu-modal__separator"></div>

          {/* Grupo 2: Create event */}
          <div className="menu-modal__group">
            <a href="#" className="menu-modal__item">
              Create event
            </a>
          </div>
          <div className="menu-modal__separator"></div>

          {/* Grupo 3: About us y Contact us */}
          <div className="menu-modal__group">
            <a href="#" className="menu-modal__item">
              About us
            </a>
            <a href="#" className="menu-modal__item">
              Contact us
            </a>
          </div>
          <div className="menu-modal__separator"></div>

          {/* Grupo 4: Log out */}
          <div className="menu-modal__group">
            <a href="#" className="menu-modal__item">
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal


