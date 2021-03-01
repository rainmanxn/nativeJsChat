import { SEND_BUTTON } from '../../constants/buttonClasses';
import { Button } from '../../components/Button/index';

const sendMessageButtonProps = {
  type: 'button',
  className: SEND_BUTTON
};

const SendMessageButton = new Button(sendMessageButtonProps);

export const mainData = {
  submitButton: SendMessageButton.getContent().innerHTML,
  activeItemId: '-1',
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
