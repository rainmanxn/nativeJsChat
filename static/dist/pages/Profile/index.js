import { template } from './template';
import templator from "../../utils/templator";
import { submitChangePasswordFunction, submitEditFunction, validationFunction } from "../../utils/listenersFunctions";
import { EDIT_BUTTON } from "../../constants/buttonClasses";
import { Button } from "../../components/Button/index";
import Block from '../../lib/block';
import { Router } from "../../lib/Router/Router";
import { getUserData, logOut } from "../../api/authorization";
import { ModalAvatar } from "../../components/ModalAvatar/index";
import render from '../../utils/render';
const router = new Router(".app");
const editButtonProps = {
    type: 'submit',
    className: EDIT_BUTTON,
    text: 'Изменить данные',
    id: 'editButton'
};
const changePasswordButtonProps = {
    type: 'submit',
    className: EDIT_BUTTON,
    text: 'Изменить пароль',
    id: 'changePasswordButton'
};
const exitButtonProps = {
    type: 'button',
    className: EDIT_BUTTON,
    text: 'Выйти',
    id: 'exitButton'
};
const EditButton = new Button(editButtonProps);
const ExitButton = new Button(exitButtonProps);
const changePasswordButton = new Button(changePasswordButtonProps);
const ModalAvatarComponent = new ModalAvatar();
const profileData = {
    srcImg: './dist/img/icon-man.svg',
    userName: '',
    emailValue: '',
    loginValue: '',
    firstNameValue: '',
    secondNameValue: '',
    displayNameValue: '',
    phoneValue: '',
    oldPasswordValue: '',
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
    editButton: EditButton.getContent().innerHTML,
    exitButton: ExitButton.getContent().innerHTML,
    changePasswordButton: changePasswordButton.getContent().innerHTML,
    handleError: '',
    errorMessage: '',
};
export class Profile extends Block {
    constructor() {
        super('main', profileData);
    }
    componentDidMount() {
        getUserData().then((resp) => {
            const result = JSON.parse(resp.response);
            const { id, first_name, second_name, display_name, login, avatar, email, phone } = result;
            console.log(id);
            this.setProps({
                emailValue: email,
                firstNameValue: first_name,
                secondNameValue: second_name,
                loginValue: login,
                phoneValue: phone,
                displayNameValue: display_name,
                srcImg: `https://ya-praktikum.tech/${avatar}`
            });
        });
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.profile-info-field-input'));
        const submitButton = document.querySelector('#submit');
        const changePasswordButton = document.querySelector('#changePassword');
        const avatarButton = document.querySelector('.profile-avatar');
        render('main', ModalAvatarComponent);
        ModalAvatarComponent.hide();
        validationFunction(inputElements, this);
        submitButton && submitEditFunction(submitButton, this.props);
        changePasswordButton && submitChangePasswordFunction(changePasswordButton, this.props);
        avatarButton && avatarButton.addEventListener('click', (e) => {
            e.preventDefault();
            ModalAvatarComponent.show();
        });
        const linkButton = this._element.querySelector('.back-button');
        linkButton && linkButton.addEventListener('click', () => {
            router.back();
        });
        const exitButton = this._element.querySelector('#exitButton');
        exitButton && exitButton.addEventListener('click', () => {
            logOut().then((response) => {
                if (response.response === 'OK') {
                    router.go('/login');
                }
                else {
                    this.setProps({
                        handleError: 'error-message__show',
                        errorMessage: 'Неизвестная ошибка',
                    });
                }
            });
        });
    }
    render() {
        return templator(template, this.props);
    }
}
