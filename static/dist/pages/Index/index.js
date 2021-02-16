import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from '../../lib/block.js';
import { Router } from '../../lib/Router/Router.js';
const router = new Router(".app");
export class Page extends Block {
    constructor() {
        super('div');
    }
    mount() {
        const loginButton = this._element.querySelector('.loginButton');
        loginButton && loginButton.addEventListener('click', () => {
            router.go('/login');
        });
        const registerButton = this._element.querySelector('.registerButton');
        registerButton && registerButton.addEventListener('click', () => {
            router.go('/register');
        });
        const profileButton = this._element.querySelector('.profileButton');
        profileButton && profileButton.addEventListener('click', () => {
            router.go('/profile');
        });
        const mainButton = this._element.querySelector('.mainButton');
        mainButton && mainButton.addEventListener('click', () => {
            router.go('/main');
        });
        const error404Button = this._element.querySelector('.error-404-Button');
        error404Button && error404Button.addEventListener('click', () => {
            router.go('/404');
        });
        const error500Button = this._element.querySelector('.error-500-Button');
        error500Button && error500Button.addEventListener('click', () => {
            router.go('/500');
        });
    }
    render() {
        return templator(template, this.props);
    }
}
