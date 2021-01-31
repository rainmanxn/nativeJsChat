const validateLogin = (login) => {
    if (login) {
        return login.length >= 6;
    }
    return false;
};
export default validateLogin;
