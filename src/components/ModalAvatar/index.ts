//toDo Обработать отправку пустого файла

import { modalAvatarTemplate } from './template';
import templator from "../../utils/templator";
import Block from '../../lib/block';
import { SUBMIT_BUTTON_MODAL_AVATAR } from "../../constants/buttonClasses";
import {Button} from "../Button/index";
import { changeUserAvatar } from "../../api/userProfile";

const sumbitButtonProps = {
  type: 'submit',
  className: SUBMIT_BUTTON_MODAL_AVATAR,
  text: 'ПОМЕНЯТЬ',
  id: 'modalButton'
};

const SubmitButton = new Button(sumbitButtonProps);

const modalData = {
  submitButton: SubmitButton.getContent().innerHTML
}

export class ModalAvatar extends Block {
  constructor() {
    super('div', modalData);
  }

  mount() {
    const modalButton: HTMLFormElement | null = this._element.querySelector('#modalForm');
    const modalOverlay: HTMLElement | null = this._element.querySelector('#modalOverlay');
    modalButton && modalButton.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = modalButton && new FormData(modalButton);
      changeUserAvatar(formData);
      this.hide();

    })
    modalOverlay && modalOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      this.hide();
    })

  }

  render(): string {
    return templator(modalAvatarTemplate, this.props)
  }
}
