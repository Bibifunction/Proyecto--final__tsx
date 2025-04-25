import { useState, useEffect } from "react"
import SignIn from "./components/auth/SignIn"
import Login from "./components/auth/Login"
import ForgotPassword from "./components/auth/ForgotPassword"
import "./App.css"
import "./index.css"
import "./components/ui/Input.css"
import "./components/ui/Button.css"

function App() {
  // Use state to track the current page
  const [currentPage, setCurrentPage] = useState("signin")

  // Create a custom navigation object to pass to components
  const customNavigation = {
    navigate: (path: string) => {
      setCurrentPage(path)
    },
  }

  // Update the CSS variables based on the current page
  useEffect(() => {
    const root = document.documentElement

    if (currentPage === "login") {
      // Login background color
      root.style.setProperty("--color-background", "var(--color-background-login)")
    } else if (currentPage === "signin") {
      // SignIn background color
      root.style.setProperty("--color-background", "var(--color-background-signin)")
    }
  }, [currentPage])

  // Render the appropriate component based on currentPage
  const renderPage = () => {
    // Base page is either signin or login
    const basePage =
      currentPage === "signin" || currentPage === "default" ? (
        <SignIn customNavigation={customNavigation} />
      ) : (
        <Login customNavigation={customNavigation} />
      )

    // If forgot-password is active, show it as an overlay on top of the login page
    return (
      <>
        {currentPage !== "forgot-password" ? basePage : <Login customNavigation={customNavigation} />}
        {currentPage === "forgot-password" && <ForgotPassword customNavigation={customNavigation} />}
      </>
    )
  }

  return (
    <div className="app">
      <div className="content">{renderPage()}</div>
    </div>
  )
}

export default App



















