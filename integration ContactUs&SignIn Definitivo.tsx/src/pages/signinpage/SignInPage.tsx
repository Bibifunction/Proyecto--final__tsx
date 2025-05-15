"use client"

import { useEffect } from "react"
import Header from "../../components/header/Header"
import SigninForm from "../../components/signinform/SigninForm"
import MenuModal from "../../components/menumodal/MenuModal"
import { useState } from "react"
import "./SignInPage.css"
import type { PageType } from "../../App"

interface SignInPageProps {
  navigateTo: (path: PageType) => void
}

const SignInPage = ({ navigateTo }: SignInPageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Set the body class for the signin page background
    document.body.className = "signin-page"
    document.body.style.overflow = "hidden"

    return () => {
      // Clean up when component unmounts
      document.body.className = ""
      document.body.style.overflow = ""
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
      <Header toggleMenu={toggleMenu} navigateTo={navigateTo} pageType="signin" />
      <MenuModal isOpen={isMenuOpen} closeMenu={closeMenu} navigateTo={navigateTo} />
      <div className="signin-page-container">
        <SigninForm navigateTo={navigateTo} />
      </div>
    </div>
  )
}

export default SignInPage








