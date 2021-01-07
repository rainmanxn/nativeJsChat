let email;
let login;
let first_name;
let second_name;
let password;
let password_confirm;
let phone;

const inputEmail = document.getElementById('email');
const inputUserName = document.getElementById('userName');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputPhone = document.getElementById('phone');
const inputUserPassword = document.getElementById('password');
const inputUserPasswordConfirm = document.getElementById('passwordConfirm');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('errorMessage');

inputEmail.addEventListener('input', () => {
  email = inputEmail.value;
});

inputUserName.addEventListener('input', () => {
  login = inputUserName.value;
});

inputFirstName.addEventListener('input', () => {
  first_name = inputFirstName.value;
});

inputLastName.addEventListener('input', () => {
  second_name = inputLastName.value;
});

inputPhone.addEventListener('input', () => {
  phone = inputPhone.value;
});

inputUserPassword.addEventListener('input', () => {
  password = inputUserPassword.value;
})

inputUserPasswordConfirm.addEventListener('input', () => {
  password_confirm = inputUserPasswordConfirm.value;
})

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password !== password_confirm) {
    inputUserPassword.classList.add('incorrect');
    inputUserPasswordConfirm.classList.add('incorrect');
    errorMessage.classList.add('error-message__show');
  }
  console.log(`email: ${email}, login: ${login}, first_name: ${first_name},
  second_name: ${second_name}, phone: ${phone}, password: ${password}, password_confirm: ${password_confirm}`)
})