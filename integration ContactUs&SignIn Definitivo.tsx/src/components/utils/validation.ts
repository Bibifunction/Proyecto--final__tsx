// Funciones de validacion para el formulario

/**
 * Valida el formato de un email
 * @param email Email a validar
 * @returns true si el email es valido, false en caso contrario
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida que una contraseña cumpla con los requisitos minimos
 * @param password Contraseña a validar
 * @returns true si la contraseña es valida, false en caso contrario
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 8
}

/**
 * Valida el formato de un email para recuperación de contraseña
 * @param email Email a validar
 * @returns true si el email es valido, false en caso contrario
 */
export const validateEmailRecovery = (email: string): boolean => {
  return validateEmail(email)
}

/**
 * Valida la contraseña para el inicio de sesión
 * @param password Contraseña a validar
 * @returns true si la contraseña es valida, false en caso contrario
 */
export const validatePasswordLogin = (password: string): boolean => {
  return password.length > 0
}













  
  