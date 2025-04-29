"use client"

import { useEffect } from "react"
import Header from "../../components/header/Header"
import SigninForm from "../../components/signinform/SigninForm"
import "./SignInPage.css"

const SignInPage = () => {
  useEffect(() => {
    // Set the body class for the signin page background
    document.body.className = "signin-page"

    return () => {
      // Clean up when component unmounts
      document.body.className = ""
    }
  }, [])

  return (
    <>
      <Header isSigninPage={true} />
      <div className="signin-page-container">
        <SigninForm />
      </div>
    </>
  )
}

export default SignInPage




