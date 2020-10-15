import React, { useState, useEffect } from 'react'
import '../styles/chat.css'
import ChatHeader from './ChatHeader'

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Message from './Message';
import { selectChannelId, selectChannelName } from './appSlice';
import { selectUser } from './userSlice'
import { useSelector } from 'react-redux'
import db from './firebase';
import firebase from 'firebase'


function Chat() {
  const channelId = useSelector(selectChannelId)
  const user = useSelector(selectUser)
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    if(channelId){
      db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
    }
  },[channelId])

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('')
  }

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>

      <div className="chat__messages">
        {messages.map(message=> (
          <Message timestamp={message.timestamp} user={message.user} message={message.message} />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize='large'/>
        <form onSubmit={sendMessage}>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`message here #${channelName}`} disabled={!channelId}/>
          <button className='chat__inputButton' type='submit'> send</button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize='large'/>
          <GifIcon fontSize='large'/>
          <EmojiEmotionsIcon fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default Chat
