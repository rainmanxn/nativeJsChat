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
      router.go('/login')
    })
  }

  render(): string {
    return templator(template, this.props)
  }
}
