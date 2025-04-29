import type React from 'react';
import { useState, type FormEvent } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import './SigninForm.css';

// Simple validation functions defined directly in this file
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

interface FormData {
  name: string;
  dogName: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  dogName?: string;
  email?: string;
  password?: string;
}

const SigninForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dogName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validaciones más compactas
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = 'Required';
    if (!formData.dogName) newErrors.dogName = 'Required';

    if (!formData.email) {
      newErrors.email = 'Required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Min 8 chars';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Mostrar errores solo cuando se intenta enviar el formulario
    setShowErrors(true);

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        alert('Login successful!');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  // Este manejador ahora no hace nada - el enlace "Log in" no navegará a ninguna parte
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // No hacer nada cuando se hace clic en "Log in"
    console.log('Log in clicked, but no navigation will occur');
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // No hacer nada cuando se hace clic en "Terms of Services"
    console.log('Terms of Services clicked, but no navigation will occur');
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // No hacer nada cuando se hace clic en "Privacy Policy"
    console.log('Privacy Policy clicked, but no navigation will occur');
  };

  return (
    <main className="signin">
      <div className="signin__card">
        <div className="signin__image-container">
          <img
            src="/src/assets/imagen1.png"
            alt="Dog with glasses using a laptop"
            className="signin__image"
          />
        </div>
        <div className="signin__form-container">
          <div className="signin__form-content">
            <h1 className="signin__title">PawPlay</h1>
            <h2 className="signin__subtitle">Become a PawPlayer</h2>

            <div className="signin__form">
              <div className="signin__form-group">
                <label htmlFor="name" className="signin__label">
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Put your name"
                  value={formData.name}
                  onChange={handleChange}
                  error={showErrors ? errors.name : undefined}
                  className={
                    errors.name && showErrors ? 'signin__input--error' : ''
                  }
                />
              </div>

              <div className="signin__form-group">
                <label htmlFor="dogName" className="signin__label">
                  Your dog's name
                </label>
                <Input
                  id="dogName"
                  name="dogName"
                  placeholder="Put the name of your dog"
                  value={formData.dogName}
                  onChange={handleChange}
                  error={showErrors ? errors.dogName : undefined}
                  className={
                    errors.dogName && showErrors ? 'signin__input--error' : ''
                  }
                />
              </div>

              <div className="signin__form-group">
                <label htmlFor="email" className="signin__label">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Put your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={showErrors ? errors.email : undefined}
                  className={
                    errors.email && showErrors ? 'signin__input--error' : ''
                  }
                />
              </div>

              <div className="signin__form-group">
                <label htmlFor="password" className="signin__label">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Put a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  error={showErrors ? errors.password : undefined}
                  className={
                    errors.password && showErrors ? 'signin__input--error' : ''
                  }
                />
              </div>
            </div>
          </div>

          <div className="signin__actions">
            <Button
              type="submit"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              className="signin__button"
            >
              Sign in
            </Button>

            <div className="signin__login">
              <span>or</span>
              <a
                href="#"
                className="signin__login-link"
                onClick={handleLoginClick}
              >
                Log in
              </a>
            </div>

            <footer className="signin__footer">
              <p className="signin__footer-text">
                By become a paw player you agree to our
                <a
                  href="#"
                  className="signin__footer-link"
                  onClick={handleTermsClick}
                >
                  {' '}
                  Terms of Services
                </a>{' '}
                and
                <a
                  href="#"
                  className="signin__footer-link"
                  onClick={handlePrivacyClick}
                >
                  {' '}
                  Privacy Policy
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SigninForm;
