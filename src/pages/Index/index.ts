import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from '../../lib/block.js';
import { router } from '../../lib/Router/Router.js';

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
  }

  render(): string {
    return templator(template, this.props)
  }
}
