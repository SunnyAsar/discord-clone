import React, { useState, useEffect } from 'react'
import '../styles/sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';

import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'
import db, { auth } from './firebase';

function Sidebar() {
  const user = useSelector(selectUser)
  const [channels,setChannels] = useState([])

  useEffect(()=> {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc =>({
        id: doc.id,
        channel: doc.data()
      })))
    })
  },[])

  const handleAddChannel = () => {
    const channelName = prompt('Enter a channel Name')
    if (channelName) {
      db.collection('channels').add({
        channelName: channelName
      })
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h2>Discord</h2>
        <ExpandMoreIcon/>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon/>
            <h4> Text channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className='sidebar__addChannel'/>
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({id,channel}) => (
            <SidebarChannel  key={id} id={id} channelName={channel.channelName}/>
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon 
          className='sidebar__voiceIcon'
          font-size='large' />
          <div className="sidebar__voiceInfo">
            <h3> voice connected</h3>
            <p> stream</p>
          </div>
          
          <div className="sidebar__voiceIcons">
            <InfoIcon/>
            <CallIcon />
          </div>
      </div>

      <div className="sidebar__profile">
        <Avatar onClick={()=> auth.signOut()} src={user.photo}/>

        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0,5)} </p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon/>
          <HeadsetIcon/>
          <SettingsIcon/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
