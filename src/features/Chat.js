import React from 'react'
import '../styles/chat.css'
import ChatHeader from './ChatHeader'

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader/>

      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize='large'/>
        <form>
          <input type="text" placeholder='message here...'/>
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
