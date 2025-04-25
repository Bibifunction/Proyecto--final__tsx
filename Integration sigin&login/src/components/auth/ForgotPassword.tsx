import type React from "react"
import { useState } from "react"
import "./ForgotPassword.css"
import { validateEmail } from "../../utils/validation"
import Spinner from "../Spinner"

// Add custom navigation prop
interface ForgotPasswordProps {
  customNavigation: {
    navigate: (path: string) => void
  }
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ customNavigation }) => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailError) setEmailError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validateEmail(email)
    if (!validation.isValid) {
      setEmailError(validation.message)
      return
    }

    // Email is valid, proceed with submission
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Reset password requested for:", email)
      // Here you would typically send the request to your API
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="forgot-password-overlay">
      <div className="forgot-password-modal">
        <div className="forgot-password__content">
          <h1 className="forgot-password__title">PawPlay</h1>
          <h2 className="forgot-password__subtitle">Reset Your Password</h2>

          {!isSubmitted ? (
            <>
              <div className="forgot-password__form-content">
                <p className="forgot-password__description">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
                <form className="forgot-password__form" onSubmit={handleSubmit}>
                  <div className="forgot-password__form-group">
                    <label htmlFor="email" className="forgot-password__label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`forgot-password__input ${emailError ? "forgot-password__input--error" : ""}`}
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                    {emailError && <span className="forgot-password__error">{emailError}</span>}
                  </div>

                  <div className="forgot-password__actions">
                    <button type="submit" className="forgot-password__button" disabled={isLoading}>
                      {isLoading ? <Spinner size="small" color="white" /> : "Send Link"}
                    </button>

                    <div className="forgot-password__alternative">
                      <span>or</span>
                      <a
                        href="#"
                        className="forgot-password__login-link"
                        onClick={(e) => {
                          e.preventDefault()
                          if (!isLoading) {
                            customNavigation.navigate("login")
                          }
                        }}
                      >
                        Back to Login
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="forgot-password__success">
              <p className="forgot-password__success-message">
                We've sent a password reset link to your email. Please check your inbox.
              </p>
              <button
                className="forgot-password__button forgot-password__back-button"
                onClick={() => customNavigation.navigate("login")}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
















