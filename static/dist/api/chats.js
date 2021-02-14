import Fetch from "../lib/HTTP/index.js";
import { BASE_CHATS_URL } from "../constants/baseUrl.js";
const USER_CHAT = `${BASE_CHATS_URL}/users`;
export const getChats = () => Fetch.get(BASE_CHATS_URL, {
    headers: {
        'content-type': 'application/json',
    }
});
export const createChat = (data) => Fetch.post(BASE_CHATS_URL, {
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        title: data
    })
});
export const addUserToChat = (data, chatId) => Fetch.put(USER_CHAT, {
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        users: [
            data
        ],
        chatId
    })
});
export const removeUserFromChat = (data, chatId) => Fetch.delete(USER_CHAT, {
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        users: [
            data
        ],
        chatId
    })
});
