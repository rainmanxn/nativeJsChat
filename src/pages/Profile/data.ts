// import { EDIT_BUTTON } from "../../constants/buttonClasses";
// import { Button } from "../../components/Button/index";
// import { getUserData } from "../../api/authorization";
//
// const editButtonProps = {
//   type: 'submit',
//   className: EDIT_BUTTON,
//   text: 'Изменить данные',
//   id: 'editButton'
// };
//
// const exitButtonProps = {
//   type: 'button',
//   className: EDIT_BUTTON,
//   text: 'Выйти',
//   id: 'exitButton'
// };
//
// const EditButton = new Button(editButtonProps);
// const ExitButton = new Button(exitButtonProps);
//
// // const data = await getUserData();
// getUserData().then((resp: any) => {
//   console.log('resp', resp.response)
// })
// // console.log('data', data)
//
// export const profileData = {
//   srcImg: './dist/img/icon-man.svg',
//   userName: 'Иван',
//   emailValue: 'pochta@yandex.ru',
//   loginValue: 'ivanivanov',
//   firstNameValue: 'Иван',
//   secondNameValue: 'Иванов',
//   displayNameValue: 'Иваныч',
//   phoneValue: '+7 (909) 967 30 30',
//   oldPasswordValue: 'zzzXXX22##',
//   passwordValue: '',
//   passwordConfirmValue: '',
//   emailError: '',
//   loginError: '',
//   firstNameError: '',
//   lastNameError: '',
//   displayNameError: '',
//   phoneError: '',
//   oldPasswordError: '',
//   newPasswordError: '',
//   newPasswordConfirmError: '',
//   editButton: EditButton.getContent().innerHTML,
//   exitButton: ExitButton.getContent().innerHTML
// }
