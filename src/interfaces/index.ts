export interface InputElement extends HTMLElement {
  name?: string,
  value?: string,
  type?: string,
  readOnly?: boolean
}

export interface FormDataType {
  email?: string,
  login?: string,
  first_name?: string,
  second_name?: string,
  phone?: string,
  password?: string,
  password_confirm?: string
}

export type KeyValueType = {[key: string]: string};
