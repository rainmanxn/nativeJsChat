import { template } from './template.js';
import templator from "../../utils/templator.js";

const mainTag: HTMLElement = document.querySelector('body');
mainTag.innerHTML = templator(template);