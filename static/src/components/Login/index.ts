import { template } from './template.js';
import templator from "../../utils/templator.js";
import { InputElement, FormDataType } from '../../interfaces/index.js'
import Block from "../../utils/block.js";
import render from "../../utils/render.js";

const data: object = {
  fields: [
    {
      fieldName: 'Логин',
      inputType: 'text',
      inputName: 'login'
    },
    {
      fieldName: 'Пароль',
      inputType: 'password',
      inputName: 'password'
    }]
};

class Login extends Block {
  constructor(props?) {
    super('main', props);
  }
  render(): string {
    return templator(template, this.props)
  }
}

render('body', new Login(data))

const inputElements: InputElement[] = Array.from(document.querySelectorAll('.input-text'))
const formData: FormDataType = inputElements
  .reduce((acc: object, el: InputElement) => {
    el && el.addEventListener('input', () => {
      const { name, value } = el;
      acc[name] = value;
    });
    return acc
  }, {})
const submitButton: HTMLElement = document.querySelector('form');


submitButton && submitButton.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log(formData)
})