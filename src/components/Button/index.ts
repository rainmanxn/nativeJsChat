import { buttonTemplate } from './template.js';
import templator from "../../utils/templator.js";
import Block from '../../lib/block.js';

type ButtonProps = {
  type: string,
  className: string,
  text?: string,
  id?: string
}

export class Button extends Block {
  constructor(props?: ButtonProps) {
    super('div', props);
  }
  render(): string {
    return templator(buttonTemplate, this.props)
  }
}
