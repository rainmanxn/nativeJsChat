import templator from "./templator.js";
const mountTemplate = (tag, template, data) => {
    const mainTag = document.querySelector(tag);
    mainTag.innerHTML = templator(template, data);
};
export default mountTemplate;
