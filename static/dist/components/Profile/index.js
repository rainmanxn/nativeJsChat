import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
import { submitEditFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { EDIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../Button/index.js";
const profileData = {
    srcImg: '../img/icon-man.svg',
    userName: 'Иван',
    emailValue: 'pochta@yandex.ru',
    loginValue: 'ivanivanov',
    firstNameValue: 'Иван',
    secondNameValue: 'Иванов',
    displayNameValue: 'Иваныч',
    phoneValue: '+7 (909) 967 30 30',
    oldPasswordValue: 'zzzXXX22##',
    passwordValue: '',
    passwordConfirmValue: '',
    emailError: '',
    loginError: '',
    firstNameError: '',
    lastNameError: '',
    displayNameError: '',
    phoneError: '',
    oldPasswordError: '',
    newPasswordError: '',
    newPasswordConfirmError: '',
};
const editButtonProps = {
    type: 'submit',
    className: EDIT_BUTTON,
    text: 'Изменить данные',
    id: 'editButton'
};
const exitButtonProps = {
    type: 'button',
    className: EDIT_BUTTON,
    text: 'Выйти',
    id: 'exitButton'
};
const EditButton = new Button(editButtonProps);
const ExitButton = new Button(exitButtonProps);
class Profile extends Block {
    constructor(props) {
        super('main', props);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.profile-info-field-input'));
        const submitButton = document.querySelector('#submit');
        validationFunction(inputElements, this);
        submitButton && submitEditFunction(submitButton, this.props);
        render('#editBlock', EditButton);
        render('#editBlock', ExitButton);
    }
    render() {
        return templator(template, this.props);
    }
}
render('body', new Profile(profileData));
render('#editBlock', EditButton);
render('#editBlock', ExitButton);
