import { useState } from "react"
import ContactPage from "./pages/contactpage/ContactPage"
import SignInPage from "./pages/signinpage/SignInPage"
import "./index.css"
import "./App.css" // Asegurarnos de importar App.css

function App() {
  const [currentPage, setCurrentPage] = useState<string>("/")

  // Simple navigation function - only used for the "Sign in" link in the header
  const navigateTo = (path: string) => {
    setCurrentPage(path)
  }

  // Render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "/signin":
        return <SignInPage />
      case "/":
      default:
        return <ContactPage navigateTo={navigateTo} />
    }
  }

  return renderPage()
}

export default App
































