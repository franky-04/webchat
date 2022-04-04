
import ConversationComponent from '../ConversationComponent/ConversationComponent';
import InputComponent from '../InputComponent/InputComponent';
import './ChatComponent.css';
import {io} from 'socket.io-client';

function ChatComponent() {

  const socket = io('ws://sanchochat-backend.herokuapp.com/');

  function sendMessage(event) {
    event.preventDefault()
    socket.emit("chat message", event.target.message.value)
    console.log("submit eseguito: " + event.target.message.value)
  }

  // receive a message from the server
  socket.addEventListener("chat message", ( data ) => {
    console.log(data)
  });

  return (
    <div>
        <h1>ChatComponent</h1>
        <ConversationComponent />
        <InputComponent onSubmit={sendMessage} />
    </div>
  );
}

export default ChatComponent;
