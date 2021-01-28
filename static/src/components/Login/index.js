import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
const data = {
    fields: [
        {
            fieldName: 'Логин',
            inputType: 'text',
            inputName: 'login'
        },
        {
            fieldName: 'Пароль',
            inputType: 'password',
            inputName: 'password'
        }
    ]
};
class Login extends Block {
    constructor(props) {
        super('main', props);
    }
    render() {
        return templator(template, this.props);
    }
}
render('body', new Login(data));
const inputElements = Array.from(document.querySelectorAll('.input-text'));
const formData = inputElements
    .reduce((acc, el) => {
    el && el.addEventListener('input', () => {
        const { name, value } = el;
        acc[name] = value;
    });
    return acc;
}, {});
const submitButton = document.querySelector('form');
submitButton && submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
});
