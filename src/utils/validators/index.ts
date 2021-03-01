import validateEmail from './validateEmail';
import validatePassword from './validatePassword';
import validateLogin from './validateLogin';
import validateName from './validateName';
import validatePhone from './validatePhone';

const validators: {[index: string]:any} = {
  email: validateEmail,
  login: validateLogin,
  firstName: validateName,
  secondName: validateName,
  displayName: validateName,
  phone: validatePhone,
  password: validatePassword,
  passwordConfirm: validatePassword,
  oldPassword: validatePassword,
  newPassword: validatePassword
};

export default validators;
