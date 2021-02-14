import Fetch from "../lib/HTTP/index.js";
import { BASE_AUTH_URL } from "../constants/baseUrl.js";
import { router } from "../lib/Router/Router.js";
const SIGN_UP_URL = `${BASE_AUTH_URL}/signup`;
const SIGN_IN_URL = `${BASE_AUTH_URL}/signin`;
const LOG_OUT_URL = `${BASE_AUTH_URL}/logout`;
const GET_USER_DATA_URL = `${BASE_AUTH_URL}/user`;
export const signUp = (data) => Fetch.post(SIGN_UP_URL, {
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(data)
}).then((response) => {
    if (response.response === 'OK') {
        router.go('/main');
    }
});
export const signIn = (data) => Fetch.post(SIGN_IN_URL, {
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(data)
}).then((response) => {
    if (response.response === 'OK') {
        router.go('/main');
    }
});
export const logOut = () => Fetch.post(LOG_OUT_URL, {
    headers: {
        'content-type': 'application/json',
    },
}).then((response) => {
    if (response.response === 'OK') {
        router.go('/login');
    }
});
export const getUserData = () => Fetch.get(GET_USER_DATA_URL);
