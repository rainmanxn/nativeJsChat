const { compile } = window.Handlebars;
import { template } from './template.js';

const loginTemplate = compile(template);
const data = {
  containerClass: 'register-block',
  headerName: 'РЕГИСТРАЦИЯ',
  submitButtonClass: 'submit-button submit-button__register',
  submitButtonName: 'ЗАРЕГИСТРИРОВАТЬСЯ',
  linkSrc: '../index.html',
  linkText: 'Войти',
  fields: [
    {
      fieldName: 'Почта',
      inputType: 'email',
      inputName: 'email'
    },
    {
      fieldName: 'Логин',
      inputType: 'text',
      inputName: 'login'
    },
    {
      fieldName: 'Имя',
      inputType: 'text',
      inputName: 'first_name'
    },
    {
      fieldName: 'Фамилия',
      inputType: 'text',
      inputName: 'second_name'
    },
    {
      fieldName: 'Телефон',
      inputType: 'tel',
      inputName: 'phone'
    },
    {
      fieldName: 'Пароль',
      inputType: 'password',
      inputName: 'password'
    },
    {
      fieldName: 'Пароль (еще раз)',
      inputType: 'password',
      inputName: 'password_confirm'
    }
  ],
  errorClass: 'error-message'
};

const mainTag = document.querySelector('body');
mainTag.innerHTML = loginTemplate(data);






const inputElements = Array.from(document.querySelectorAll('.input-text'))
const formData = inputElements
  .reduce((acc, el) => {
    el && el.addEventListener('input', () => {
      const { name, value } = el;
      acc[name] = value;
    });
    return acc
  }, {})

const submitButton = document.querySelector('.register-form');
const errorMessage = document.querySelector('.error-message');

submitButton && submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  const { password, password_confirm } = formData;
  if (password !== password_confirm) {
    inputElements.forEach((element) => {
      const { name } = element;
      if (name === 'password' || name === 'password_confirm') {
        element.classList.add('incorrect');
      }
    })
    errorMessage && errorMessage.classList.add('error-message__show');
  } else {
    inputElements.forEach((element) => {
      const { name } = element;
      if (name === 'password' || name === 'password_confirm') {
        element.classList.remove('incorrect');
      }
    })
    errorMessage && errorMessage.classList.remove('error-message__show');
  }
  console.log(formData)
})