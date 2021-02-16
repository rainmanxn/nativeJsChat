import { template } from './template.js';
import templator from "../../utils/templator.js";
import { submitFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { SUBMIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../../components/Button/index.js";
import Block from '../../lib/block.js';
import { router } from "../../lib/Router/Router.js";
const buttonProps = {
    type: 'submit',
    className: SUBMIT_BUTTON,
    text: 'АВТОРИЗОВАТЬСЯ'
};
const SubmitButton = new Button(buttonProps);
const data = {
    loginValue: '',
    passwordValue: '',
    loginError: '',
    passwordError: '',
    buttonSignUp: SubmitButton.getContent().innerHTML
};
export class Login extends Block {
    constructor() {
        super('div', data);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.input-text'));
        const submitButton = document.querySelector('form');
        validationFunction(inputElements, this);
        submitButton && submitFunction(submitButton, this.props);
        const linkButton = this._element.querySelector('.login-href');
        linkButton && linkButton.addEventListener('click', () => {
            router.go('/register');
        });
    }
    render() {
        return templator(template, this.props);
    }
}
