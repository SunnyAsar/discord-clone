import React from 'react'
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

function Sidebar() {
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
          <AddIcon className='sidebar__addChannel'/>
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
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
        <Avatar src='https://image.winudf.com/v2/image/Y29tLndiLmdvb2cuYmF0bWFuLmJyYXdsZXIyMDEzX2hncXI1dWhs/icon.png?w=170&fakeurl=1'/>

        <div className="sidebar__profileInfo">
          <h3>@Joker</h3>
          <p>Id place </p>
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
