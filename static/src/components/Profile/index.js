import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
const profileData = {
    srcImg: '../img/icon-man.svg',
    userName: 'Иван',
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
        }
    ],
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
    ],
    passwordFields: [
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
            fieldName: 'Повторите новый пароль',
            inputType: 'password',
            inputName: 'newPasswordConfirm',
            inputValue: '22222'
        },
    ]
};
class Profile extends Block {
    constructor(props) {
        super('main', props);
    }
    render() {
        return templator(template, this.props);
    }
}
render('body', new Profile(profileData));
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
            const { value } = event.target;
            data[name] = value;
        });
    }
    return acc;
}, {});
editButton.addEventListener('click', () => {
    profileInfoBlock.classList.add('hide-field');
    inputElements.forEach((el) => {
        if (el.type !== 'password') {
            el.readOnly = false;
        }
    });
    saveButton.classList.remove('hide-field');
});
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileInfoBlock.classList.remove('hide-field');
    const submitData = inputElements.reduce((acc, el) => {
        if (el.type !== 'password') {
            el.readOnly = true;
            const { name, value } = el;
            acc[name] = value;
        }
        return acc;
    }, {});
    saveButton.classList.add('hide-field');
    console.log(submitData);
});
editPasswordButton.addEventListener('click', () => {
    savePasswordForm.classList.remove('hide-field');
    submitForm.classList.add('hide-field');
});
savePasswordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    savePasswordForm.classList.add('hide-field');
    submitForm.classList.remove('hide-field');
    const userPasswords = inputElements.reduce((acc, { name, value, type }) => {
        if (type === 'password') {
            acc[name] = value;
        }
        return acc;
    }, {});
    console.log(userPasswords);
});
profileAvatarBlock.addEventListener('click', () => {
    modal.classList.toggle("remove-field");
    modalOverlay.classList.toggle("remove-field");
});
modalOverlay.addEventListener("click", function () {
    modal.classList.toggle("remove-field");
    modalOverlay.classList.toggle("remove-field");
});
backButton.addEventListener('click', () => {
    history.back();
});
