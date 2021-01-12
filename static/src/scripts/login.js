const data = Array.from(document.querySelectorAll('.input-text'))
  .reduce((acc, el) => {
    el && el.addEventListener('input', () => {
      const { type, value } = el;
      acc[type] = value;
    });
    return acc
  }, {})
const submitButton = document.querySelector('form');


submitButton && submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(data)
})
