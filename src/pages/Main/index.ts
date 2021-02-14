import { template, messagesTemplate } from './template.js';
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { TemplatePropsContext } from "../../types/index.js";
import { mainData, messagesData } from "./data.js";
import Block from '../../lib/block.js';
import {router} from "../../lib/Router/Router.js";
import { addUserToChat, createChat, getChats, removeUserFromChat } from "../../api/chats.js";

export class Main extends Block {
  constructor() {
    super('main', mainData);
  }

  componentDidMount(_oldProps?: TemplatePropsContext) {
    getChats().then((resp: any) => {
      const result = JSON.parse(resp.response)
      this.setProps({
        chats: result
      })
    })
  }

  mount() {
    const mainRightBlockContainer = this._element.querySelector('.main-right-block-container');
    const mainRightBlockEmptyText = this._element.querySelector('.main-right-block-empty-text');
    const activeItemId = this.props.activeItemId;
    const chatId = activeItemId.slice(2);
    const addChat: HTMLFormElement | null = this._element.querySelector('#addChat');
    const addChatInput: HTMLFormElement | null = this._element.querySelector('#addChatInput');
    addChat?.addEventListener('submit', (e) => {
      e.preventDefault()
      createChat(addChatInput?.value)
    })
    const chatItems = this._element.querySelectorAll('.chat-item-container');
    [...chatItems].forEach(el => {
      const id = el.id;
      if (activeItemId === id) {
        el.classList.add('active-item');
      }
    });
    if (this.props.activeItemId !== '-1') {
      mainRightBlockEmptyText?.classList.add('remove-modal');
      mainRightBlockContainer?.classList.remove('remove-modal');
    }
    [...chatItems].forEach(el => {
      el.addEventListener('click', () => {
        const id = el.id;
        if (activeItemId === id) {
          el.classList.remove('active-item');
        }
        if (activeItemId !== id) {
          el.classList.add('active-item');
        }
        render('.main-chat-messages', new Messages(messagesData));
        this.setProps({activeItemId: id})
      })
    })
    const linkButton: HTMLElement | null = this._element.querySelector('.main-left-block-profile-link');
    linkButton?.addEventListener('click', () => {
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

    threeDotsDeleteUser?.addEventListener('click', () => {
      modalDeleteUser?.classList.toggle("remove-modal");
      modalOverlay?.classList.toggle("remove-field");
    })

    modalOverlay?.addEventListener('click', () => {
      modalOverlay.classList.toggle("remove-field");
      modalDeleteUser?.classList.add("remove-modal");
      modalAddUser?.classList.add("remove-modal");
      modalDeleteUserConfirm && modalDeleteUserConfirm.classList.add("remove-modal");
    })

    threeDotsContainer?.addEventListener('click', () => {
      modalEditUser?.classList.toggle("remove-modal");
      threeDotsContainer.classList.toggle("three-dots-container-add-background");
    });

    deleteUserButton?.addEventListener('click', () => {
      modalDeleteUser?.classList.add("remove-modal");
      modalDeleteUserConfirm?.classList.toggle("remove-modal");
    })

    deleteUserButtonConfirm?.addEventListener('click', () => {
      const inputModalRemoveUser: HTMLInputElement | null = this._element.querySelector('#userName');
      const userID = Number(inputModalRemoveUser?.value)
      removeUserFromChat(userID, chatId)
      modalOverlay && modalOverlay.classList.toggle("remove-field");
      modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
    })

    deleteUserButtonCancel?.addEventListener('click', () => {
      modalOverlay?.classList.toggle("remove-field");
      modalDeleteUserConfirm?.classList.toggle("remove-modal");
    })

    threeDotsAddUser?.addEventListener('click', () => {
      modalOverlay?.classList.toggle("remove-field");
      modalAddUser?.classList.toggle("remove-modal");
    })

    addUserButton?.addEventListener('click', () => {
      const inputModalAddUser: HTMLInputElement | null = this._element.querySelector('#userNameAddUser');
      const userID = Number(inputModalAddUser?.value)
      addUserToChat(userID, chatId)
      modalOverlay?.classList.toggle("remove-field");
      modalAddUser?.classList.toggle("remove-modal");
    })

    clipButton?.addEventListener('click', () => {
      modalClip?.classList.toggle("remove-modal");
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
