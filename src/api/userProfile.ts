import Fetch from "../lib/HTTP/index.js";
import { BASE_USER_URL } from "../constants/baseUrl.js";
import { KeyValueType } from "../interfaces/index.js";
import {router} from "../lib/Router/Router.js";

const PUT_USER_PROFILE = `${BASE_USER_URL}/profile`;
const PUT_USER_PASSWORD = `${BASE_USER_URL}/password`;
const PUT_USER_AVATAR = `${BASE_USER_URL}/profile/avatar`;

export const changeUserInfo = (data: KeyValueType) => Fetch.put(PUT_USER_PROFILE, {
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
}).then((response: any) => {
  if (response.response === 'OK') {
    router.go('/profile')
  }
})

export const changeUserPassword = (data: KeyValueType) => Fetch.put(PUT_USER_PASSWORD, {
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
}).then((response: any) => {
  if (response.response === 'OK') {
    router.go('/profile')
  }
})

export const changeUserAvatar = (data: any) => Fetch.put(PUT_USER_AVATAR, {
  body: data,
})
