
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
    <div className="container-fluid">
      <div className="center">
        <SocketContext.Provider value={socket}>
          <ConversationComponent />
          <InputComponent onSubmit={sendMessage} />
        </SocketContext.Provider>
      </div>
    </div>
  );
}

export default ChatComponent;
