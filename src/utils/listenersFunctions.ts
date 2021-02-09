import { InputElement } from "../interfaces/index.js";
import validators from "./validators/index.js";
import { TemplatePropsContext } from "../types/index.js";
import setProps from "./setProps.js";
import Block from "../lib/block.js";

export const validationFunction = (element: InputElement[], component: Block) => {
  element
    .forEach((el: InputElement): void => {
      el && el.addEventListener('blur', () => {
        const { value, name } = el;
        if (name === 'passwordConfirm') {
          if (value === component.props.passwordValue) {
            setProps(component, false, name, value)
          } else {
            setProps(component, true, name, value)
          }
        } else {
          if (name && validators[name](value)) {
            setProps(component, false, name, value)
          } else {
            setProps(component, true, name, value)
          }
        }
      });
    })
}

export const submitFunction = (element: HTMLElement, props: TemplatePropsContext) => {
  element.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const { loginValue, passwordValue } = props;
    const isValid = validators.login(loginValue) && validators.password(passwordValue)
    isValid && console.log({ loginValue, passwordValue })
  })
}

export const submitRegisterFunction = (element: HTMLElement, props: TemplatePropsContext) => {
  element.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const {
      emailValue,
      loginValue,
      firstNameValue,
      secondNameValue,
      phoneValue,
      passwordValue,
      passwordConfirmValue
    } = props;

    const isValid =
      validators.login(loginValue)
      && validators.email(emailValue)
      && validators.firstName(firstNameValue)
      && validators.secondName(secondNameValue)
      && validators.phone(phoneValue)
      && validators.password(passwordValue)
      && validators.passwordConfirm(passwordConfirmValue)
    isValid && console.log({
      emailValue,
      loginValue,
      firstNameValue,
      secondNameValue,
      phoneValue,
      passwordValue,
      passwordConfirmValue
    })
  })
}

export const submitEditFunction = (element: HTMLElement, props: TemplatePropsContext) => {
  element.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const {
      emailValue,
      loginValue,
      firstNameValue,
      secondNameValue,
      displayNameValue,
      phoneValue,
      oldPasswordValue,
      passwordValue,
      passwordConfirmValue
    } = props;

    const isValid =
      validators.login(loginValue)
      && validators.email(emailValue)
      && validators.firstName(firstNameValue)
      && validators.secondName(secondNameValue)
      && validators.secondName(displayNameValue)
      && validators.phone(phoneValue)
      && validators.password(oldPasswordValue)
      && validators.password(passwordValue)
      && validators.passwordConfirm(passwordConfirmValue)
    isValid && console.log({
      emailValue,
      loginValue,
      firstNameValue,
      secondNameValue,
      displayNameValue,
      phoneValue,
      oldPasswordValue,
      passwordValue,
      passwordConfirmValue
    })
  })
}