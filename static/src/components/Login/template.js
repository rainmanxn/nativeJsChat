export const template = `
    <main>
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
    </main>
`
