import { template } from './template';
import templator from '../../utils/templator';
import { submitRegisterFunction, validationFunction } from '../../utils/listenersFunctions';
import { Button } from '../../components/Button/index';
import { SUBMIT_BUTTON_REGISTER } from '../../constants/buttonClasses';
import Block from '../../lib/block';
import { Router } from '../../lib/Router/Router';
const router = new Router('.app');
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
