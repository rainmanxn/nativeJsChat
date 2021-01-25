import { createModalAvatarTemplate, createAvatarBlockTemplate, createProfileInfoTemplate, createChangePasswordTemplate } from './createTemplate.js'

const profileBlock = document.querySelector('.profile-block');
const avatarModal = document.getElementById('avatarModal');
const compiledModalTemplate = createModalAvatarTemplate();
avatarModal.innerHTML = compiledModalTemplate

const avatarData = {
  srcImg: '../img/icon-man.svg',
  userName: 'Иван'
}
const profileInfoData = {
  fields: [
    {
      fieldName: 'Почта',
      inputType: 'email',
      inputName: 'email',
      inputValue: 'pochta@yandex.ru'
    },
    {
      fieldName: 'Логин',
      inputType: 'text',
      inputName: 'login',
      inputValue: 'ivanivanov'
    },
    {
      fieldName: 'Имя',
      inputType: 'text',
      inputName: 'firstName',
      inputValue: 'Иван'
    },
    {
      fieldName: 'Фамилия',
      inputType: 'text',
      inputName: 'lastName',
      inputValue: 'Иванов'
    },
    {
      fieldName: 'Имя в чате',
      inputType: 'text',
      inputName: 'displayName',
      inputValue: 'Иваныч'
    },
    {
      fieldName: 'Телефон',
      inputType: 'tel',
      inputName: 'phone',
      inputValue: '+7 (909) 967 30 30'
    }],
  buttons: [
    {
      buttonId: 'editButton',
      buttonName: 'Изменить данные'
    },
    {
      buttonId: 'editPasswordButton',
      buttonName: 'Изменить пароль'
    },
    {
      buttonId: 'exitButton',
      buttonName: 'Выйти'
    },
  ]
};
const profilePasswordData = {
  fields: [
    {
      fieldName: 'Старый пароль',
      inputType: 'password',
      inputName: 'oldPassword',
      inputValue: '1111'
    },
    {
      fieldName: 'Новый пароль',
      inputType: 'password',
      inputName: 'newPassword',
      inputValue: '22222'
    },
    {
      fieldName: 'Повторите новый пароль<',
      inputType: 'password',
      inputName: 'newPasswordConfirm',
      inputValue: '22222'
    },
  ]
}
const compiledAvatarBlockTemplate = createAvatarBlockTemplate(avatarData);
const compiledProfileInfoTemplate = createProfileInfoTemplate(profileInfoData);
const compiledChangePasswordTemplate = createChangePasswordTemplate(profilePasswordData);

profileBlock.innerHTML = compiledAvatarBlockTemplate + compiledProfileInfoTemplate + compiledChangePasswordTemplate;

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
