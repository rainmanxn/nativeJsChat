import { buttonTemplate } from './template.js';
import templator from "../../utils/templator.js";
import Block from 'lib/block.js';
export class Button extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return templator(buttonTemplate, this.props);
    }
}
