import { template } from './template';
import templator from "../../utils/templator";
import Block from '../../lib/block';
export class Error404Page extends Block {
    constructor() {
        super('div');
    }
    render() {
        return templator(template);
    }
}
