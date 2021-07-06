import React from 'react'
import "./Chat.css"
import { Avatar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar/>
            <div className="chat__center">
                <h4>channel</h4>
                <h5>Timestamp</h5>
            </div>
            <div className="chat__icon">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>


            </div>
         

            </div>
            <div className="chat__body">
                hello

            </div>
        
        </div>
    )
}

export default Chat
