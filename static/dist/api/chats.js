import Fetch from '../lib/HTTP/index';
import { WebSocketUtil } from '../lib/WebSocketUtil';
const BASE_CHATS_URL = '/chats';
const USER_CHAT = `${BASE_CHATS_URL}/users`;
const CHAT_TOKEN_ENDPOINT = `${BASE_CHATS_URL}/token`;
export const getChats = () => Fetch.get(BASE_CHATS_URL);
export const createChat = (data) => Fetch.post(BASE_CHATS_URL, {
    body: JSON.stringify({
        title: data
    })
});
export const addUserToChat = (data, chatId) => Fetch.put(USER_CHAT, {
    body: JSON.stringify({
        users: [
            data
        ],
        chatId
    })
});
export const removeUserFromChat = (data, chatId) => Fetch.delete(USER_CHAT, {
    body: JSON.stringify({
        users: [
            data
        ],
        chatId
    })
});
export const getChatToken = (chatId) => Fetch.post(`${CHAT_TOKEN_ENDPOINT}/${chatId}`);
export const initChat = (chatId, userId, token, onMessage) => {
    WebSocketUtil.instance = new WebSocketUtil({ chatId, userId, token, onMessage });
    WebSocketUtil.instance.init();
};
export const sendMessage = (content) => { var _a; return (_a = WebSocketUtil.instance) === null || _a === void 0 ? void 0 : _a.sendMessage({ content, type: 'message' }); };
