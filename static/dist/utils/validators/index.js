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
    displayName: validateName,
    phone: validatePhone,
    password: validatePassword,
    passwordConfirm: validatePassword,
    oldPassword: validatePassword,
    newPassword: validatePassword,
};
export default validators;
