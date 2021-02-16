import { template } from './template.js';
import templator from "../../utils/templator.js";
import Block from '../../lib/block.js';
export class Error404Page extends Block {
    constructor() {
        super('div');
    }
    render() {
        return templator(template);
    }
}
