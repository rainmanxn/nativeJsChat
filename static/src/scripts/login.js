import { createAuthTemplate } from './createTemplate.js';

const mainTag = document.querySelector('main')

const compiledTemplate = createAuthTemplate({
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
})

mainTag.innerHTML = compiledTemplate;

const inputElements = Array.from(document.querySelectorAll('.input-text'))
const data = inputElements
  .reduce((acc, el) => {
    el && el.addEventListener('input', () => {
      const { name, value } = el;
      acc[name] = value;
    });
    return acc
  }, {})
const submitButton = document.querySelector('form');


submitButton && submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(data)
})
