import { template } from './template.js';
import templator from "../../utils/templator.js";
import { InputElement } from '../../interfaces/index.js'

import { submitFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { SUBMIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../../components/Button/index.js";
import Block from '../../lib/block.js';
import {Router} from "../../lib/Router/Router.js";
import { signIn } from "../../api/authorization.js";

const router = new Router(".app");
const buttonProps = {
  type: 'submit',
  className: SUBMIT_BUTTON,
  text: 'АВТОРИЗОВАТЬСЯ'
};

const SubmitButton = new Button(buttonProps);


const data: object = {
  loginValue: '',
  passwordValue: '',
  loginError: '',
  passwordError: '',
  handleError: '',
  errorMessage: '',
  buttonSignUp: SubmitButton.getContent().innerHTML
};

export class Login extends Block {
  constructor() {
    super('div', data);
  }

  mount() {
    const inputElements: InputElement[] = Array.from(this.element.querySelectorAll('.input-text'))
    const submitButton: HTMLElement | null = document.querySelector('form');

    validationFunction(inputElements, this);
    submitButton?.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const { isValid, login, password } = submitButton && submitFunction(this.props);
      isValid && signIn(
        {
          login,
          password
        }
      ).then((response) => {
        if (response.response === 'OK') {
          router.go('/main')
        } else {
            this.setProps({
              handleError: 'error-message__show',
              errorMessage: (JSON.parse(response.response)).reason
            });
          }
      })
  })
    const linkButton: HTMLElement | null = this._element.querySelector('.login-href');
    linkButton && linkButton.addEventListener('click', () => {
      router.go('/register')
    })
  }

  render(): string {
    return templator(template, this.props)
  }

}
