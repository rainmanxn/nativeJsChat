const { compile } = window.Handlebars;

export const createAuthTemplate = data => {
  const template = `
    <div class="login-container">
    <div class="{{containerClass}}">
      <h1 class="login-header">{{headerName}}</h1>
      <form class="register-form" id="submit">
        {{#each fields}}
          <div class="login-input">
            <span class="field-name">{{fieldName}}</span>
            <label>
              <input type="{{inputType}}" class="input-text" name="{{inputName}}">
            </label>
          </div>
        {{/each}}
        <span class="{{errorClass}}"">Пароли не совпадают</span>
        <button type="submit" class="{{submitButtonClass}}">{{submitButtonName}}</button>
      </form>
      <a href="{{linkSrc}}" class="login-href">{{linkText}}</a>
    </div>
  </div>
`
  return compile(template)(data)
};

export const createModalAvatarTemplate = data => {
  const template = `
    <div class="modal remove-field" id="modal">
      <div class="modal-header">Загрузите файл</div>
      <a href="#" class="modal-link">Выбрать файл на компьютере</a>
      <button class="submit-button submit-button__modal-overlay">ПОМЕНЯТЬ</button>
    </div>
  `
  return compile(template)(data)
};

export const createAvatarBlockTemplate = data => {
  const template = `
    <div class="profile-avatar-block" id="profileAvatarBlock">
      <div class="profile-avatar-line"></div>
      <div class="profile-avatar">
        <div class="profile-avatar-hover">
          <div class="profile-avatar-text">Поменять аватар</div>
        </div>
        <img src="{{srcImg}}" class="profile-avatar-icon" alt="profile-avatar-icon">
      </div>
    </div>
    <h2 class="profile-user-name">
      {{userName}}
    </h2>
  `
  return compile(template)(data)
};

export const createProfileInfoTemplate = data => {
  const template = `
    <form id="submit" class="profile-info-block">
      {{#each fields}}
        <div class="profile-info-item">
          <span class="profile-info-field-name">{{fieldName}}</span>
          <label>
            <input type="{{inputType}}" readonly class="profile-info-field-input" name="{{inputName}}" value="{{inputValue}}">
          </label>
        </div>
      {{/each}}
      <div class="profile-info-block">
        <div id="editBlock">
          {{#each buttons}}
            <div class="profile-info-item">
              <button type="button" id="{{buttonId}}" class="profile-edit-item">{{buttonName}}</button>
            </div>            
          {{/each}}
        </div>
        <button type="submit" id="saveButton" class="submit-button profile-info-block__submit-button hide-field">СОХРАНИТЬ</button>
      </div>
    </form>
  `
  return compile(template)(data)
};

export const createChangePasswordTemplate = data => {
  const template = `
    <form id="editPassword" class="profile-info-block profile-info-block__edit-password  hide-field">
      {{#each fields}}
        <div class="profile-info-item">
          <div class="profile-info-field-name">{{fieldName}}</div>
          <label>
            <input type="{{inputType}}" class="profile-info-field-input" name="{{inputName}}" value="{{inputValue}}">
          </label>
        </div>
      {{/each}}
      <button type="submit" id="savePasswordButton" class="submit-button submit-button__edit-password">СОХРАНИТЬ</button>
    </form>
  `
  return compile(template)(data)
};

export const createMainLeftBlockTemplate = data => {
  const template = `
    <a href="{{profileLink}}" class="main-left-block-profile-link">
      Профиль &gt;
    </a>
    <input type="text" class="main-left-block-find" placeholder="Поиск">
     <ul id="list">
      {{#each chats}}
        <li class="chat-item-container" id="{{itemId}}">
          <div class="chat-item-container-left-block">
            <div class="chat-item-container-left-block-avatar"></div>
            <div class="chat-item-container-left-block-info">
              <h3 class="chat-item-container-left-block-info-name">{{name}}</h3>
              <div class="chat-item-container-left-block-info-text">{{message}}</div>
            </div>
          </div>
          <div class="chat-item-container-right-block">
            <div class="chat-item-container-right-block-top">
              <div class="time">{{time}}</div>
              <img src="../img/close.svg" class="close-button" alt="close-button">
            </div>
            <div class="ellipse-count-messages">
              <div class="ellipse-count-messages-text">{{newMessages}}</div>
            </div>
          </div>
        </li>
      {{/each}}
     </ul>
  `
  return compile(template)(data)
};

