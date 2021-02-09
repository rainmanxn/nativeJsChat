export const template = `
  <div class="modal-overlay remove-field" id="modalOverlay"></div>
  <div class="modal remove-field" id="modal">
    <div class="modal-header">Загрузите файл</div>
    <a href="#" class="modal-link">Выбрать файл на компьютере</a>
    <button class="submit-button submit-button__modal-overlay">ПОМЕНЯТЬ</button>
  </div>
  
  <div class="profile-container">
    <div class="profile-left-side">
      <div class="back-button">
        <div class="arrow"></div>
      </div>
    </div>
    
    <div class="profile-right-side">
      <div class="profile-block">
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
        
        <form id="submit" class="profile-info-block">
        
            <div class="profile-info-item">
              <span class="profile-info-field-name">Почта</span>
              <span class="error-message error-profile-message {{emailError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="email" class="profile-info-field-input" name="email" value="{{emailValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Логин</span>
              <span class="error-message error-profile-message {{loginError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="text" class="profile-info-field-input" name="login" value="{{loginValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Имя</span>
              <span class="error-message error-profile-message {{firstNameError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="text" class="profile-info-field-input" name="firstName" value="{{firstNameValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Фамилия</span>
              <span class="error-message error-profile-message {{secondNameError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="text" class="profile-info-field-input" name="secondName" value="{{secondNameValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Имя в чате</span>
              <span class="error-message error-profile-message {{displayNameError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="text" class="profile-info-field-input" name="displayName" value="{{displayNameValue}}">
              </label>
            </div>
                        
            <div class="profile-info-item">
              <span class="profile-info-field-name">Телефон</span>
              <span class="error-message error-profile-message {{phoneError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="tel" class="profile-info-field-input" name="phone" value="{{phoneValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Старый пароль</span>
              <span class="error-message error-profile-message {{oldPasswordError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="password" class="profile-info-field-input" name="oldPassword" value="{{oldPasswordValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Новый пароль</span>
              <span class="error-message error-profile-message {{newPasswordError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="password" class="profile-info-field-input" name="password" value="{{passwordValue}}">
              </label>
            </div>
            
            <div class="profile-info-item">
              <span class="profile-info-field-name">Повторите новый пароль</span>
              <span class="error-message error-profile-message {{newPasswordConfirmError}}" id="loginError">Укажите валидное значение</span>
              <label>
                <input type="password" class="profile-info-field-input" name="passwordConfirm" value="{{passwordConfirmValue}}">
              </label>
            </div>

          <div class="profile-info-block">
            <div id="editBlock"></div>
          </div>
        </form>
      </div>
    </div>
  </div>  
`
