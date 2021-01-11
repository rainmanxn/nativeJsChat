let login;
let password;
const data = {}

const inputUserName = document.getElementById('userName');
const inputUserPassword = document.getElementById('password');
const submitButton = document.getElementById('submit');

inputUserName.addEventListener('input', () => {
  login = inputUserName.value;
  data.login = login;
});

inputUserPassword.addEventListener('input', () => {
  password = inputUserPassword.value;
  data.password = password;
})

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(data)
})
