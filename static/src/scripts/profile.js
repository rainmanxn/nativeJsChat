import { createModalAvatarTemplate, createAvatarBlockTemplate } from './createTemplate.js'

const profileBlock = document.querySelector('.profile-block');
const avatarModal = document.getElementById('avatarModal');
const compiledModalTemplate = createModalAvatarTemplate();
avatarModal.innerHTML = compiledModalTemplate

const avatarData = {
  srcImg: '../img/icon-man.svg',
  userName: 'Иван'
}
const compiledAvatarBlockTemplate = createAvatarBlockTemplate(avatarData)
profileBlock.innerHTML = compiledAvatarBlockTemplate;
console.log(compiledAvatarBlockTemplate)

const submitForm = document.getElementById('submit');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const editPasswordButton = document.getElementById('editPasswordButton');
const savePasswordForm = document.getElementById('editPassword');
const profileInfoBlock = document.getElementById('editBlock');
const profileAvatarBlock = document.getElementById('profileAvatarBlock');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const backButton = document.querySelector('.back-button');

const inputElements = Array.from(document.querySelectorAll('.profile-info-field-input'));
const data = inputElements
  .reduce((acc, el) => {
    if (el) {
      const { name, value } = el;
      acc[name] = value;
      el.addEventListener('input', (event) => {
        data[name] = event.target.value;
      });
    }
    return acc
  }, {});

editButton.addEventListener('click', () => {
  profileInfoBlock.classList.add('hide-field');
  inputElements.forEach((el, i) => {
    if (el.type !== 'password') {
      el.readOnly = false
    }
  })
  saveButton.classList.remove('hide-field')
});

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileInfoBlock.classList.remove('hide-field');
  const submitData = inputElements.reduce((acc, el) => {
    if (el.type !== 'password') {
      el.readOnly = true
      const { name, value } = el;
      acc[name] = value;
    }
    return acc
  }, {})
  saveButton.classList.add('hide-field')
  console.log(submitData)
});

editPasswordButton.addEventListener('click', (event) => {
  savePasswordForm.classList.remove('hide-field');
  submitForm.classList.add('hide-field');
});

savePasswordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  savePasswordForm.classList.add('hide-field');
  submitForm.classList.remove('hide-field');
  const userPasswords = inputElements.reduce((acc, { name, value, type }, i) => {
    if (type === 'password') {
      acc[name] = value;
    }
    return acc
  }, {})
  console.log(userPasswords)
});

profileAvatarBlock.addEventListener('click', (event) => {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
});

modalOverlay.addEventListener("click", function() {
  modal.classList.toggle("remove-field");
  modalOverlay.classList.toggle("remove-field");
});

backButton.addEventListener('click', () => {
  history.back();
})
