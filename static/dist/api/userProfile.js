import Fetch from "../lib/HTTP/index";
import { Router } from "../lib/Router/Router";
const BASE_USER_URL = `/user`;
const PUT_USER_PROFILE = `${BASE_USER_URL}/profile`;
const PUT_USER_PASSWORD = `${BASE_USER_URL}/password`;
const PUT_USER_AVATAR = `${BASE_USER_URL}/profile/avatar`;
const router = new Router(".app");
export const changeUserInfo = (data) => Fetch.put(PUT_USER_PROFILE, {
    body: JSON.stringify(data)
}).then((response) => {
    if (response.response === 'OK') {
        router.go('/profile');
    }
});
export const changeUserPassword = (data) => Fetch.put(PUT_USER_PASSWORD, {
    body: JSON.stringify(data)
}).then((response) => {
    if (response.response === 'OK') {
        router.go('/profile');
    }
});
export const changeUserAvatar = (data) => Fetch.put(PUT_USER_AVATAR, {
    body: data,
});
