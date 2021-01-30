import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
import { submitFunction, validationFunction } from "../../utils/listenersFunctions.js";
const data = {
    loginValue: '',
    passwordValue: '',
    loginError: '',
    passwordError: ''
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
    }
    render() {
        return templator(template, this.props);
    }
}
const LoginPage = new Login(data);
render('body', LoginPage);
