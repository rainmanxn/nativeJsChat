import { template } from './template';
import templator from '../../utils/templator';
import { submitFunction, validationFunction } from '../../utils/listenersFunctions';
import { SUBMIT_BUTTON } from '../../constants/buttonClasses';
import { Button } from '../../components/Button/index';
import Block from '../../lib/block';
import { Router } from '../../lib/Router/Router';
import { signIn } from '../../api/authorization';
import '../../styles.scss';
const router = new Router('.app');
const buttonProps = {
    type: 'submit',
    className: SUBMIT_BUTTON,
    text: 'АВТОРИЗОВАТЬСЯ'
};
const SubmitButton = new Button(buttonProps);
const data = {
    loginValue: '',
    passwordValue: '',
    loginError: '',
    passwordError: '',
    handleError: '',
    errorMessage: '',
    buttonSignUp: SubmitButton.getContent().innerHTML
};
export class Login extends Block {
    constructor() {
        super('div', data);
    }
    mount() {
        const inputElements = Array.from(this.element.querySelectorAll('.input-text'));
        const submitButton = document.querySelector('form');
        validationFunction(inputElements, this);
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('submit', (event) => {
            event.preventDefault();
            const { isValid, login, password } = submitButton && submitFunction(this.props);
            isValid && signIn({
                login,
                password
            }).then((response) => {
                if (response.response === 'OK') {
                    router.go('/main');
                }
                else {
                    this.setProps({
                        handleError: 'error-message__show',
                        errorMessage: (JSON.parse(response.response)).reason
                    });
                }
            });
        });
        const linkButton = this._element.querySelector('.login-href');
        linkButton && linkButton.addEventListener('click', () => {
            router.go('/register');
        });
    }
    render() {
        return templator(template, this.props);
    }
}
