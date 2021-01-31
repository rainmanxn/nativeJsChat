import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
import { submitFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { SUBMIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../Button/index.js";
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
};
class Login extends Block {
    constructor(props) {
        super('main', props);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.input-text'));
        const submitButton = document.querySelector('form');
        validationFunction(inputElements, this);
        submitButton && submitFunction(submitButton, this.props);
        render('#submit', SubmitButton);
    }
    render() {
        return templator(template, this.props);
    }
}
const LoginPage = new Login(data);
render('body', LoginPage);
render('#submit', SubmitButton);
