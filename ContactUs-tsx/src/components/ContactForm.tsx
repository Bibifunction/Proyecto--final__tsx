import type React from "react"
import { useState } from "react"
import "./ContactForm.css"
import "./Button.css"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <form className="form" onSubmit={handleSubmit}>
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





