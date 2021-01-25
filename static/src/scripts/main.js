import {
         createMainLeftBlockTemplate,
         createMessagesTemplate,
         createAddRemoveModalsTemplate,
         createMainHeaderTemplate,
         createMainChatContainerTemplate,
         createMainFooterTemplate,
         createConfirmModalsTemplate,
         createThreeDotsModalTemplate,
         createClipModalTemplate
       } from "./createTemplate.js";

const leftBlockData = {
  profileLink: 'profile.html',
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
  ]
};

const messagesData = {
  messages: [
    { opponentMessage : 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то\n' +
        'момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все\n' +
        'знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все\n' +
        'еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда\n' +
        'и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      time: '11:56'
    },
    { myMessage : 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент ' +
        'попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
      time: '11:57'
    }
  ]
};

const headerData = {
  name: 'Вадим'
}

const addRemoveModalsData = {
  modals: [
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
  ]
}

const confirmModalData = {
  name: 'ivanivanov'
}

const threeDotsModalData = {
  modals: [
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
  ]
}

const clipModalData = {
  modals: [
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
}
const mainRightBlockContainer = document.querySelector('.main-right-block-container');
const leftBlock = document.querySelector('.main-left-block')

const compiledAvatarBlockTemplate = createMainLeftBlockTemplate(leftBlockData);
const compiledMessagesTemplate =  createMessagesTemplate(messagesData);
const compiledAddRemoveModalsTemplate = createAddRemoveModalsTemplate(addRemoveModalsData);
const compiledConfirmModalsTemplate = createConfirmModalsTemplate(confirmModalData);
const compiledMainHeaderTemplate = createMainHeaderTemplate(headerData)
const compiledMainChatContainerTemplate = createMainChatContainerTemplate();
const compiledMainFooterTemplate = createMainFooterTemplate();
const compiledThreeDotsModalTemplate = createThreeDotsModalTemplate(threeDotsModalData);
const compiledClipModalTemplate = createClipModalTemplate(clipModalData);

leftBlock.innerHTML = compiledAvatarBlockTemplate;
mainRightBlockContainer.innerHTML = compiledMainHeaderTemplate + compiledMainChatContainerTemplate + compiledMainFooterTemplate +
  compiledAddRemoveModalsTemplate + compiledConfirmModalsTemplate + compiledThreeDotsModalTemplate + compiledClipModalTemplate;

const mainChatMessages = document.querySelector('.main-chat-messages ');
const mainRightBlockEmptyText = document.querySelector('.main-right-block-empty-text');
let activeItemId = -1;

const chatItems = document.querySelectorAll('.chat-item-container');
[...chatItems].forEach(el => {
  el.addEventListener('click', () => {
    const id = el.id;
    mainRightBlockEmptyText.classList.add('remove-modal');
    mainRightBlockContainer.classList.remove('remove-modal');
    if (activeItemId !== -1) {
      const activeItem = document.getElementById(`${activeItemId}`);
      activeItem.classList.remove('active-item')
    }
    activeItemId = id;
    el.classList.add('active-item');
    mainChatMessages.innerHTML = compiledMessagesTemplate;
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

threeDotsDeleteUser.addEventListener('click', () => {
  modalDeleteUser.classList.toggle("remove-modal");
  modalOverlay.classList.toggle("remove-field");
})

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalDeleteUser.classList.add("remove-modal");
  modalAddUser.classList.add("remove-modal");
  modalDeleteUserConfirm.classList.add("remove-modal");
})

threeDotsContainer.addEventListener('click', () => {
  modalEditUser.classList.toggle("remove-modal");
  threeDotsContainer.classList.toggle("three-dots-container-add-background");
});

deleteUserButton.addEventListener('click', () => {
  modalDeleteUser.classList.add("remove-modal");
  modalDeleteUserConfirm.classList.toggle("remove-modal");
})

deleteUserButtonConfirm.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalDeleteUserConfirm.classList.toggle("remove-modal");
})

deleteUserButtonCancel.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalDeleteUserConfirm.classList.toggle("remove-modal");
})

threeDotsAddUser.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalAddUser.classList.toggle("remove-modal");
})

addUserButton.addEventListener('click', () => {
  modalOverlay.classList.toggle("remove-field");
  modalAddUser.classList.toggle("remove-modal");
})

clipButton.addEventListener('click', () => {
  modalClip.classList.toggle("remove-modal");
})
