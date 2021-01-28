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
        
        <form id="editPassword" class="profile-info-block profile-info-block__edit-password  hide-field">
          {{#each passwordFields}}
            <div class="profile-info-item">
              <div class="profile-info-field-name">{{fieldName}}</div>
              <label>
                <input type="{{inputType}}" class="profile-info-field-input" name="{{inputName}}" value="{{inputValue}}">
              </label>
            </div>
          {{/each}}
          <button type="submit" id="savePasswordButton" class="submit-button submit-button__edit-password">СОХРАНИТЬ</button>
        </form>
        
      </div>
    </div>
  </div>  
`;
