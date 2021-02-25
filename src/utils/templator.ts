// import { compile } from 'handlebars';
// export const { compile } = Handlebars;

export default (template: string, context?: any): string => {
  return Handlebars.compile(template)(context);
};

function putElement(componentName: string) {
  return new window.Handlebars.SafeString(componentName);
}

window.Handlebars.registerHelper('ELEMENT', putElement);
