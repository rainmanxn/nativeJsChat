let hasActiveItem = false;
const mainRightBlock = document.querySelector('.main-right-block');
// if (!hasActiveItem) {
//   mainRightBlock.innerHTML = `<div class="main-right-block-empty-text">Выберите чат, чтобы отправить сообщение</div>`
// }

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
    hasActiveItem = true;
    mainRightBlock.innerHTML = "";
    console.log(hasActiveItem)
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
  console.log(newData)
})
