export default (template, context) => {
    return Handlebars.compile(template)(context);
};
function putElement(componentName) {
    return new window.Handlebars.SafeString(componentName);
}
window.Handlebars.registerHelper('ELEMENT', putElement);
