import { template } from './template.js';
import templator from "../../utils/templator.js";
import { InputElement, FormDataType } from '../../interfaces/index.js'

const data: object = {
  containerClass: 'login-block',
  headerName: 'ВХОД',
  submitButtonClass: 'submit-button submit-button__login',
  submitButtonName: 'АВТОРИЗОВАТЬСЯ',
  linkSrc: 'src/register.html',
  linkText: 'Нет аккаунта?',
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
    }],
  errorClass: 'error-message'
};

const mainTag: HTMLElement = document.querySelector('body');
mainTag.innerHTML = templator(template, data);

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