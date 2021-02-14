export const modalAvatarTemplate = `
  <div class="change-avatar-modal">
    <div class="modal-overlay" id="modalOverlay"></div>
    <form class="modal" id="modalForm">
      <div class="modal-header">Загрузите файл</div>
      <input id="image-file" type="file" class="modal-link-file" name="avatar"/>
      <label for="image-file" class="modal-link">Выберите файл</label>
      {{ELEMENT submitButton}}
    </form>  
  </div>
`;
