import { template, messagesTemplate } from './template.js';
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { TemplatePropsContext } from "../../types/index.js";
import { mainData, messagesData } from "./data.js";
import Block from '../../lib/block.js';
import {router} from "../../lib/Router/Router.js";

export class Main extends Block {
  constructor() {
    super('main', mainData);
  }

  mount() {
    const mainRightBlockContainer = this._element.querySelector('.main-right-block-container');
    const mainRightBlockEmptyText = this._element.querySelector('.main-right-block-empty-text');
    let activeItemId = '-1';

    const chatItems = this._element.querySelectorAll('.chat-item-container');
    [...chatItems].forEach(el => {
      el.addEventListener('click', () => {
        const id = el.id;
        mainRightBlockEmptyText && mainRightBlockEmptyText.classList.add('remove-modal');
        mainRightBlockContainer && mainRightBlockContainer.classList.remove('remove-modal');
        if (activeItemId !== '-1') {
          const activeItem = this._element.querySelector(`#${activeItemId}`);
          activeItem && activeItem.classList.remove('active-item')
        }
        activeItemId = id;
        el.classList.add('active-item');
        render('.main-chat-messages', new Messages(messagesData));
      })
    })
    const linkButton: HTMLElement | null = this._element.querySelector('.main-left-block-profile-link');
    linkButton && linkButton.addEventListener('click', () => {
      router.go('/profile')
    })
    const modalEditUser = this._element.querySelector('.modal-edit-user');
    const modalClip = this._element.querySelector('.modal-clip');
    const modalDeleteUser = this._element.querySelector('#modalDeleteUser');
    const modalAddUser = this._element.querySelector('#modalAddUser');
    const modalOverlay = this._element.querySelector('#modalOverlay');
    const threeDotsContainer = this._element.querySelector('.three-dots-container');
    const deleteUserButton = this._element.querySelector('#deleteUserButton');
    const threeDotsDeleteUser = this._element.querySelector('#threeDotsDeleteUser');
    const threeDotsAddUser = this._element.querySelector('#threeDotsAddUser');
    const modalDeleteUserConfirm = this._element.querySelector('#modalDeleteUserConfirm');
    const deleteUserButtonConfirm = this._element.querySelector('#deleteUserButtonConfirm');
    const deleteUserButtonCancel = this._element.querySelector('#deleteUserButtonCancel');
    const addUserButton = this._element.querySelector('#addUserButton');
    const clipButton = this._element.querySelector('#clipButton');

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
