
import ConversationComponent from '../ConversationComponent/ConversationComponent';
import InputComponent from '../InputComponent/InputComponent';
import './ChatComponent.css';
import {io} from 'socket.io-client';

function ChatComponent() {
  const socket = io('ws://sanchochat-backend.herokuapp.com/');
  function sendMessage(message) {
    //socket.emit("chat message", message)
    console.log("submit eseguito: " + message)
  }
  return (
    <div>
        <h1>ChatComponent</h1>
        <ConversationComponent />
        <InputComponent onSubmit={(m) => this.sendMessage(m)} />
    </div>
  );
}

export default ChatComponent;
