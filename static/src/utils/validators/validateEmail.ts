const validateEmail = (email: string | undefined): boolean => {
  const re = /\S+@\S+\.\S+/;
  return email ? re.test(email) : false;
}

export default validateEmail;
