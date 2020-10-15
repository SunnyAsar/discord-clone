import React from 'react'
import '../styles/sidebarChannel.css'
import { setChannelInfo} from './appSlice'
import { useDispatch } from 'react-redux'

function SidebarChannel({id, channelName}) {
  const dispatch = useDispatch()
  return (
    <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName
    }))}>
      <h4>
        <span className='sidebarChannel__hash'>#</span>{channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel
