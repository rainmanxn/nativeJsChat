import Fetch from "../lib/HTTP/index";
import { Router } from "../lib/Router/Router";
import { KeyValueType } from "../interfaces/index";

const BASE_AUTH_URL = `/auth`;
const SIGN_UP_URL = `${BASE_AUTH_URL}/signup`;
const SIGN_IN_URL = `${BASE_AUTH_URL}/signin`;
const LOG_OUT_URL = `${BASE_AUTH_URL}/logout`;
const GET_USER_DATA_URL = `${BASE_AUTH_URL}/user`;

export const router = new Router(".app");

export const signUp = (data: KeyValueType) => Fetch.post(SIGN_UP_URL, {
  body: JSON.stringify(data)
}).then((response) => {
  if (response.response === 'OK') {
    router.go('/main')
  }
});


export const signIn = (data: KeyValueType) => Fetch.post(SIGN_IN_URL, {
  body: JSON.stringify(data)
})

export const logOut = () => Fetch.post(LOG_OUT_URL);

export const getUserData = () => Fetch.get(GET_USER_DATA_URL)
