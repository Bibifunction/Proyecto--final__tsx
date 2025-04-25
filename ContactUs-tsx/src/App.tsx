import type React from "react"
import { useState } from "react"
import Header from "./components/Header"
import MenuModal from "./components/MenuModal"
import ContactForm from "./components/ContactForm"
import "./App.css"

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MenuModal isOpen={isMenuOpen} closeMenu={closeMenu} />
      <main className="main">
        <div className="contact-modal">
          <div className="contact-modal__image">
            <div className="contact-modal__image-container">
              <img src="/src/assets/imagen.png" alt="Dog with headphones" className="contact-modal__img" />
            </div>
          </div>
          <div className="contact-modal__form">
            <h1 className="contact-modal__title">Paw in touch</h1>
            <p className="contact-modal__subtitle">Leave your paw print! Write to us and let's create some buzz.</p>
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  )
}

export default App







