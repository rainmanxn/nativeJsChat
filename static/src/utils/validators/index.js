import validateEmail from './validateEmail.js';
import validatePassword from './validatePassword.js';
import validateLogin from './validateLogin.js';
import validateName from './validateName.js';
import validatePhone from './validatePhone.js';
const validators = {
    email: validateEmail,
    login: validateLogin,
    firstName: validateName,
    secondName: validateName,
    phone: validatePhone,
    password: validatePassword,
    passwordConfirm: validatePassword
};
export default validators;
