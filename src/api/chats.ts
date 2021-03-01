import Fetch from '../lib/HTTP/index';
import { WebSocketUtil } from '../lib/WebSocketUtil';

const BASE_CHATS_URL = '/chats';
const USER_CHAT = `${BASE_CHATS_URL}/users`;
const CHAT_TOKEN_ENDPOINT = `${BASE_CHATS_URL}/token`;

export const getChats = () => Fetch.get(BASE_CHATS_URL);

export const createChat = (data: any) => Fetch.post(BASE_CHATS_URL, {
  body: JSON.stringify({
    title: data
  })
});

export const addUserToChat = (data: number, chatId: number) => Fetch.put(USER_CHAT, {
  body: JSON.stringify({
    users: [
      data
    ],
    chatId
  })
});

export const removeUserFromChat = (data: number, chatId: number) => Fetch.delete(USER_CHAT, {
  body: JSON.stringify({
    users: [
      data
    ],
    chatId
  })
});

export const getChatToken = (chatId: number): Promise<unknown> =>
  Fetch.post(`${CHAT_TOKEN_ENDPOINT}/${chatId}`);

export const initChat = (chatId: number, userId: number, token: string, onMessage: (data: any) => void): void => {
  WebSocketUtil.instance = new WebSocketUtil({chatId, userId, token, onMessage });
  WebSocketUtil.instance.init();
};

export const sendMessage = (content: string) => WebSocketUtil.instance?.sendMessage({content, type: 'message'});
