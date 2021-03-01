const validatePassword = (password: string | undefined): boolean => {
  const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g;
  return password ? re.test(password) : false;
};

export default validatePassword;
