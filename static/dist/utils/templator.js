export const { compile } = window.Handlebars;
export default (template, context) => {
    return compile(template)(context);
};
