import type React from "react"
import { useState } from "react"
import Header from "../Header"
import "./SignIn.css"
import "../Spinner.css"
import logoSrc from "../../assets/logo.svg"
import imageSrc from "../../assets/imagen1.png"
import { validateEmail, validatePassword } from "../../utils/validation"
import Spinner from "../Spinner"

// Add custom navigation prop
interface SignInProps {
  customNavigation: {
    navigate: (path: string) => void
  }
}

const SignIn: React.FC<SignInProps> = ({ customNavigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    dogName: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    dogName: "",
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))

    // Clear error when user types
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      dogName: formData.dogName ? "" : "Dog's name is required",
      email: validateEmail(formData.email).message,
      password: validatePassword(formData.password).message,
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return
    }

    // Form is valid, proceed with submission
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your API
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header logoSrc={logoSrc} />
      <main className="signin">
        <div className="signin__card">
          <div className="signin__image-container">
            <img src={imageSrc || "/placeholder.svg"} alt="Dog with glasses using a laptop" className="signin__image" />
          </div>
          <div className="signin__form-container">
            <div className="signin__form-content">
              <h1 className="signin__title">PawPlay</h1>
              <h2 className="signin__subtitle">Become a PawPlayer</h2>

              <form className="signin__form" onSubmit={handleSubmit}>
                <div className="signin__form-group">
                  <label htmlFor="name" className="signin__label">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Put your name"
                    className={`signin__input ${errors.name ? "signin__input--error" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.name && <span className="signin__error">{errors.name}</span>}
                </div>

                <div className="signin__form-group">
                  <label htmlFor="dogName" className="signin__label">
                    Your dog's name
                  </label>
                  <input
                    type="text"
                    id="dogName"
                    placeholder="Put the name of your dog"
                    className={`signin__input ${errors.dogName ? "signin__input--error" : ""}`}
                    value={formData.dogName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.dogName && <span className="signin__error">{errors.dogName}</span>}
                </div>

                <div className="signin__form-group">
                  <label htmlFor="email" className="signin__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Put your email"
                    className={`signin__input ${errors.email ? "signin__input--error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.email && <span className="signin__error">{errors.email}</span>}
                </div>

                <div className="signin__form-group">
                  <label htmlFor="password" className="signin__label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Put a strong password"
                    className={`signin__input ${errors.password ? "signin__input--error" : ""}`}
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.password && <span className="signin__error">{errors.password}</span>}
                </div>

                <div className="signin__actions">
                  <button type="submit" className="signin__button" disabled={isLoading}>
                    {isLoading ? <Spinner size="small" color="white" /> : "Sign in"}
                  </button>

                  <div className="signin__login">
                    <span>or</span>
                    <a
                      href="#"
                      className="signin__login-link"
                      onClick={(e) => {
                        e.preventDefault()
                        if (!isLoading) {
                          customNavigation.navigate("login")
                        }
                      }}
                    >
                      Log In
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <footer className="signin__footer">
              <p className="signin__footer-text">
                By becoming a paw player you agree to our{" "}
                <a href="#" className="signin__footer-link">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="signin__footer-link">
                  Privacy Policy
                </a>
              </p>
            </footer>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn















