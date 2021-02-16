import { template, messagesTemplate } from './template.js';
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { mainData, messagesData } from "./data.js";
import Block from '../../lib/block.js';
import { Router } from "../../lib/Router/Router.js";
import { addUserToChat, createChat, getChats, removeUserFromChat } from "../../api/chats.js";
const router = new Router(".app");
export class Main extends Block {
    constructor() {
        super('main', mainData);
    }
    componentDidMount(_oldProps) {
        getChats().then((resp) => {
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
        const addChat = this._element.querySelector('#addChat');
        const addChatInput = this._element.querySelector('#addChatInput');
        addChat === null || addChat === void 0 ? void 0 : addChat.addEventListener('submit', (e) => {
            e.preventDefault();
            createChat(addChatInput === null || addChatInput === void 0 ? void 0 : addChatInput.value);
        });
        const chatItems = this._element.querySelectorAll('.chat-item-container');
        [...chatItems].forEach(el => {
            const id = el.id;
            if (activeItemId === id) {
                el.classList.add('active-item');
            }
        });
        if (this.props.activeItemId !== '-1') {
            mainRightBlockEmptyText === null || mainRightBlockEmptyText === void 0 ? void 0 : mainRightBlockEmptyText.classList.add('remove-modal');
            mainRightBlockContainer === null || mainRightBlockContainer === void 0 ? void 0 : mainRightBlockContainer.classList.remove('remove-modal');
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
                this.setProps({ activeItemId: id });
            });
        });
        const linkButton = this._element.querySelector('.main-left-block-profile-link');
        linkButton === null || linkButton === void 0 ? void 0 : linkButton.addEventListener('click', () => {
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
        threeDotsDeleteUser === null || threeDotsDeleteUser === void 0 ? void 0 : threeDotsDeleteUser.addEventListener('click', () => {
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.toggle("remove-modal");
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle("remove-field");
        });
        modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.addEventListener('click', () => {
            modalOverlay.classList.toggle("remove-field");
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.add("remove-modal");
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.add("remove-modal");
            modalDeleteUserConfirm && modalDeleteUserConfirm.classList.add("remove-modal");
        });
        threeDotsContainer === null || threeDotsContainer === void 0 ? void 0 : threeDotsContainer.addEventListener('click', () => {
            modalEditUser === null || modalEditUser === void 0 ? void 0 : modalEditUser.classList.toggle("remove-modal");
            threeDotsContainer.classList.toggle("three-dots-container-add-background");
        });
        deleteUserButton === null || deleteUserButton === void 0 ? void 0 : deleteUserButton.addEventListener('click', () => {
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.add("remove-modal");
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.toggle("remove-modal");
        });
        deleteUserButtonConfirm === null || deleteUserButtonConfirm === void 0 ? void 0 : deleteUserButtonConfirm.addEventListener('click', () => {
            const inputModalRemoveUser = this._element.querySelector('#userName');
            const userID = Number(inputModalRemoveUser === null || inputModalRemoveUser === void 0 ? void 0 : inputModalRemoveUser.value);
            removeUserFromChat(userID, chatId);
            modalOverlay && modalOverlay.classList.toggle("remove-field");
            modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
        });
        deleteUserButtonCancel === null || deleteUserButtonCancel === void 0 ? void 0 : deleteUserButtonCancel.addEventListener('click', () => {
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle("remove-field");
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.toggle("remove-modal");
        });
        threeDotsAddUser === null || threeDotsAddUser === void 0 ? void 0 : threeDotsAddUser.addEventListener('click', () => {
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle("remove-field");
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.toggle("remove-modal");
        });
        addUserButton === null || addUserButton === void 0 ? void 0 : addUserButton.addEventListener('click', () => {
            const inputModalAddUser = this._element.querySelector('#userNameAddUser');
            const userID = Number(inputModalAddUser === null || inputModalAddUser === void 0 ? void 0 : inputModalAddUser.value);
            addUserToChat(userID, chatId);
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle("remove-field");
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.toggle("remove-modal");
        });
        clipButton === null || clipButton === void 0 ? void 0 : clipButton.addEventListener('click', () => {
            modalClip === null || modalClip === void 0 ? void 0 : modalClip.classList.toggle("remove-modal");
        });
    }
    render() {
        return templator(template, this.props);
    }
}
class Messages extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return templator(messagesTemplate, this.props);
    }
}
