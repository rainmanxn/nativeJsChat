export const template = `
  <div class="login-container">
    <div class="login-block">
      <h1 class="login-header">ВХОД</h1>
      <form class="register-form" id="submit">
        {{#each fields}}
          <div class="login-input">
            <span class="field-name">{{fieldName}}</span>
            <label>
              <input type="{{inputType}}" class="input-text" name="{{inputName}}">
            </label>
          </div>
        {{/each}}
        <button type="submit" class="submit-button submit-button__login">АВТОРИЗОВАТЬСЯ</button>
      </form>
      <a href="register.html" class="login-href">Нет аккаунта?</a>
    </div>
  </div>
`;
