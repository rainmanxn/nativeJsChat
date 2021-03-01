import { template } from './template';
import templator from '../../utils/templator';
import { TemplatePropsContext } from '../../types/index';
import { mainData } from './data';
import Block from '../../lib/block';
import { Router } from '../../lib/Router/Router';
import {
  addUserToChat, createChat, getChats, removeUserFromChat, getChatToken, initChat, sendMessage
} from '../../api/chats';
import {getUserData} from '../../api/authorization';
import {SEND_BUTTON} from '../../constants/buttonClasses';

type ChatMessage = {
  content: string;
  time: string;
  type: string;
  userId: number;
  chatId: number;
}

const router = new Router('.app');
export class Main extends Block {
  constructor() {
    super('main', mainData);
  }

  componentDidMount(_oldProps?: TemplatePropsContext) {
    getUserData().then((resp: any) => {
      const result = JSON.parse(resp.response);
      const { id } = result;
      localStorage.setItem('userId', id);
      console.log(id);
    });
    getUserData().then((resp: any) => {
      const result = JSON.parse(resp.response);
      const {
        first_name, second_name, display_name, login, avatar, email, phone
      } = result;
      const srcImg = avatar ? `https://ya-praktikum.tech/${avatar}` : '../img/iconman.png';
      this.setProps({
        emailValue: email,
        firstNameValue: first_name,
        secondNameValue: second_name,
        loginValue: login,
        phoneValue: phone,
        displayNameValue: display_name,
        srcImg
      });
    });
    getChats().then((resp: any) => {
      const result = JSON.parse(resp.response);
      this.setProps({
        chats: result
      });
    });
  }

  mount() {
    const mainRightBlockContainer = this._element.querySelector('.main-right-block-container');
    const mainRightBlockEmptyText = this._element.querySelector('.main-right-block-empty-text');
    const activeItemId = this.props.activeItemId;
    const chatId = activeItemId.slice(2);
    const addChat: HTMLFormElement | null = this._element.querySelector('#addChat');
    const addChatInput: HTMLFormElement | null = this._element.querySelector('#addChatInput');
    addChat?.addEventListener('submit', e => {
      e.preventDefault();
      createChat(addChatInput?.value);
    });
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

        this.setProps({ activeItemId: id });
        const getSender = (userId: number): string => {
          return userId === Number(localStorage.getItem('userId')) ? 'myMessage' : 'opponentMessage';
        };

        const onMessage = (data: ChatMessage) => {
          if (data.type === 'message') {
            const { content, time, userId } = data;
            const whoMessage = getSender(userId);
            const message = {
              [`${whoMessage}`]: content,
              time: new Date(time).toLocaleString()
            };
            this.setProps({...this.props, messages: [...this.props.messages, message]});
          }

          if (Array.isArray(data)) {
              const messages = data.map(({ user_id, content, time }) => {
                const whoMessage = getSender(user_id);
                 return {
                    [`${whoMessage}`]: content,
                    time: new Date(time).toLocaleString()
                  };
              }

              ).reverse();
            this.setProps({...this.props, messages });
            console.log(messages);
          }
        };

        const userId = Number(localStorage.getItem('userId'));
        getChatToken(Number(el.id)).then(({response}) => {
          const token = JSON.parse(response).token;
          initChat(Number(el.id), userId, token, onMessage);
        });
      });
    });

    const linkButton: HTMLElement | null = this._element.querySelector('.main-left-block-profile-link');
    linkButton?.addEventListener('click', () => {
      router.go('/profile');
    });
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
      modalDeleteUser?.classList.toggle('remove-modal');
      modalOverlay?.classList.toggle('remove-field');
    });

    modalOverlay?.addEventListener('click', () => {
      modalOverlay.classList.toggle('remove-field');
      modalDeleteUser?.classList.add('remove-modal');
      modalAddUser?.classList.add('remove-modal');
      modalDeleteUserConfirm?.classList.add('remove-modal');
    });

    threeDotsContainer?.addEventListener('click', () => {
      modalEditUser?.classList.toggle('remove-modal');
      threeDotsContainer.classList.toggle('three-dots-container-add-background');
    });

    deleteUserButton?.addEventListener('click', () => {
      modalDeleteUser?.classList.add('remove-modal');
      modalDeleteUserConfirm?.classList.toggle('remove-modal');
    });

    deleteUserButtonConfirm?.addEventListener('click', () => {
      const inputModalRemoveUser: HTMLInputElement | null = this._element.querySelector('#userName');
      const userID = Number(inputModalRemoveUser?.value);
      removeUserFromChat(userID, chatId);
      modalOverlay?.classList.toggle('remove-field');
      modalDeleteUserConfirm?.classList.toggle('remove-modal');
    });

    deleteUserButtonCancel?.addEventListener('click', () => {
      modalOverlay?.classList.toggle('remove-field');
      modalDeleteUserConfirm?.classList.toggle('remove-modal');
    });

    threeDotsAddUser?.addEventListener('click', () => {
      modalOverlay?.classList.toggle('remove-field');
      modalAddUser?.classList.toggle('remove-modal');
    });

    addUserButton?.addEventListener('click', () => {
      const inputModalAddUser: HTMLInputElement | null = this._element.querySelector('#userNameAddUser');
      const userID = Number(inputModalAddUser?.value);
      addUserToChat(userID, chatId);
      modalOverlay?.classList.toggle('remove-field');
      modalAddUser?.classList.toggle('remove-modal');
    });

    clipButton?.addEventListener('click', () => {
      modalClip?.classList.toggle('remove-modal');
    });

/// ///////////////////////////////////
//     this._element.querySelectorAll<HTMLElement>('.chat-item-container')?.forEach(el =>
//       el.addEventListener('click', () => {
//         const currentChat = this.props.chatItems
//           .find((chat: any) => `${chat.id}` === el.dataset.chatItemId)!;
//         this.setProps({
//           ...this.props,
//           currentChat
//         });
//
//         const onMessage = (data: ChatMessage) => {
//           if (data.type === 'message') {
//             const formattedMessage = {...data, time: new Date(data.time).toLocaleString()};
//             this.setProps({...this.props, chatMessages: [...this.props.chatMessages, formattedMessage]});
//           }
//
//           if (Array.isArray(data)) {
//             const formattedMessages =
//               data.map(message => ({...message,
//                 userId: message.user_id,
//                 time: new Date(message.time).toLocaleString()}))
//                 .reverse();
//             this.setProps({...this.props, chatMessages: formattedMessages});
//           }
//         };
//
//         getChatToken(currentChat.id).then(({token}) =>
//           initChat(currentChat.id, this.props.authUser.id, token, onMessage));
//       })
//     );
//     const sendMessageButton = this._element?.querySelector('#send-message');
    const sendMessageButton = this._element?.querySelector(`.${SEND_BUTTON}`);
    sendMessageButton?.addEventListener('click', () => {
      const messageInput: HTMLInputElement | null = this._element?.querySelector('.main-chat-footer-input');
      if (messageInput) {
        console.log('fdsfds', messageInput.value);
        sendMessage(messageInput.value);
        messageInput.value = '';
      }
    });
  }

  render(): string {
    return templator(template, this.props);
  }
}
