import React from 'react'
import '../styles/message.css'

import { Avatar } from '@material-ui/core';

function Message() {
  return (
    <div className='message'>
      <Avatar/>
      <div className="message__info">
        <h4>
          Joker 
          <span className='message__timestamp'>time stamp</span>
        </h4>

        <p> This is the message</p>
      </div>
    </div>
  )
}

export default Message
