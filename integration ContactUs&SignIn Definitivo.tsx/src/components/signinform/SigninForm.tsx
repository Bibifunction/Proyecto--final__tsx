"use client"

import type React from "react"
import { useState, type FormEvent, useEffect } from "react"
import Button from "../button/Button"
import "./SigninForm.css"
import type { PageType } from "../../App"

// Simple validation functions defined directly in this file
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Updated password validation to require uppercase and lowercase letters
const validatePassword = (password: string): boolean => {
  // Check for minimum length of 8 characters AND at least one uppercase AND one lowercase
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)
}

interface FormData {
  name: string
  dogName: string
  email: string
  password: string
}

interface FormErrors {
  name?: string
  dogName?: string
  email?: string
  password?: string
}

interface SigninFormProps {
  navigateTo?: (path: PageType) => void
}

const SigninForm = ({ navigateTo }: SigninFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dogName: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    // Load saved form data from localStorage if available
    const savedData = localStorage.getItem("signupFormData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      } catch (error) {
        console.error("Error parsing saved form data:", error)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updatedFormData = {
      ...formData,
      [name]: value,
    }

    setFormData(updatedFormData)

    // Save to localStorage as user types
    localStorage.setItem("signupFormData", JSON.stringify(updatedFormData))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  // Validaciones más compactas
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name) newErrors.name = "Complete this field"
    if (!formData.dogName) newErrors.dogName = "Complete this field"

    if (!formData.email) {
      newErrors.email = "Complete this field"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email"
    }

    // For password, check if it's empty first
    if (!formData.password) {
      newErrors.password = "Complete this field"
    } else if (!validatePassword(formData.password)) {
      // If not empty but doesn't meet requirements, set a special error code
      // We'll use this to show the requirements message instead
      newErrors.password = "requirements_not_met"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Mostrar errores solo cuando se intenta enviar el formulario
    setShowErrors(true)

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData)

        // Save form data to localStorage
        localStorage.setItem("signupFormData", JSON.stringify(formData))
        localStorage.setItem(
          "registeredUser",
          JSON.stringify({
            email: formData.email,
            name: formData.name,
            registeredAt: new Date().toISOString(),
          }),
        )

        setIsSubmitting(false)

        // Success message or reset form if needed
        // But don't navigate away
      }, 2000) // Increased to 2 seconds to ensure spinner is visible
    } else {
      // Prevent page from scrolling/moving when validation fails
      window.scrollTo({
        top: window.scrollY,
        behavior: "auto",
      })
    }
  }

  // Función para navegar a la página de login
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (navigateTo) {
      navigateTo("login")
    }
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // No hacer nada cuando se hace clic en "Terms of Services"
    console.log("Terms of Services clicked, but no navigation will occur")
  }

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // No hacer nada cuando se hace clic en "Privacy Policy"
    console.log("Privacy Policy clicked, but no navigation will occur")
  }

  return (
    <main className="signin">
      <div className="signin__card">
        <div className="signin__image-container">
          <img src="/src/assets/Imagen1.png" alt="Dog with glasses using a laptop" className="signin__image" />
        </div>
        <div className="signin__form-container">
          <div className="signin__form-content">
            <h1 className="signin__title">PawPlay</h1>
            <h2 className="signin__subtitle">Become a PawPlayer</h2>

            <form className="signin__form" onSubmit={handleSubmit} noValidate>
              <div className="signin__form-group">
                <label htmlFor="name" className="signin__label">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  className={`signin__input ${showErrors && errors.name ? "signin__input-error" : ""}`}
                  placeholder="Put your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {showErrors && errors.name && <div className="signin__error">!{errors.name}</div>}
              </div>

              <div className="signin__form-group">
                <label htmlFor="dogName" className="signin__label">
                  Your dog's name
                </label>
                <input
                  id="dogName"
                  name="dogName"
                  className={`signin__input ${showErrors && errors.dogName ? "signin__input-error" : ""}`}
                  placeholder="Put the name of your dog"
                  value={formData.dogName}
                  onChange={handleChange}
                />
                {showErrors && errors.dogName && <div className="signin__error">!{errors.dogName}</div>}
              </div>

              <div className="signin__form-group">
                <label htmlFor="email" className="signin__label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`signin__input ${showErrors && errors.email ? "signin__input-error" : ""}`}
                  placeholder="Put your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {showErrors && errors.email && <div className="signin__error">!{errors.email}</div>}
              </div>

              <div className="signin__form-group">
                <label htmlFor="password" className="signin__label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`signin__input ${showErrors && errors.password ? "signin__input-error" : ""}`}
                  placeholder="Put a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {/* Show "Complete this field" when the field is empty */}
                {showErrors && errors.password === "Complete this field" && (
                  <div className="signin__error">!{errors.password}</div>
                )}

                {/* Show password requirements only when the user has entered an invalid password */}
                {showErrors && errors.password === "requirements_not_met" && (
                  <div className="signin__error">Password must have 8+ chars with uppercase & lowercase</div>
                )}
              </div>
            </form>
          </div>

          <div className="signin__actions">
            <Button type="submit" onClick={handleSubmit} isLoading={isSubmitting} className="signin__button">
              Sign in
            </Button>

            <div className="signin__login">
              <span className="or-text">or</span>
              <a href="#" className="signin__login-link" onClick={handleLoginClick}>
                Log in
              </a>
            </div>

            <footer className="signin__footer">
              <p className="signin__footer-text">
                By become a paw player you agree to our
                <a href="#" className="signin__footer-link" onClick={handleTermsClick}>
                  {" "}
                  Terms of Services
                </a>{" "}
                and
                <a href="#" className="signin__footer-link" onClick={handlePrivacyClick}>
                  {" "}
                  Privacy Policy
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SigninForm









