const mainChatMessages = document.querySelector('.main-chat-messages ');
const mainRightBlockEmptyText = document.querySelector('.main-right-block-empty-text');
const mainRightBlockContainer = document.querySelector('.main-right-block-container');
let activeItemId = -1;

const mockMessages = `
  <li class="main-chat-messages-date">
    19 июня
  </li>
  <li class="main-chat-messages-opponent-text">
    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
    момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
    знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все
    еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
    и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
    <div class="main-chat-messages-time">11:56</div>
  </li>
  <li class="main-chat-messages-user-text">
    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
    попросила Хассельблад адаптировать модель SWC для полетов на Луну.
    <img src="../../img/2checks.svg" class="two-checks" alt="two-checks">
    <div class="main-chat-messages-time">11:56</div>
  </li>
`
const createItem = (name, message, time, newMessages, id) => {
  const item = document.createElement('li');
  item.classList.add('chat-item-container')
  item.id = id;
  item.innerHTML = `
    <div class="chat-item-container-left-block">
      <div class="chat-item-container-left-block-avatar"></div>
      <div class="chat-item-container-left-block-info">
        <div class="chat-item-container-left-block-info-name">${name}</div>
        <div class="chat-item-container-left-block-info-text">${message}</div>
      </div>
    </div>
    <div class="chat-item-container-right-block">
      <div class="chat-item-container-right-block-top">
        <div class="time">${time}</div>
        <img src="../img/close.svg" class="close-button" alt="close-button">
      </div>
    </div>
  `;

  item.addEventListener('click', () => {
    mainRightBlockEmptyText.classList.add('remove-modal');
    mainRightBlockContainer.classList.remove('remove-modal');
    if (activeItemId !== -1) {
      const activeItem = document.getElementById(`${activeItemId}`);
      activeItem.classList.remove('active-item')
    }
    activeItemId = id;
    item.classList.add('active-item');
    mainChatMessages.innerHTML = mockMessages;
  })
  const createCountItem = (count) => {
    const item = document.createElement('div');
    item.classList.add('ellipse-count-messages');
    item.innerHTML = `<div class="ellipse-count-messages-text">${count}</div>`
    return item;
  }
  const chatItemContainerRightBlock = item.querySelector('.chat-item-container-right-block');
  if (newMessages) {
    const countItem = createCountItem(newMessages);
    chatItemContainerRightBlock.appendChild(countItem)
  }
  return item;
}

const data = [
  {
    name: 'Андрей',
    message: 'Изображение',
    time: '10:49',
    newMessages: 2
  },
  {
    name: 'Киноклуб',
    message: 'Вы: Стикер',
    time: '10:49',
    newMessages: 0
  },
  {
    name: 'Илья',
    message: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '10:49',
    newMessages: 4
  },
  {
    name: 'Вадим',
    message: 'Круто',
    time: '10:49',
    newMessages: 0
  },
  {
    name: 'тет-а-теты',
    message: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: '10:49',
    newMessages: 0
  },
];

let newData = data;

const list = document.querySelector('#list')

newData.forEach(({ name, message, time, newMessages}, i) => {
  list.appendChild(createItem(name, message, time, newMessages, i))
})

const inputSearch = document.querySelector('.main-left-block-find');
inputSearch.addEventListener('input', event => {
  list.innerHTML = '';
  const { value } = event.target;
  newData = data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
  newData.forEach(({ name, message, time, newMessages}, i) => {
    list.appendChild(createItem(name, message, time, newMessages, i))
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
