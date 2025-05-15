'use client';

import type React from 'react';
import { useRef, useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Referencias para los inputs
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;

    // Set custom validation messages in English
    if (nameInputRef.current) {
      nameInputRef.current.setCustomValidity('');
      if (!formData.name.trim()) {
        nameInputRef.current.setCustomValidity('Complete this field');
        isValid = false;
      }
    }

    if (emailInputRef.current) {
      emailInputRef.current.setCustomValidity('');
      if (!formData.email.trim()) {
        emailInputRef.current.setCustomValidity('Complete this field');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        emailInputRef.current.setCustomValidity(
          'Please enter a valid email address'
        );
        isValid = false;
      }
    }

    if (messageInputRef.current) {
      messageInputRef.current.setCustomValidity('');
      if (!formData.message.trim()) {
        messageInputRef.current.setCustomValidity('Complete this field');
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Validate the form
    if (!validateForm()) {
      if (formRef.current) {
        formRef.current.reportValidity();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
      ref={formRef}
    >
      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="contact-form__input"
          placeholder="Put your name"
          required
          value={formData.name}
          onChange={handleChange}
          ref={nameInputRef}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="contact-form__input"
          placeholder="Put your email"
          required
          value={formData.email}
          onChange={handleChange}
          ref={emailInputRef}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Message
        </label>
        <textarea
          id="message"
          className="contact-form__input contact-form__textarea"
          placeholder="Write your message"
          required
          value={formData.message}
          onChange={handleChange}
          ref={messageInputRef}
        />
      </div>

      <div className="contact-form__submit">
        <button
          type="button"
          className="contact-form__button"
          disabled={isSubmitting || isSuccess}
          onClick={handleSubmit}
        >
          <span className="contact-form__button-content">
            {isSubmitting ? (
              <>
                <span className="contact-form__spinner"></span>
                <span>Sending...</span>
              </>
            ) : isSuccess ? (
              'Message sent'
            ) : (
              'Submit'
            )}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
