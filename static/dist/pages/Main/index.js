import { template } from './template';
import templator from '../../utils/templator';
import { mainData } from './data';
import Block from '../../lib/block';
import { Router } from '../../lib/Router/Router';
import { addUserToChat, createChat, getChats, removeUserFromChat, getChatToken, initChat, sendMessage } from '../../api/chats';
import { getUserData } from '../../api/authorization';
import { SEND_BUTTON } from '../../constants/buttonClasses';
const router = new Router('.app');
export class Main extends Block {
    constructor() {
        super('main', mainData);
    }
    componentDidMount(_oldProps) {
        getUserData().then((resp) => {
            const result = JSON.parse(resp.response);
            const { id } = result;
            localStorage.setItem('userId', id);
            console.log(id);
        });
        getUserData().then((resp) => {
            const result = JSON.parse(resp.response);
            const { first_name, second_name, display_name, login, avatar, email, phone } = result;
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
        getChats().then((resp) => {
            const result = JSON.parse(resp.response);
            this.setProps({
                chats: result
            });
        });
    }
    mount() {
        var _a;
        const mainRightBlockContainer = this._element.querySelector('.main-right-block-container');
        const mainRightBlockEmptyText = this._element.querySelector('.main-right-block-empty-text');
        const activeItemId = this.props.activeItemId;
        const chatId = activeItemId.slice(2);
        const addChat = this._element.querySelector('#addChat');
        const addChatInput = this._element.querySelector('#addChatInput');
        addChat === null || addChat === void 0 ? void 0 : addChat.addEventListener('submit', e => {
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
                this.setProps({ activeItemId: id });
                const getSender = (userId) => {
                    return userId === Number(localStorage.getItem('userId')) ? 'myMessage' : 'opponentMessage';
                };
                const onMessage = (data) => {
                    if (data.type === 'message') {
                        const { content, time, userId } = data;
                        const whoMessage = getSender(userId);
                        const message = {
                            [`${whoMessage}`]: content,
                            time: new Date(time).toLocaleString()
                        };
                        this.setProps(Object.assign(Object.assign({}, this.props), { messages: [...this.props.messages, message] }));
                    }
                    if (Array.isArray(data)) {
                        const messages = data.map(({ user_id, content, time }) => {
                            const whoMessage = getSender(user_id);
                            return {
                                [`${whoMessage}`]: content,
                                time: new Date(time).toLocaleString()
                            };
                        }).reverse();
                        this.setProps(Object.assign(Object.assign({}, this.props), { messages }));
                        console.log(messages);
                    }
                };
                const userId = Number(localStorage.getItem('userId'));
                getChatToken(Number(el.id)).then(({ response }) => {
                    const token = JSON.parse(response).token;
                    initChat(Number(el.id), userId, token, onMessage);
                });
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
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.toggle('remove-modal');
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle('remove-field');
        });
        modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.addEventListener('click', () => {
            modalOverlay.classList.toggle('remove-field');
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.add('remove-modal');
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.add('remove-modal');
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.add('remove-modal');
        });
        threeDotsContainer === null || threeDotsContainer === void 0 ? void 0 : threeDotsContainer.addEventListener('click', () => {
            modalEditUser === null || modalEditUser === void 0 ? void 0 : modalEditUser.classList.toggle('remove-modal');
            threeDotsContainer.classList.toggle('three-dots-container-add-background');
        });
        deleteUserButton === null || deleteUserButton === void 0 ? void 0 : deleteUserButton.addEventListener('click', () => {
            modalDeleteUser === null || modalDeleteUser === void 0 ? void 0 : modalDeleteUser.classList.add('remove-modal');
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.toggle('remove-modal');
        });
        deleteUserButtonConfirm === null || deleteUserButtonConfirm === void 0 ? void 0 : deleteUserButtonConfirm.addEventListener('click', () => {
            const inputModalRemoveUser = this._element.querySelector('#userName');
            const userID = Number(inputModalRemoveUser === null || inputModalRemoveUser === void 0 ? void 0 : inputModalRemoveUser.value);
            removeUserFromChat(userID, chatId);
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle('remove-field');
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.toggle('remove-modal');
        });
        deleteUserButtonCancel === null || deleteUserButtonCancel === void 0 ? void 0 : deleteUserButtonCancel.addEventListener('click', () => {
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle('remove-field');
            modalDeleteUserConfirm === null || modalDeleteUserConfirm === void 0 ? void 0 : modalDeleteUserConfirm.classList.toggle('remove-modal');
        });
        threeDotsAddUser === null || threeDotsAddUser === void 0 ? void 0 : threeDotsAddUser.addEventListener('click', () => {
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle('remove-field');
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.toggle('remove-modal');
        });
        addUserButton === null || addUserButton === void 0 ? void 0 : addUserButton.addEventListener('click', () => {
            const inputModalAddUser = this._element.querySelector('#userNameAddUser');
            const userID = Number(inputModalAddUser === null || inputModalAddUser === void 0 ? void 0 : inputModalAddUser.value);
            addUserToChat(userID, chatId);
            modalOverlay === null || modalOverlay === void 0 ? void 0 : modalOverlay.classList.toggle('remove-field');
            modalAddUser === null || modalAddUser === void 0 ? void 0 : modalAddUser.classList.toggle('remove-modal');
        });
        clipButton === null || clipButton === void 0 ? void 0 : clipButton.addEventListener('click', () => {
            modalClip === null || modalClip === void 0 ? void 0 : modalClip.classList.toggle('remove-modal');
        });
        const sendMessageButton = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector(`.${SEND_BUTTON}`);
        sendMessageButton === null || sendMessageButton === void 0 ? void 0 : sendMessageButton.addEventListener('click', () => {
            var _a;
            const messageInput = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector('.main-chat-footer-input');
            if (messageInput) {
                console.log('fdsfds', messageInput.value);
                sendMessage(messageInput.value);
                messageInput.value = '';
            }
        });
    }
    render() {
        return templator(template, this.props);
    }
}
