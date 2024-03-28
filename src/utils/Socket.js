import io from 'socket.io-client';
import SOCKET from '../constants/socket';
// import ACTION_TYPE from '@constants/actions';

SOCKET_CHAT = 'http://54.190.192.105.9185';

class Socket {
  socket = null;
  isConnected = false;

  static socketInit(userId, dispatch) {
    if (!this.socket) {
      this.socket = io.connect(SOCKET_CHAT, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
      });
      this.socket.on(SOCKET.CONNECT, res => {
        this.isConnected = this.socket.connected;
        console.log('this.socket', this.socket, res);
      });

      this.socket.on(SOCKET.DISCONNECT, res => {
        console.log('disconnect', res);
        this.isConnected = this.socket.connected;
      });
      this.socket.on(SOCKET.RECONNECT, e => {
        console.log('reconnect', this.socket, e);
        this.isConnected = this.socket.connected;
      });

      this.socket.on(SOCKET.NEW_MESSAGE_READ, sendMessageData => {
        console.log('new-message-read', sendMessageData);
        let data = [];
        let newMassage = sendMessageData;
        newMassage.text = sendMessageData.message;
        if (userId === sendMessageData.senderID) {
          newMassage.user = {_id: 1};
        } else {
          newMassage.user = {_id: 2};
        }
        data.push(newMassage);
        dispatch({
          type: ACTION_TYPE.ADD_CHAT_ITEM,
          payload: data,
        });
      });
    }
  }

  static joinRoom(roomData) {
    this.socket.emit(SOCKET.JOIN, roomData);
  }

  static onSend(messageData) {
    console.log('messageData', messageData);
    this.socket.emit(SOCKET.NEW_MESSAGE, messageData);
  }

  static logoutUser() {
    this.socket.disconnect();
    this.socket = null;
    this.isConnected = false;
  }
}

export default Socket;
