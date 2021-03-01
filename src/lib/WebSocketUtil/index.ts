const WEBSOCKET_URL = 'wss://ya-praktikum.tech/ws';

export class WebSocketUtil {
  private _chatId: number;

  private _userId: number;

  private _token: string;

  private handleMessage: (data: any) => void;

  private socket: WebSocket;

  constructor({
	  chatId, userId, token, onMessage
  }:
      {chatId: number, userId: number, token: string, onMessage: (data: any)=> void}) {
	  this._chatId = chatId;
	  this._userId = userId;
	  this._token = token;
	  this.handleMessage = onMessage;
	  this.socket = new WebSocket(`${WEBSOCKET_URL}/chats/${this._userId}/${this._chatId}/${this._token}`);
  }

	static instance: WebSocketUtil;

	init = () => {
	  this.socket.addEventListener('open', () => {
	    console.log('Соединение установлено');
	    this.sendMessage({content: '0', type: 'get old'});
	  });
	  this.socket.addEventListener('close', event => {
	    if (event.wasClean) {
	      console.log('Соединение закрыто чисто');
	    } else {
	      console.log('Обрыв соединения');
	    }

	    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
	  });

	  this.socket.addEventListener('message', event => {
	    if (event.data) {
	      this.handleMessage(JSON.parse(event.data));
	    }

	    console.log('Получены данные', event.data);
	  });

	  this.socket.addEventListener('error', event => {
	    console.log('Ошибка', event);
	  });
	}

	sendMessage = ({ content, type }: {content: string, type: string}): void => {
	  console.log('content, type', content, type);
	  this.socket.send(JSON.stringify({
	    content,
	    type
	  }));
	}
}
