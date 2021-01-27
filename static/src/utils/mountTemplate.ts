import templator from "./templator.js";

const mountTemplate = (tag: string, template: string, data?: object): void => {
  const mainTag: HTMLElement = document.querySelector(tag);
  mainTag.innerHTML = templator(template, data);
}

export default mountTemplate;
