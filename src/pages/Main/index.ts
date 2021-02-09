import { template, messagesTemplate } from './template.js';
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { TemplatePropsContext } from "../../types/index.js";
import { mainData, messagesData } from "./data.js";
import {SEND_BUTTON} from "../../constants/buttonClasses.js";
import {Button} from "../../components/Button/index.js";
import Block from 'lib/block.js';

const sendMessageButtonProps = {
  type: 'button',
  className: SEND_BUTTON,
};

const SendMessageButton = new Button(sendMessageButtonProps);

class Main extends Block {
  constructor(props?: TemplatePropsContext) {
    super('main', props);
  }

  mount() {
    render('.main-chat-footer', SendMessageButton);
  }

  render(): string {
    return templator(template, this.props)
  }
}

class Messages extends Block {
  constructor(props?: TemplatePropsContext) {
    super('div', props);
  }
  render(): string {
    return templator(messagesTemplate, this.props)
  }
}

render('body', new Main(mainData));
render('.main-chat-footer', SendMessageButton);

const mainRightBlockContainer = document.querySelector('.main-right-block-container');
const mainRightBlockEmptyText = document.querySelector('.main-right-block-empty-text');
let activeItemId = '-1';

const chatItems = document.querySelectorAll('.chat-item-container');
[...chatItems].forEach(el => {
  el.addEventListener('click', () => {
    const id = el.id;
    mainRightBlockEmptyText && mainRightBlockEmptyText.classList.add('remove-modal');
    mainRightBlockContainer && mainRightBlockContainer.classList.remove('remove-modal');
    if (activeItemId !== '-1') {
      const activeItem = document.getElementById(`${activeItemId}`);
      activeItem && activeItem.classList.remove('active-item')
    }
    activeItemId = id;
    el.classList.add('active-item');
    render('.main-chat-messages', new Messages(messagesData));
  })
})

const modalEditUser = document.querySelector('.modal-edit-user');
const modalClip = document.querySelector('.modal-clip');
const modalDeleteUser = document.querySelector('#modalDeleteUser');
const modalAddUser = document.querySelector('#modalAddUser');
const modalOverlay = document.querySelector('#modalOverlay');
const threeDotsContainer = document.querySelector('.three-dots-container');
const deleteUserButton = document.querySelector('#deleteUserButton');
const threeDotsDeleteUser = document.querySelector('#threeDotsDeleteUser');
const threeDotsAddUser = document.querySelector('#threeDotsAddUser');
const modalDeleteUserConfirm = document.querySelector('#modalDeleteUserConfirm');
const deleteUserButtonConfirm = document.querySelector('#deleteUserButtonConfirm');
const deleteUserButtonCancel = document.querySelector('#deleteUserButtonCancel');
const addUserButton = document.querySelector('#addUserButton');
const clipButton = document.querySelector('#clipButton');

threeDotsDeleteUser && threeDotsDeleteUser.addEventListener('click', () => {
  modalDeleteUser && modalDeleteUser.classList.toggle("remove-modal");
  modalOverlay && modalOverlay.classList.toggle("remove-field");
})

modalOverlay && modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalDeleteUser && modalDeleteUser.classList.add("remove-modal");
  modalAddUser && modalAddUser.classList.add("remove-modal");
  modalDeleteUserConfirm && modalDeleteUserConfirm.classList.add("remove-modal");
})

threeDotsContainer && threeDotsContainer.addEventListener('click', () => {
  modalEditUser && modalEditUser.classList.toggle("remove-modal");
  threeDotsContainer.classList.toggle("three-dots-container-add-background");
});

deleteUserButton && deleteUserButton.addEventListener('click', () => {
  modalDeleteUser && modalDeleteUser.classList.add("remove-modal");
  modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
})

deleteUserButtonConfirm && deleteUserButtonConfirm.addEventListener('click', () => {
  modalOverlay && modalOverlay.classList.toggle("remove-field");
  modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
})

deleteUserButtonCancel && deleteUserButtonCancel.addEventListener('click', () => {
  modalOverlay && modalOverlay.classList.toggle("remove-field");
  modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
})

threeDotsAddUser && threeDotsAddUser.addEventListener('click', () => {
  modalOverlay && modalOverlay.classList.toggle("remove-field");
  modalAddUser && modalAddUser.classList.toggle("remove-modal");
})

addUserButton && addUserButton.addEventListener('click', () => {
  modalOverlay && modalOverlay.classList.toggle("remove-field");
  modalAddUser && modalAddUser.classList.toggle("remove-modal");
})

clipButton && clipButton.addEventListener('click', () => {
  modalClip && modalClip.classList.toggle("remove-modal");
})
