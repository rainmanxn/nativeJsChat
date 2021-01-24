console.log('templator here!!')
console.log(window.Handlebars)

const { compile, registerHelper } = window.Handlebars;

const tmpl = `
    <div>
        {{data}}
    </div>
`;
const template = compile(tmpl);

const chats = template({
  data: 'Hello try here'
});
const tpl = document.querySelector('.tpl');
// tpl.innerHTML = chats
tpl.append(chats)

const tmpl2 = `
    <div>
        {{data}} {{loud kick}}
    </div>
`;
// registerHelper('loud', function (aString) {
//   return aString.toUpperCase()
// })
window.Handlebars.registerHelper('loud', function (aString) {
  return aString.toUpperCase()
})
const template2 = compile(tmpl2)
  const chats2 = template2({
    data: 'Boy',
    kick: 'underrain'
  })


console.log('chats', chats)
console.log('chats2', chats2)