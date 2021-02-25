import { template } from './template';
import templator from "../../utils/templator";
import Block from '../../lib/block';

export class Error500Page extends Block {
  constructor() {
    super('div');
  }
  render(): string {
    return templator(template)
  }
}
