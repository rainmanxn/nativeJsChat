import { template } from './template.js';
import templator from "../../utils/templator.js";
import render from "../../utils/render.js";
import { TemplatePropsContext } from "../../types/index.js";
import Block from '../../lib/block.js';

class ErrorPage extends Block {
  constructor(props?: TemplatePropsContext) {
    super('div', props);
  }
  render(): string {
    return templator(template)
  }
}

render('body', new ErrorPage())
