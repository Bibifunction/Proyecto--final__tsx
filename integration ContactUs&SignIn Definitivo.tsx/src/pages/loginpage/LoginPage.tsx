"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import "./LoginPage.css"
import type { PageType } from "../../App"

// Define validation functions directly in the component
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Update the validatePassword function to check for uppercase and lowercase letters
const validatePassword = (password: string): boolean => {
  // Check for minimum length of 8 characters AND at least one uppercase AND one lowercase
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)
}

interface LoginPageProps {
  navigateTo: (path: PageType) => void
}

export default function LoginPage({ navigateTo }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [recoveryEmailSent, setRecoveryEmailSent] = useState(false)

  useEffect(() => {
    // Set the body class for the login page background
    document.body.className = "login-page"
    document.body.style.overflow = "hidden"

    // Prevenir zoom en dispositivos móviles
    const metaViewport = document.querySelector('meta[name="viewport"]')
    const originalContent = metaViewport?.getAttribute("content") || ""
    metaViewport?.setAttribute("content", originalContent + ", maximum-scale=1.0, user-scalable=0")

    // Set form validation messages to English
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
      form.setAttribute("lang", "en")
    })

    // Override browser's default validation messages
    document.addEventListener(
      "invalid",
      (() => (e) => {
        const target = e.target as HTMLInputElement
        if (target.validity.valueMissing) {
          target.setCustomValidity("Please complete this field")
        } else if (target.validity.typeMismatch) {
          target.setCustomValidity("Please enter a valid value")
        } else {
          target.setCustomValidity("")
        }
      })(),
      true,
    )

    console.log("LoginPage mounted")

    return () => {
      // Clean up when component unmounts
      document.body.className = ""
      document.body.style.overflow = ""
      // Restaurar configuración original
      metaViewport?.setAttribute("content", originalContent)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validar campos antes de enviar
    let isValid = true

    // Validar email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      isValid = false
    } else {
      setEmailError("")
    }

    // Validar contraseña
    if (!validatePassword(password)) {
      setPasswordError("Password must have 8+ chars with uppercase & lowercase")
      isValid = false
    } else {
      setPasswordError("")
    }

    if (!isValid) return

    setIsLoading(true) // Activar el spinner

    // Simulamos una carga de 2 segundos
    try {
      // Aquí iría la lógica real de autenticación
      console.log("Login with:", { email, password })
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aqui procesariamos la respuesta del servidor
      console.log("Login successful!")

      // Desactivar el spinner después de la carga
      setIsLoading(false)
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
    }
  }

  // Función para navegar a la página de registro (SignInPage)
  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo("signin")
  }

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isLoading) {
      setShowForgotPassword(true)
      setRecoveryEmailSent(false)
    }
  }

  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false)
    setRecoveryEmailSent(false)
  }

  const handleSendRecoveryEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setRecoveryEmailSent(true)
    }
  }

  return (
    <div className="app">
      <Header navigateTo={navigateTo} pageType="login" />
      <div className="login-page-container">
        <div className="modal">
          <div className="modal__image-container">
            <img src="/src/assets/Imagen 2.png" alt="Husky with glasses" className="modal__image" />
          </div>
          <div className="modal__content">
            <h1 className="modal__title">PawPlay</h1>
            <h2 className="modal__subtitle">Become a PawPlayer</h2>

            <form className="form" onSubmit={handleSubmit} noValidate lang="en">
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form__input ${emailError ? "form__input--error" : ""}`}
                  placeholder="Put your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError && validateEmail(e.target.value)) {
                      setEmailError("")
                    }
                  }}
                  required
                  disabled={isLoading}
                />
                {emailError && <span className="form__error">{emailError}</span>}
              </div>

              <div className="form__group">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form__input ${passwordError ? "form__input--error" : ""}`}
                  placeholder="Put your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (passwordError && validatePassword(e.target.value)) {
                      setPasswordError("")
                    }
                  }}
                  required
                  disabled={isLoading}
                  onInvalid={(e) => {
                    const target = e.target as HTMLInputElement
                    target.setCustomValidity("Please complete this field")
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.setCustomValidity("")
                  }}
                />
                {passwordError && <span className="form__error">{passwordError}</span>}
                <a href="#" className="form__forgot-link" onClick={handleForgotPassword}>
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="form__button" disabled={isLoading}>
                {isLoading ? (
                  <div className="spinner">
                    <div className="spinner__circle"></div>
                  </div>
                ) : (
                  "Log in"
                )}
              </button>

              <a href="#" className="form__sign-in-link" onClick={handleSignUp}>
                <span className="or-text">or</span> <span className="sign-in-text">Sign in</span>
              </a>

              <p className="form__policy">
                by become a paw player you agree to our{" "}
                <a href="#" className="form__link">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="form__link">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>

        {showForgotPassword && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="password-modal">
                {!recoveryEmailSent ? (
                  <>
                    <h3 className="password-modal__title">Recover your password</h3>
                    <p className="password-modal__description">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>

                    <form className="password-modal__form" onSubmit={handleSendRecoveryEmail} noValidate lang="en">
                      <div className="password-modal__form-group">
                        <label htmlFor="recovery-email" className="password-modal__label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="recovery-email"
                          className="password-modal__input"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          onInvalid={(e) => {
                            const target = e.target as HTMLInputElement
                            target.setCustomValidity("Please enter a valid email address")
                          }}
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement
                            target.setCustomValidity("")
                          }}
                        />
                      </div>

                      <button type="submit" className="password-modal__button">
                        Send
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h3 className="password-modal__title">Email sent</h3>
                    <p className="password-modal__description">
                      We've sent a password recovery link to your email. Please check your inbox.
                    </p>
                    <button type="button" className="password-modal__button" onClick={handleCloseForgotPassword}>
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}











