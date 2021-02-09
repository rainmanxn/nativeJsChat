export const { compile } = window.Handlebars;

export default (template: string, context?: any): string => {
  return compile(template)(context);
};
