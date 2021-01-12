const inputElements = Array.from(document.querySelectorAll('.input-text'))
const data = inputElements
  .reduce((acc, el) => {
    el && el.addEventListener('input', () => {
      const { name, value } = el;
      acc[name] = value;
    });
    return acc
  }, {})

const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('errorMessage');

submitButton && submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  const { password, password_confirm } = data;
  if (password !== password_confirm) {
    inputElements.forEach((element) => {
      const { name } = element;
      if (name === 'password' || name === 'password_confirm') {
        element.classList.add('incorrect');
      }
    })
    errorMessage && errorMessage.classList.add('error-message__show');
  }
  console.log(data)
})
