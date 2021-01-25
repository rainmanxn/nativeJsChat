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
}

export const createModalAvatarTemplate = data => {
  const template = `
    <div class="modal remove-field" id="modal">
      <div class="modal-header">Загрузите файл</div>
      <a href="#" class="modal-link">Выбрать файл на компьютере</a>
      <button class="submit-button submit-button__modal-overlay">ПОМЕНЯТЬ</button>
    </div>
  `
  return compile(template)(data)
}

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
}

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
}

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
}


// `<div class="modal remove-modal" id="modalAddUser">
//   <div class="modal-header">Добавить пользователя</div>
//   <div class="login-input login-input__modal-header">
//     <div class="field-name">Логин</div>
//     <label>
//       <input type="text" class="input-text" id="userNameAddUser">
//     </label>
//   </div>
//   <button class="submit-button submit-button__modal-header" id="addUserButton">ДОБАВИТЬ</button>
// </div>`