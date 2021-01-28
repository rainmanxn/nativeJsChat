import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";

class ErrorPage extends Block {
  constructor(props?) {
    super('div', props);
  }
  render(): string {
    return templator(template)
  }
}

const errorPageContent: Block = new ErrorPage();
render('body', errorPageContent)
