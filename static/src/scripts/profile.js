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
const backButton = document.querySelector('.back-button');

let email = inputEmail.value;
let login = inputUserName.value;
let first_name = inputFirstName.value;
let second_name = inputLastName.value;
let display_name = inputDisplayName.value;
let phone = inputPhone.value;
let oldPassword = inputOldPassword.value;
let newPassword = inputNewPassword.value;
let newPasswordConfirm = inputNewPasswordConfirm.value;
const userData = {
  email,
  login,
  first_name,
  second_name,
  display_name,
  phone
};
const userPasswords = {
  oldPassword,
  newPassword,
  newPasswordConfirm,
};

inputEmail.addEventListener('input', () => {
  email = inputEmail.value;
  userData.email = email;
});

inputUserName.addEventListener('input', () => {
  login = inputUserName.value;
  userData.login = login;
});

inputFirstName.addEventListener('input', () => {
  first_name = inputFirstName.value;
  userData.first_name = first_name;
});

inputLastName.addEventListener('input', () => {
  second_name = inputLastName.value;
  userData.second_name = second_name;
});

inputPhone.addEventListener('input', () => {
  phone = inputPhone.value;
  userData.phone = phone;
});

inputDisplayName.addEventListener('input', () => {
  display_name = inputDisplayName.value;
  userData.display_name = display_name;
})

inputOldPassword.addEventListener('input', () => {
  oldPassword = inputOldPassword.value;
  userPasswords.oldPassword = oldPassword;
})

inputNewPassword.addEventListener('input', () => {
  newPassword = inputNewPassword.value;
  userPasswords.newPassword = newPassword;
})

inputNewPasswordConfirm.addEventListener('input', () => {
  newPasswordConfirm = inputNewPasswordConfirm.value;
  userPasswords.newPasswordConfirm = newPasswordConfirm;
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
  console.log(userData)
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
  console.log(userPasswords)
})

profileAvatarBlock.addEventListener('click', (event) => {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
})

modalOverlay.addEventListener("click", function() {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
});

backButton.addEventListener('click', () => {
  history.back();
})
