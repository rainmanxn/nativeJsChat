let email;
let login;
let first_name;
let second_name;
let password;
let password_confirm;
let phone;
const data= {};

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
  data.email = email;
});

inputUserName.addEventListener('input', () => {
  login = inputUserName.value;
  data.login = login;
});

inputFirstName.addEventListener('input', () => {
  first_name = inputFirstName.value;
  data.first_name = first_name;
});

inputLastName.addEventListener('input', () => {
  second_name = inputLastName.value;
  data.second_name = second_name;
});

inputPhone.addEventListener('input', () => {
  phone = inputPhone.value;
  data.phone = phone;
});

inputUserPassword.addEventListener('input', () => {
  password = inputUserPassword.value;
  data.password = password;
})

inputUserPasswordConfirm.addEventListener('input', () => {
  password_confirm = inputUserPasswordConfirm.value;
  data.password_confirm = password_confirm;
})

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password !== password_confirm) {
    inputUserPassword.classList.add('incorrect');
    inputUserPasswordConfirm.classList.add('incorrect');
    errorMessage.classList.add('error-message__show');
  }
  console.log(data)
})
