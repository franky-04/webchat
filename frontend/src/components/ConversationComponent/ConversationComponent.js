import { useState, useContext, useEffect } from 'react'
import './ConversationComponent.css'
import {SocketContext} from '../../SocketContext'
import MessageComponent from '../MessageComponent/MessageComponent'

function ConversationComponent() {
  const socket = useContext(SocketContext)
  const [conversation, setConversation] = useState([])

  const custom_push = ( data ) => {
    // console.log(data)
    setConversation((conversation) => [...conversation, data])
    console.log(conversation)
  }
  // receive a message from the server
  useEffect(() => {
    socket.addEventListener("chat message", custom_push)
    return () => {
      socket.removeEventListener("chat message", custom_push)
    }
  }, [conversation])
  

  return (
    <div >
        {conversation.map((message, index) => {
          return ( <MessageComponent key={index} message={message} />)
        })}
    </div>
   
    
  );
}

export default ConversationComponent