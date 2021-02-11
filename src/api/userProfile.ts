import Fetch from "../lib/HTTP/index.js";
import { BASE_USER_URL } from "../constants/baseUrl.js";
import { KeyValueType } from "../interfaces/index.js";
import {router} from "../lib/Router/Router.js";

const PUT_USER_PROFILE = `${BASE_USER_URL}/profile`;

export const changeUserInfo = (data: KeyValueType) => Fetch.put(PUT_USER_PROFILE, {
  body: JSON.stringify(data)
}).then((response: any) => {
  if (response.response === 'OK') {
    router.go('/main')
  }
})
