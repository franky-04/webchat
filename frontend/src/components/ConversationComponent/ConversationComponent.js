import { useState, useContext, useRef,useEffect } from 'react'
import './ConversationComponent.css'
import {SocketContext} from '../../SocketContext'
import MessageComponent from '../MessageComponent/MessageComponent'

function ConversationComponent() {
  const socket = useContext(SocketContext)
  const [conversation, setConversation] = useState([])
  const messagesRef = useRef(null);

  const custom_push = ( data ) => {
    // console.log(data)
    setConversation((conversation) => [...conversation, data])
  }

  // receive a message from the server
  useEffect(() => {
    socket.addEventListener("chat message", custom_push)
    return () => {
      socket.removeEventListener("chat message", custom_push)
    }
    // comment to prevent eslint warning about dependencies from socket and conversation
    // "right" solution lead to undesired behavior (continuous addeventlistener and remove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //reagisce ai cambiamenti di conversation
  useEffect(() => {
    messagesRef.current?.scrollIntoView({
      behavior: "smooth", 
      block: "end",
      inline:"nearest"
    })
  }, [conversation])
  

  return (
    <div>
        {conversation.map((message, index) => {
          return ( <MessageComponent key={index} message={message} />)
        })}
        <div ref={messagesRef}></div>
    </div>
   
    
  );

}



export default ConversationComponent