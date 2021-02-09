const validateLogin = (login?: string | undefined): boolean => {
  if (login) {
    return login.length >= 6
  }
  return false
}

export default validateLogin;
