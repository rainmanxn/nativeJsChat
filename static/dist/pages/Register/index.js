import { template } from './template.js';
import templator from "../../utils/templator.js";
import { submitRegisterFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { Button } from '../../components/Button/index.js';
import { SUBMIT_BUTTON_REGISTER } from '../../constants/buttonClasses.js';
import Block from '../../lib/block.js';
import { router } from "../../lib/Router/Router.js";
const buttonProps = {
    type: 'submit',
    className: SUBMIT_BUTTON_REGISTER,
    text: 'ЗАРЕГИСТРИРОВАТЬСЯ'
};
const SubmitButton = new Button(buttonProps);
const data = {
    emailValue: '',
    loginValue: '',
    firstNameValue: '',
    secondNameValue: '',
    phoneValue: '',
    passwordValue: '',
    passwordConfirmValue: '',
    emailError: '',
    loginError: '',
    firstNameError: '',
    secondNameError: '',
    phoneError: '',
    passwordError: '',
    passwordConfirmError: '',
    buttonReg: SubmitButton.getContent().innerHTML
};
export class Register extends Block {
    constructor() {
        super('main', data);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.input-text'));
        const submitButton = this._element.querySelector('.register-form');
        validationFunction(inputElements, this);
        submitButton && submitRegisterFunction(submitButton, this.props);
        const linkButtonRegister = this._element.querySelector('.login-href');
        linkButtonRegister && linkButtonRegister.addEventListener('click', () => {
            router.go('/login');
        });
    }
    render() {
        return templator(template, this.props);
    }
}
