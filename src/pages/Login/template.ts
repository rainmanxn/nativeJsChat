export const template = `
  <div class="login-container">
    <div class="login-block">
      <h1 class="login-header">ВХОД</h1>
      <form class="register-form" id="submit">
          <div class="login-input">
            <span class="field-name">Логин</span>
            <label>
              <input type="text" class="input-text" name="login" value="{{loginValue}}">
            </label>
          </div>
          <span class="error-message {{loginError}}" id="loginError">Укажите валидный email</span>
          <div class="login-input">
            <span class="field-name">Пароль</span>
            <label>
              <input type="password" class="input-text" name="password"  value="{{passwordValue}}">
            </label>
          </div>
          <span class="error-message {{passwordError}}" id="passwordError">Пароль должен быть не меньше 6 символов, 
          содержать не менее 1 строчной, заглавной буквы и спецсимвол</span>
          {{SLOT buttonSignUp }}
      </form>
      <a class="login-href">Нет аккаунта?</a>
    </div>
  </div>
`

// function createSlot(name: string): string {
//   const $slot = document.createElement('div');
//   $slot.setAttribute('data-slot', name);
//   return $slot.outerHTML;
// }

function slot(componentName: string) {
  return new window.Handlebars.SafeString(componentName);
}

window.Handlebars.registerHelper('SLOT', slot);

