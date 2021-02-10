export const { compile } = window.Handlebars;
export default (template, context) => {
    return compile(template)(context);
};
function putElement(componentName) {
    return new window.Handlebars.SafeString(componentName);
}
window.Handlebars.registerHelper('ELEMENT', putElement);
