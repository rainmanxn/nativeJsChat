const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return email ? re.test(email) : false;
};
export default validateEmail;
