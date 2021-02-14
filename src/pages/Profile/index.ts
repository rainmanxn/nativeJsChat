//ToDo сделать очистку полей пароля после обновления
import { template } from './template.js';
import templator from "../../utils/templator.js";
import { InputElement } from '../../interfaces/index.js'
import {submitChangePasswordFunction, submitEditFunction, validationFunction} from "../../utils/listenersFunctions.js";
import { EDIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../../components/Button/index.js";
import Block from '../../lib/block.js';
import {router} from "../../lib/Router/Router.js";
import {getUserData, logOut} from "../../api/authorization.js";
import { ModalAvatar } from "../../components/ModalAvatar/index.js";
import render from '../../utils/render.js';
// import { profileData } from "./data.js";

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
  changePasswordButton: changePasswordButton.getContent().innerHTML
}

export class Profile extends Block {
  constructor() {
    super('main', profileData);
  }

  componentDidMount() {
    getUserData().then((resp: any) => {
      const result = JSON.parse(resp.response)
      const {id, first_name, second_name, display_name, login, avatar, email, phone } = result;
      console.log(id)
      this.setProps({
        emailValue: email,
        firstNameValue: first_name,
        secondNameValue: second_name,
        loginValue: login,
        phoneValue: phone,
        displayNameValue: display_name,
        srcImg: `https://ya-praktikum.tech/${avatar}`
      })
    })
  }

  mount() {
    const inputElements: InputElement[] = Array.from(this.element.querySelectorAll('.profile-info-field-input'))
    const submitButton: HTMLElement | null = document.querySelector('#submit');
    const changePasswordButton: HTMLElement | null = document.querySelector('#changePassword');
    const avatarButton: HTMLElement | null = document.querySelector('.profile-avatar');
    render('main', ModalAvatarComponent);
    ModalAvatarComponent.hide()
    validationFunction(inputElements, this);
    submitButton && submitEditFunction(submitButton, this.props);
    changePasswordButton && submitChangePasswordFunction(changePasswordButton, this.props);
    avatarButton && avatarButton.addEventListener('click', (e) => {
      e.preventDefault()
      ModalAvatarComponent.show()
    })

    const linkButton: HTMLElement | null = this._element.querySelector('.back-button');
    linkButton && linkButton.addEventListener('click', () => {
      router.back()
    })
    const exitButton: HTMLElement | null = this._element.querySelector('#exitButton');
    exitButton && exitButton.addEventListener('click', () => {
      logOut()
    })
  }

  render(): string {
    return templator(template, this.props)
  }
}
