import { buttonTemplate } from './template';
import templator from "../../utils/templator";
import Block from '../../lib/block';
export class Button extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        return templator(buttonTemplate, this.props);
    }
}
