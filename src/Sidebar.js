import React from 'react'
import "./Sidebar.css"
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOptions from './SidebarOptions';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar
                
                />
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                   </IconButton>
                   <IconButton>
                   <MoreVertIcon/>
                   </IconButton>
            
                 
            

                </div>

            </div>
            <div className="sidebar__input">
                <div className="sidebar__inputContainer">
                    <SearchIcon/>
                    <input placeholder="Enter the message..."/>
                    
                </div>

            </div>
            <div className="sidebar__options">
                <SidebarOptions
                channel="hari"
                timestamp="3 min ago"
                
                />

            </div>
        </div>
    )
}

export default Sidebar
