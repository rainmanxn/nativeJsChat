export const template = `
    <div class="login-container">
    <div class="register-block">
      <h1 class="login-header">РЕГИСТРАЦИЯ</h1>
      <form class="register-form" id="submit">
      
          <div class="login-input">
            <span class="field-name">Почта</span>
            <label>
              <input type="email" class="input-text" name="email" value="{{emailValue}}">
            </label>
          </div>
          <span class="error-message {{emailError}}" id="loginError">Укажите валидный email</span>
          
          <div class="login-input">
            <span class="field-name">Логин</span>
            <label>
              <input type="text" class="input-text" name="login" value="{{loginValue}}">
            </label>
          </div>
          <span class="error-message {{loginError}}" id="loginError">Логин должен быть длиннее 6 символов</span>
          
          <div class="login-input">
            <span class="field-name">Имя</span>
            <label>
              <input type="text" class="input-text" name="firstName" value="{{firstNameValue}}">
            </label>
          </div>
          <span class="error-message {{firstNameError}}" id="loginError">Укажите валидное имя</span>
          
          <div class="login-input">
            <span class="field-name">Фамилия</span>
            <label>
              <input type="text" class="input-text" name="secondName" value="{{secondNameValue}}">
            </label>
          </div>
          <span class="error-message {{secondNameError}}" id="loginError">Укажите валидную фамилию</span>
          
          <div class="login-input">
            <span class="field-name">Телефон</span>
            <label>
              <input type="tel" class="input-text" name="phone" value="{{phoneValue}}">
            </label>
          </div>
          <span class="error-message {{phoneError}}" id="loginError">Укажите валидный номер телефона</span>
          
          <div class="login-input">
            <span class="field-name">Пароль</span>
            <label>
              <input type="password" class="input-text" name="password" value="{{passwordValue}}">
            </label>
          </div>
          <span class="error-message {{passwordError}}" id="loginError">Пароль должен быть не меньше 6 символов, 
          содержать не менее 1 строчной, заглавной буквы и спецсимвол</span>
          
          <div class="login-input">
            <span class="field-name">Пароль(еще раз)</span>
            <label>
              <input type="password" class="input-text" name="passwordConfirm" value="{{passwordConfirmValue}}">
            </label>
          </div>
          <span class="error-message {{passwordConfirmError}}" id="loginError">Пароли не совпадают</span>
          {{ELEMENT buttonReg}}
      </form>
      <a class="login-href">Войти</a>
    </div>
  </div>
`