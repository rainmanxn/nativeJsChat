import { InputElement } from '../../interfaces/index.js'
import { template } from './template.js';
import Block from "../../utils/block.js";
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { TemplatePropsContext } from "../../types/index.js";
import { submitRegisterFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { Button } from '../Button/index.js';
import { SUBMIT_BUTTON_REGISTER } from '../../constants/buttonClasses.js';

const buttonProps = {
  type: 'submit',
  className: SUBMIT_BUTTON_REGISTER,
  text: 'ЗАРЕГИСТРИРОВАТЬСЯ'
};

const SubmitButton = new Button(buttonProps);

const data: object = {
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
  constructor(props?: TemplatePropsContext) {
    super('main', props);
  }

  mount() {
    const inputElements: InputElement[] = Array.from(this.element.querySelectorAll('.input-text'))
    const submitButton: HTMLElement | null = document.querySelector('form');
    validationFunction(inputElements, this);
    submitButton && submitRegisterFunction(submitButton, this.props);
    render('#submit', SubmitButton);
  }

  render(): string {
    return templator(template, this.props)
  }
}

render('body', new Register(data));
render('#submit', SubmitButton);
