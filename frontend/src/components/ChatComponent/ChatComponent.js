
import ConversationComponent from '../ConversationComponent/ConversationComponent';
import InputComponent from '../InputComponent/InputComponent';
import './ChatComponent.css';
import {io} from 'socket.io-client';
import { SocketContext } from '../../SocketContext';

function ChatComponent() {

  const socket = io('ws://sanchochat-backend.herokuapp.com/');

  function sendMessage(event) {
    event.preventDefault()
    socket.emit("chat message", event.target.message.value)
    console.log("submit eseguito: " + event.target.message.value)
  }

  return (
    <div>
        <h1>ChatComponent</h1>
        <SocketContext.Provider value={socket}>
          <ConversationComponent />
          <InputComponent onSubmit={sendMessage} />
        </SocketContext.Provider>
    </div>
  );
}

export default ChatComponent;
