import { template } from './template.js';
import templator from "../../utils/templator.js";
import mountTemplate from "../../utils/mountTemplate";

mountTemplate('body', template)

const mainTag: HTMLElement = document.querySelector('body');
mainTag.innerHTML = templator(template);
