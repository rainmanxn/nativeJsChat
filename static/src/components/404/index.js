const { compile } = window.Handlebars;
import { template } from './template.js';

const errorTemplate = compile(template);

const mainTag = document.querySelector('body');
mainTag.innerHTML = errorTemplate();