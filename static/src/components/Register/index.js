import { template } from './template.js';
import Block from "../../utils/block.js";
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { submitRegisterFunction, validationFunction } from "../../utils/listenersFunctions.js";
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
};
class Register extends Block {
    constructor(props) {
        super('main', props);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.input-text'));
        const submitButton = document.querySelector('form');
        validationFunction(inputElements, this);
        submitButton && submitRegisterFunction(submitButton, this.props);
    }
    render() {
        return templator(template, this.props);
    }
}
render('body', new Register(data));
