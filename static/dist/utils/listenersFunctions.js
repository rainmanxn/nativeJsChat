import validators from "./validators/index.js";
import setProps from "./setProps.js";
import Fetch from "../lib/HTTP/index.js";
import { BASE_URL } from "../constants/baseUrl.js";
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
            else {
                if (name && validators[name](value)) {
                    setProps(component, false, name, value);
                }
                else {
                    setProps(component, true, name, value);
                }
            }
        });
    });
};
export const submitFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { loginValue, passwordValue } = props;
        const isValid = validators.login(loginValue) && validators.password(passwordValue);
        isValid && console.log({ loginValue, passwordValue });
    });
};
export const submitRegisterFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { emailValue, loginValue, firstNameValue, secondNameValue, phoneValue, passwordValue, } = props;
        const options = {
            first_name: firstNameValue,
            second_name: secondNameValue,
            login: loginValue,
            email: emailValue,
            password: passwordValue,
            phone: phoneValue,
        };
        console.log('JSON.stringify(options)', JSON.stringify(options));
        Fetch.post(`${BASE_URL}/auth/signup`, {
            body: JSON.stringify({
                first_name: firstNameValue,
                second_name: secondNameValue,
                login: loginValue,
                email: emailValue,
                password: passwordValue,
                phone: phoneValue,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
    });
};
export const submitEditFunction = (element, props) => {
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const { emailValue, loginValue, firstNameValue, secondNameValue, displayNameValue, phoneValue, oldPasswordValue, passwordValue, passwordConfirmValue } = props;
        const isValid = validators.login(loginValue)
            && validators.email(emailValue)
            && validators.firstName(firstNameValue)
            && validators.secondName(secondNameValue)
            && validators.secondName(displayNameValue)
            && validators.phone(phoneValue)
            && validators.password(oldPasswordValue)
            && validators.password(passwordValue)
            && validators.passwordConfirm(passwordConfirmValue);
        isValid && console.log({
            emailValue,
            loginValue,
            firstNameValue,
            secondNameValue,
            displayNameValue,
            phoneValue,
            oldPasswordValue,
            passwordValue,
            passwordConfirmValue
        });
    });
};
