import { buttonTemplate } from './template';
import templator from '../../utils/templator';
import Block from '../../lib/block';

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
    return templator(buttonTemplate, this.props);
  }
}
