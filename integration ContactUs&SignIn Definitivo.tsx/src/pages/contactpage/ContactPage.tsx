import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import MenuModal from "../../components/menumodal/MenuModal"
import ContactForm from "../../components/contactform/ContactForm"
import "../../index.css"
import "./ContactPage.css"


type PageType = "contact" | "signin" | "login"

interface ContactPageProps {
  navigateTo: (path: PageType) => void
}

export default function ContactPage({ navigateTo }: ContactPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
  
    document.body.className = "contact-page"
    document.body.style.overflow = "hidden"

    
    const metaViewport = document.querySelector('meta[name="viewport"]')
    const originalContent = metaViewport?.getAttribute("content") || ""
    metaViewport?.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")

    console.log("ContactPage mounted")

    return () => {
      
      document.body.className = ""
      document.body.style.overflow = ""
     
      metaViewport?.setAttribute("content", originalContent)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      <Header toggleMenu={toggleMenu} navigateTo={navigateTo} pageType="contact" />
      <MenuModal isOpen={isMenuOpen} closeMenu={closeMenu} navigateTo={navigateTo} />
      <div className="contact-page-container">
        <div className="contact-modal">
          <div className="contact-modal__image">
           
              <img src="/src/assets/imagen.png" alt="Dog with headphones" className="contact-modal__img" />
          
          </div>
          <div className="contact-modal__form">
            <h1 className="contact-modal__title">Paw in touch</h1>
            <p className="contact-modal__subtitle">Leave your paw print! Write to us and let's create some buzz.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}









