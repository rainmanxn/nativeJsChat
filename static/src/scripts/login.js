let login;
let password;

const inputUserName = document.getElementById('userName');
const inputUserPassword = document.getElementById('password');
const submitButton = document.getElementById('submit');

inputUserName.addEventListener('input', () => {
	login = inputUserName.value;
});

inputUserPassword.addEventListener('input', () => {
  password = inputUserPassword.value;
})

submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(`login: ${login}, password: ${password}`)
})


