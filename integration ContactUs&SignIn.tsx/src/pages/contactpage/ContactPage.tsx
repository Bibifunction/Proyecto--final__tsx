import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import MenuModal from "../../components/menumodal/MenuModal"
import ContactForm from "../../components/contactform/ContactForm"
import "./ContactPage.css"

interface ContactPageProps {
  navigateTo?: (path: string) => void
}

const ContactPage = ({ navigateTo }: ContactPageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Set the body class for the contact page background
    document.body.className = "contact-page"

    return () => {
      // Clean up when component unmounts
      document.body.className = ""
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} navigateTo={navigateTo} />
      <MenuModal isOpen={isMenuOpen} closeMenu={closeMenu} navigateTo={navigateTo} />
      <main className="main contact-page-container">
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

export default ContactPage


