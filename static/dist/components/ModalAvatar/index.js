import { modalAvatarTemplate } from './template.js';
import templator from "../../utils/templator.js";
import Block from '../../lib/block.js';
import { SUBMIT_BUTTON_MODAL_AVATAR } from "../../constants/buttonClasses.js";
import { Button } from "../Button/index.js";
import { changeUserAvatar } from "../../api/userProfile.js";
const sumbitButtonProps = {
    type: 'submit',
    className: SUBMIT_BUTTON_MODAL_AVATAR,
    text: 'ПОМЕНЯТЬ',
    id: 'modalButton'
};
const SubmitButton = new Button(sumbitButtonProps);
const modalData = {
    submitButton: SubmitButton.getContent().innerHTML
};
export class ModalAvatar extends Block {
    constructor() {
        super('div', modalData);
    }
    mount() {
        const modalButton = this._element.querySelector('#modalForm');
        const modalOverlay = this._element.querySelector('#modalOverlay');
        modalButton && modalButton.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = modalButton && new FormData(modalButton);
            changeUserAvatar(formData);
            this.hide();
        });
        modalOverlay && modalOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            this.hide();
        });
    }
    render() {
        return templator(modalAvatarTemplate, this.props);
    }
}
