import { template } from './template.js';
import templator from "../../utils/templator.js";
import { InputElement } from '../../interfaces/index.js'
import { submitEditFunction, validationFunction } from "../../utils/listenersFunctions.js";
import { EDIT_BUTTON } from "../../constants/buttonClasses.js";
import { Button } from "../../components/Button/index.js";
import Block from '../../lib/block.js';
import {router} from "../../lib/Router/Router.js";
import {getUserData, logOut} from "../../api/authorization.js";
// import { profileData } from "./data.js";

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
  exitButton: ExitButton.getContent().innerHTML
}

export class Profile extends Block {
  constructor() {
    super('main', profileData);
  }

  componentDidMount() {
    getUserData().then((resp: any) => {
      const result = JSON.parse(resp.response)
      const {id, first_name, second_name, display_name, login, avatar, email, phone } = result;
      console.log(id, first_name, second_name, display_name, login, avatar, email, phone)
      this.setProps({
        emailValue: email,
        firstNameValue: first_name,
        secondNameValue: second_name,
        loginValue: login,
        phoneValue: phone,
        displayNameValue: display_name
      })
    })
  }

  mount() {
    const inputElements: InputElement[] = Array.from(this.element.querySelectorAll('.profile-info-field-input'))
    const submitButton: HTMLElement | null = document.querySelector('#submit');
    validationFunction(inputElements, this);
    submitButton && submitEditFunction(submitButton, this.props);
    submitButton && submitButton.addEventListener('submit', () => {
      console.log('4342')
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

// render('body', new Profile(profileData));
// render('#editBlock', EditButton);
// render('#editBlock', ExitButton);
