export const { compile } = window.Handlebars;

export default (template: string, context?: any): string => {
  return compile(template)(context);
};

function putElement(componentName: string) {
  return new window.Handlebars.SafeString(componentName);
}

window.Handlebars.registerHelper('ELEMENT', putElement);
