export const template = `
  <main class="main-container">
    <div class="modal-overlay remove-field" id="modalOverlay"></div>
    <div class="main-left-block">
      <a href="profile.html" class="main-left-block-profile-link">
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
    </div>

    <div class="main-right-block">
      <div class="main-right-block-empty-text">Выберите чат, чтобы отправить сообщение</div>
      <div class="main-right-block-container remove-modal">
        
        <nav class="main-right-block-header">
          <div class="main-right-block-header-left-block">
            <div class="left-block-avatar"></div>
            <div class="left-block-name">{{headerName}}</div>
          </div>
          <div class="three-dots-container">
            <img src="../img/3dots.svg" alt="3-dots" class="three-dots">
          </div>
        </nav>
        
        <div class="main-chat-container">
          <ul class="main-chat-messages"></ul>
        </div>
        
        <div class="main-chat-footer">
          <button class="clip" id="clipButton">
            <img src="../img/clip.svg" alt="clip">
          </button>
          <input type="text" class="main-chat-footer-input" placeholder="Сообщение">
        </div>
        
        {{#each removeModals}}
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
        
        <div class="modal remove-modal" id="modalDeleteUserConfirm">
          <div class="modal-header">
            Вы уверены, что хотите удалить пользователя {{confirmName}}?
          </div>
          <div class="modal-buttons-container">
            <button class="submit-button submit-button-confirm" id="deleteUserButtonConfirm">УДАЛИТЬ</button>
            <button class="submit-button-cancel" id="deleteUserButtonCancel">ОТМЕНА</button>
          </div>
        </div>
        
        <div class="modal-edit-user remove-modal">
          {{#each threeDotsModals}}
            <div class="modal-edit-user-item" id="{{modalId}}">
              <button class="clip">
                <img src="{{iconSrc}}" alt="">
              </button>
              <div class="modal-edit-user-item-text">{{buttonName}}</div>
            </div>
          {{/each}}
        </div>
        
        <div class="modal-clip remove-modal">
          {{#each clipModals}}
            <div class="modal-edit-user-item" id="{{modalId}}">
              <button class="clip">
                <img src="{{iconSrc}}" alt="">
              </button>
              <div class="modal-edit-user-item-text">{{buttonName}}</div>
            </div>
          {{/each}}
        </div>
        
      </div>
    </div>

  </main>
`

export const messagesTemplate = `
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
          <img src="../../../static/dist/img/2checks.svg" class="two-checks" alt="two-checks">
          <div class="main-chat-messages-time">{{time}}</div>
        </li>
      {{/if}}
    {{/each}} 
`