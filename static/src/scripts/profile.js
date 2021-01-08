const inputEmail = document.getElementById('email');
const inputUserName = document.getElementById('login');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputPhone = document.getElementById('phone');
const inputDisplayName = document.getElementById('displayName');
const submitButton = document.getElementById('submit');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const profileInfoBlock = document.getElementById('editBlock')

let email = inputEmail.value;
let login = inputUserName.value;
let first_name = inputFirstName.value;
let second_name = inputLastName.value;
let display_name = inputDisplayName.value;
let phone = inputPhone.value;

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

inputDisplayName.addEventListener('input', () => {
  display_name = inputDisplayName.value;
})

editButton.addEventListener('click', () => {
  profileInfoBlock.classList.add('hide-field');
  inputEmail.readOnly = false;
  inputUserName.readOnly = false;
  inputFirstName.readOnly = false;
  inputLastName.readOnly = false;
  inputPhone.readOnly = false;
  inputDisplayName.readOnly = false;
  saveButton.classList.remove('hide-field')
});

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  profileInfoBlock.classList.remove('hide-field');
  inputEmail.readOnly = true;
  inputUserName.readOnly = true;
  inputFirstName.readOnly = true;
  inputLastName.readOnly = true;
  inputPhone.readOnly = true;
  inputDisplayName.readOnly = true;
  saveButton.classList.add('hide-field')
  console.log(`email: ${email}, login: ${login}, first_name: ${first_name},
  second_name: ${second_name}, display_name: ${display_name}, phone: ${phone}`)
})