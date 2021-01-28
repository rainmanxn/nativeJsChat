export const template = `
    <div class="login-container">
    <div class="register-block">
      <h1 class="login-header">РЕГИСТРАЦИЯ</h1>
      <form class="register-form" id="submit">
        {{#each fields}}
          <div class="login-input">
            <span class="field-name">{{fieldName}}</span>
            <label>
              <input type="{{inputType}}" class="input-text" name="{{inputName}}">
            </label>
          </div>
        {{/each}}
        <span class="error-message"">Пароли не совпадают</span>
        <button type="submit" class="submit-button submit-button__register">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
      <a href="login.html" class="login-href">Войти</a>
    </div>
  </div>
`
