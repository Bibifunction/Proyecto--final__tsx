/**
 * Password validation utility functions
 */

interface ValidationResult {
  isValid: boolean
  message: string
}

/**
 * Validates a password based on common security requirements
 * @param password - The password to validate
 * @returns ValidationResult object with isValid flag and message
 */
export function validatePassword(password: string): ValidationResult {
  // Empty password check
  if (!password) {
    return {
      isValid: false,
      message: "Password is required",
    }
  }

  // Length check
  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters long",
    }
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one uppercase letter",
    }
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one lowercase letter",
    }
  }

  // Check for number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    }
  }

  // Check for special character
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one special character",
    }
  }

  // If all checks pass
  return {
    isValid: true,
    message: "",
  }
}

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns ValidationResult object with isValid flag and message
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return {
      isValid: false,
      message: "Email is required",
    }
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Please enter a valid email address",
    }
  }

  return {
    isValid: true,
    message: "",
  }
}