export const createMessagesTemplate = data => {
  const template = `
    <li class="main-chat-messages-date">
      19 июня
    </li>
    {{#each messages}}
      {{#if opponentMessage}}
        <li class="main-chat-messages-opponent-text">
          {{opponentMessage}}
          <div class="main-chat-messages-time">{{time}}</div>
        </li>
      {{else}}
        <li class="main-chat-messages-user-text">
          {{myMessage}}
          <img src="../../img/2checks.svg" class="two-checks" alt="two-checks">
          <div class="main-chat-messages-time">{{time}}</div>
        </li>
      {{/if}}
    {{/each}}    
  `
  return compile(template)(data)
};

export const createAddRemoveModalsTemplate = data => {
  const template = `
    {{#each modals}}
      <div class="modal remove-modal" id="{{modalId}}">
        <div class="modal-header">{{modalText}}</div>
        <div class="login-input login-input__modal-header">
          <div class="field-name">{{fieldName}}</div>
          <label>
            <input type="text" class="input-text" id="{{inputId}}">
          </label>
        </div>
        <button class="submit-button submit-button__modal-header" id="{{buttonId}}">{{buttonName}}</button>
      </div>
    {{/each}} 
  `
  return compile(template)(data)
};

export const createConfirmModalsTemplate = data => {
  const template = `
    <div class="modal remove-modal" id="modalDeleteUserConfirm">
      <div class="modal-header">
        Вы уверены, что хотите удалить пользователя {{name}}?
      </div>
      <div class="modal-buttons-container">
        <button class="submit-button submit-button-confirm" id="deleteUserButtonConfirm">УДАЛИТЬ</button>
        <button class="submit-button-cancel" id="deleteUserButtonCancel">ОТМЕНА</button>
      </div>
    </div>
  `
  return compile(template)(data)
};

export const createMainHeaderTemplate = data => {
  const template = `
    <nav class="main-right-block-header">
      <div class="main-right-block-header-left-block">
        <div class="left-block-avatar"></div>
        <div class="left-block-name">{{name}}</div>
      </div>
      <div class="three-dots-container">
        <img src="../img/3dots.svg" alt="3-dots" class="three-dots">
      </div>
    </nav>
  `
  return compile(template)(data)
};

export const createMainChatContainerTemplate = data => {
  const template = `
    <div class="main-chat-container">
      <ul class="main-chat-messages"></ul>
    </div>
  `
  return compile(template)(data)
};

export const createMainFooterTemplate  = data => {
  const template = `
    <div class="main-chat-footer">
      <button class="clip" id="clipButton">
        <img src="../img/clip.svg" alt="clip">
      </button>
      <input type="text" class="main-chat-footer-input" placeholder="Сообщение">
      <button class="main-chat-footer-submit-button">
      </button>
    </div>
  `
  return compile(template)(data)
};

export const createThreeDotsModalTemplate  = data => {
  const template = `
    <div class="modal-edit-user remove-modal">
      {{#each modals}}
        <div class="modal-edit-user-item" id="{{modalId}}">
          <button class="clip">
            <img src="{{iconSrc}}" alt="">
          </button>
          <div class="modal-edit-user-item-text">{{buttonName}}</div>
        </div>
      {{/each}}
    </div>
  `
  return compile(template)(data)
};

export const createClipModalTemplate = data => {
  const template = `
    <div class="modal-clip remove-modal">
      {{#each modals}}
        <div class="modal-edit-user-item" id="{{modalId}}">
          <button class="clip">
            <img src="{{iconSrc}}" alt="">
          </button>
          <div class="modal-edit-user-item-text">{{buttonName}}</div>
        </div>
      {{/each}}
    </div>
  `
  return compile(template)(data)
};

