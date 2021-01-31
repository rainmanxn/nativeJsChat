import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from "../../utils/block.js";
import render from "../../utils/render.js";
class ErrorPage extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return templator(template);
    }
}
const errorPageContent = new ErrorPage();
render('body', errorPageContent);
