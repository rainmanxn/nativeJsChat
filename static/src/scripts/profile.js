const inputEmail = document.getElementById('email');
const inputUserName = document.getElementById('login');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputPhone = document.getElementById('phone');
const inputDisplayName = document.getElementById('displayName');
const submitForm = document.getElementById('submit');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const editPasswordButton = document.getElementById('editPasswordButton');
const inputOldPassword = document.getElementById('oldPassword');
const inputNewPassword = document.getElementById('newPassword');
const inputNewPasswordConfirm = document.getElementById('newPasswordConfirm');
const savePasswordForm = document.getElementById('editPassword');
const profileInfoBlock = document.getElementById('editBlock');
const profileAvatarBlock = document.getElementById('profileAvatarBlock');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');

let email = inputEmail.value;
let login = inputUserName.value;
let first_name = inputFirstName.value;
let second_name = inputLastName.value;
let display_name = inputDisplayName.value;
let phone = inputPhone.value;
let oldPassword = inputOldPassword.value;
let newPassword = inputNewPassword.value;
let newPasswordConfirm = inputNewPasswordConfirm.value;

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

/////////////
inputOldPassword.addEventListener('input', () => {
  oldPassword = inputOldPassword.value;
})

inputNewPassword.addEventListener('input', () => {
  newPassword = inputNewPassword.value;
})

inputNewPasswordConfirm.addEventListener('input', () => {
  newPasswordConfirm = inputNewPasswordConfirm.value;
})
/////////////

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

submitForm.addEventListener('submit', (event) => {
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

editPasswordButton.addEventListener('click', (event) => {
  console.log('3213')
  savePasswordForm.classList.remove('hide-field');
  submitForm.classList.add('hide-field');
})

savePasswordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  savePasswordForm.classList.add('hide-field');
  submitForm.classList.remove('hide-field');
  console.log(`oldPassword: ${oldPassword}, newPassword: ${newPassword}, newPasswordConfirm: ${newPasswordConfirm}`)
})

profileAvatarBlock.addEventListener('click', (event) => {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
})

modalOverlay.addEventListener("click", function() {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
});