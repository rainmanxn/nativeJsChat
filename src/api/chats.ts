import Fetch from "../lib/HTTP/index.js";

const BASE_CHATS_URL = `/chats`;
const USER_CHAT = `${BASE_CHATS_URL}/users`;

export const getChats = () => Fetch.get(BASE_CHATS_URL)

export const createChat = (data: any) => Fetch.post(BASE_CHATS_URL, {
  body: JSON.stringify({
    title: data
  })
})

export const addUserToChat = (data: number, chatId: number) => Fetch.put(USER_CHAT, {
  body: JSON.stringify({
    users: [
      data
    ],
    chatId
  })
})

export const removeUserFromChat = (data: number, chatId: number) => Fetch.delete(USER_CHAT, {
  body: JSON.stringify({
    users: [
      data
    ],
    chatId
  })
})