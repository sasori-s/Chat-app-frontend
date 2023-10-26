import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

export default function ChatArea() {
  return (
    <div className='chat-area'>
        <div className="chat-header"></div>
        <div className="messages">
            <Message text="Hi, How are you?" sent/>
            <Message text="Alhamdulillah " received/>
        </div>  
        <MessageInput/>   
    </div>
  )
}
