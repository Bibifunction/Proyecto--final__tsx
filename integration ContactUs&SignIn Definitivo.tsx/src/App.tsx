import { useState } from "react"
import "./App.css"
import ContactPage from "./pages/contactpage/ContactPage"
import SignInPage from "./pages/signinpage/SignInPage"
import LoginPage from "./pages/loginpage/LoginPage"

// Definir los tipos de páginas disponibles
export type PageType = "contact" | "signin" | "login"

function App() {
  // Estado para controlar qué página se muestra
  const [currentPage, setCurrentPage] = useState<PageType>("contact")

  // Función para navegar entre páginas
  const navigateTo = (path: PageType) => {
    console.log("Navigating to:", path)
    setCurrentPage(path)
  }

  return (
    <>
      {currentPage === "contact" && <ContactPage navigateTo={navigateTo} />}
      {currentPage === "signin" && <SignInPage navigateTo={navigateTo} />}
      {currentPage === "login" && <LoginPage navigateTo={navigateTo} />}
    </>
  )
}

export default App


































