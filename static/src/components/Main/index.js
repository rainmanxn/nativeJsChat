import { template, messagesTemplate } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
const mainData = {
    chats: [
        {
            name: 'Андрей',
            message: 'Изображение',
            time: '10:49',
            newMessages: 2,
            itemId: 0
        },
        {
            name: 'Киноклуб',
            message: 'Вы: Стикер',
            time: '10:49',
            newMessages: 0,
            itemId: 1
        },
        {
            name: 'Илья',
            message: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '10:49',
            newMessages: 4,
            itemId: 2
        },
        {
            name: 'Вадим',
            message: 'Круто',
            time: '10:49',
            newMessages: 0,
            itemId: 3
        },
        {
            name: 'тет-а-теты',
            message: 'И Human Interface Guidelines и Material Design рекомендуют...',
            time: '10:49',
            newMessages: 0,
            itemId: 4
        },
    ],
    headerName: 'Вадим',
    removeModals: [
        {
            modalId: 'modalDeleteUser',
            modalText: 'Удалить пользователя',
            fieldName: 'Логин',
            inputId: 'userName',
            buttonId: 'deleteUserButton',
            buttonName: 'УДАЛИТЬ'
        },
        {
            modalId: 'modalAddUser',
            modalText: 'Добавить пользователя',
            fieldName: 'Логин',
            inputId: 'userNameAddUser',
            buttonId: 'addUserButton',
            buttonName: 'ДОБАВИТЬ'
        }
    ],
    confirmName: 'ivanivanov',
    threeDotsModals: [
        {
            modalId: 'threeDotsAddUser',
            buttonName: 'Добавить пользователя',
            iconSrc: '../img/iconadd.svg'
        },
        {
            modalId: 'threeDotsDeleteUser',
            buttonName: 'Удалить пользователя',
            iconSrc: '../img/icon-delete.svg'
        }
    ],
    clipModals: [
        {
            modalId: 'photoSend',
            buttonName: 'Фото или Видео',
            iconSrc: '../img/photo-icon.svg'
        },
        {
            modalId: 'fileSend',
            buttonName: 'Файл',
            iconSrc: '../img/file-icon.svg'
        },
        {
            modalId: 'locationSend',
            buttonName: 'Файл',
            iconSrc: '../img/location-icon.svg'
        }
    ]
};
const messagesData = {
    messages: [
        { opponentMessage: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то\n' +
                'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все\n' +
                'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все\n' +
                'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
                'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда\n' +
                'и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            time: '11:56'
        },
        { myMessage: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент ' +
                'попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
            time: '11:57'
        }
    ],
};
class Main extends Block {
    constructor(props) {
        super('main', props);
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
render('body', new Main(mainData));
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
            activeItem && activeItem.classList.remove('active-item');
        }
        activeItemId = id;
        el.classList.add('active-item');
        render('.main-chat-messages', new Messages(messagesData));
    });
});
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
});
modalOverlay && modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.toggle("remove-field");
    modalDeleteUser && modalDeleteUser.classList.add("remove-modal");
    modalAddUser && modalAddUser.classList.add("remove-modal");
    modalDeleteUserConfirm && modalDeleteUserConfirm.classList.add("remove-modal");
});
threeDotsContainer && threeDotsContainer.addEventListener('click', () => {
    modalEditUser && modalEditUser.classList.toggle("remove-modal");
    threeDotsContainer.classList.toggle("three-dots-container-add-background");
});
deleteUserButton && deleteUserButton.addEventListener('click', () => {
    modalDeleteUser && modalDeleteUser.classList.add("remove-modal");
    modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
});
deleteUserButtonConfirm && deleteUserButtonConfirm.addEventListener('click', () => {
    modalOverlay && modalOverlay.classList.toggle("remove-field");
    modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
});
deleteUserButtonCancel && deleteUserButtonCancel.addEventListener('click', () => {
    modalOverlay && modalOverlay.classList.toggle("remove-field");
    modalDeleteUserConfirm && modalDeleteUserConfirm.classList.toggle("remove-modal");
});
threeDotsAddUser && threeDotsAddUser.addEventListener('click', () => {
    modalOverlay && modalOverlay.classList.toggle("remove-field");
    modalAddUser && modalAddUser.classList.toggle("remove-modal");
});
addUserButton && addUserButton.addEventListener('click', () => {
    modalOverlay && modalOverlay.classList.toggle("remove-field");
    modalAddUser && modalAddUser.classList.toggle("remove-modal");
});
clipButton && clipButton.addEventListener('click', () => {
    modalClip && modalClip.classList.toggle("remove-modal");
});
