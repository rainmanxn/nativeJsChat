import { SEND_BUTTON } from "../../constants/buttonClasses";
import { Button } from "../../components/Button/index";
const sendMessageButtonProps = {
    type: 'button',
    className: SEND_BUTTON,
};
const SendMessageButton = new Button(sendMessageButtonProps);
export const mainData = {
    submitButton: SendMessageButton.getContent().innerHTML,
    activeItemId: '-1',
    chats: [],
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
            iconSrc: './dist/img/iconadd.svg'
        },
        {
            modalId: 'threeDotsDeleteUser',
            buttonName: 'Удалить пользователя',
            iconSrc: './dist/img/icon-delete.svg'
        }
    ],
    clipModals: [
        {
            modalId: 'photoSend',
            buttonName: 'Фото или Видео',
            iconSrc: './dist/img/photo-icon.svg'
        },
        {
            modalId: 'fileSend',
            buttonName: 'Файл',
            iconSrc: './dist/img/file-icon.svg'
        },
        {
            modalId: 'locationSend',
            buttonName: 'Файл',
            iconSrc: './dist/img/location-icon.svg'
        }
    ]
};
export const messagesData = {
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
