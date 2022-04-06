import { useState, useContext } from 'react';
import './ConversationComponent.css';
import {SocketContext} from '../../SocketContext';


function ConversationComponent() {
  const socket = useContext(SocketContext)
  const [conversation, setConversation] = useState([]);

  // receive a message from the server
  socket.addEventListener("chat message", ( data ) => {
    console.log(data)
    //setConversation((conversation) => [...conversation, data])
    //console.log(conversation)
  });

  return (
    <ul>
        {conversation.map((message, index) => {
          return ( <li key={index}>{message}</li>)
        })}
    
    </ul>
    
  );
}

export default ConversationComponent;