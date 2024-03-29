import validators from './validators/index';
import setProps from './setProps';
import { signUp } from '../api/authorization';
import { changeUserInfo, changeUserPassword } from '../api/userProfile';
export const validationFunction = (element, component) => {
    element
        .forEach((el) => {
        el && el.addEventListener('blur', () => {
            const { value, name } = el;
            if (name === 'passwordConfirm') {
                if (value === component.props.passwordValue) {
                    setProps(component, false, name, value);
                }
                else {
                    setProps(component, true, name, value);
                }
            }
            else if (name && validators[name](value)) {
                setProps(component, false, name, value);
            }
            else {
                setProps(component, true, name, value);
            }
        });
    });
};
export const submitFunction = (props) => {
    const { loginValue, passwordValue } = props;
    const isValid = validators.login(loginValue) && validators.password(passwordValue);
    return {
        isValid,
        login: loginValue,
        password: passwordValue
    };
};
export const submitRegisterFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { emailValue, loginValue, firstNameValue, secondNameValue, phoneValue, passwordValue, passwordConfirmValue } = props;
        const isValid = validators.login(loginValue)
            && validators.email(emailValue)
            && validators.firstName(firstNameValue)
            && validators.secondName(secondNameValue)
            && validators.phone(phoneValue)
            && validators.password(passwordValue)
            && validators.passwordConfirm(passwordConfirmValue);
        isValid && signUp({
            first_name: firstNameValue,
            second_name: secondNameValue,
            login: loginValue,
            email: emailValue,
            password: passwordValue,
            phone: phoneValue
        });
    });
};
export const submitEditFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { emailValue, loginValue, firstNameValue, secondNameValue, displayNameValue, phoneValue } = props;
        const isValid = validators.login(loginValue)
            && validators.email(emailValue)
            && validators.firstName(firstNameValue)
            && validators.secondName(secondNameValue)
            && validators.secondName(displayNameValue)
            && validators.phone(phoneValue);
        isValid && changeUserInfo({
            first_name: firstNameValue,
            second_name: secondNameValue,
            display_name: displayNameValue,
            login: loginValue,
            email: emailValue,
            phone: phoneValue
        });
    });
};
export const submitChangePasswordFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { oldPasswordValue, passwordValue, passwordConfirmValue } = props;
        const isValid = validators.password(oldPasswordValue)
            && validators.password(passwordValue)
            && validators.passwordConfirm(passwordConfirmValue);
        isValid && changeUserPassword({
            oldPassword: oldPasswordValue,
            newPassword: passwordValue
        });
        console.log({
            oldPasswordValue,
            passwordValue,
            passwordConfirmValue
        });
    });
};
