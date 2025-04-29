import type React from "react"
import { useState, useRef } from "react"
import "./ContactForm.css"
import "../button/Button.css"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Referencias para los inputs para poder acceder a sus propiedades
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Establecer mensajes de error personalizados en inglés
    if (nameInputRef.current) {
      nameInputRef.current.setCustomValidity("")
      if (!nameInputRef.current.value) {
        nameInputRef.current.setCustomValidity("Please complete this field")
      }
    }

    if (emailInputRef.current) {
      emailInputRef.current.setCustomValidity("")
      if (!emailInputRef.current.value) {
        emailInputRef.current.setCustomValidity("Please complete this field")
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputRef.current.value)) {
        emailInputRef.current.setCustomValidity("Please enter a valid email address")
      }
    }

    if (messageInputRef.current) {
      messageInputRef.current.setCustomValidity("")
      if (!messageInputRef.current.value) {
        messageInputRef.current.setCustomValidity("Please complete this field")
      }
    }

    // Verificar si el formulario es válido
    const form = e.target as HTMLFormElement
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        setIsSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          placeholder="Put your name"
          required
          value={formData.name}
          onChange={handleChange}
          ref={nameInputRef}
        />
      </div>

      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          placeholder="Put your email"
          required
          value={formData.email}
          onChange={handleChange}
          ref={emailInputRef}
        />
      </div>

      <div className="form__group">
        <label htmlFor="message" className="form__label">
          Message
        </label>
        <textarea
          id="message"
          className="form__input form__input--textarea"
          placeholder="Write your message"
          required
          value={formData.message}
          onChange={handleChange}
          ref={messageInputRef}
        />
      </div>

      <div className="form__submit">
        <button type="submit" className="button button--brown" disabled={isSubmitting || isSuccess}>
          {isSubmitting ? (
            <>
              <div className="spinner"></div> Sending...
            </>
          ) : isSuccess ? (
            <div className="success-message">Message sent</div>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm


