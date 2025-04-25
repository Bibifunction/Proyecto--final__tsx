import type React from "react"
import { useState } from "react"
import Header from "../Header"
import "./Login.css"
import logoSrc from "../../assets/logo.svg"
import imageSrc from "../../assets/Imagen.png"
import { validateEmail } from "../../utils/validation"
import Spinner from "../Spinner"

// Add custom navigation prop
interface LoginProps {
  customNavigation: {
    navigate: (path: string) => void
  }
}

const Login: React.FC<LoginProps> = ({ customNavigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
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
      email: validateEmail(formData.email).message,
      password: formData.password ? "" : "Password is required",
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
      <main className="main">
        <div className="modal">
          <div className="modal__image-container">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt="Perro con gafas trabajando en un portátil"
              className="modal__image"
            />
          </div>
          <div className="modal__content">
            <h1 className="modal__title">PawPlay</h1>
            <h2 className="modal__subtitle">Become a PawPlayer</h2>

            <div className="form__content">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`form__input ${errors.email ? "form__input--error" : ""}`}
                    placeholder="Put your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.email && <span className="form__error">{errors.email}</span>}
                </div>

                <div className="form__group">
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={`form__input ${errors.password ? "form__input--error" : ""}`}
                    placeholder="Put a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.password && <span className="form__error">{errors.password}</span>}
                  <a
                    href="#"
                    className="form__forgot-link"
                    onClick={(e) => {
                      e.preventDefault()
                      if (!isLoading) {
                        customNavigation.navigate("forgot-password")
                      }
                    }}
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="form__actions">
                  <button type="submit" className="form__button" disabled={isLoading}>
                    {isLoading ? <Spinner size="small" color="white" /> : "Login"}
                  </button>

                  <div className="form__alternative">
                    <span>or</span>
                    <a
                      href="#"
                      className="form__sign-in"
                      onClick={(e) => {
                        e.preventDefault()
                        if (!isLoading) {
                          customNavigation.navigate("signin")
                        }
                      }}
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <div className="form__footer">
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
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login











