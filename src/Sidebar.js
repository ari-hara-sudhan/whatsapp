import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOptions from './SidebarOptions';
import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [rooms,setRooms]=useState([])
    const [{user},dispatch]=useStateValue()

    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({id:doc.id,room:doc.data()})))
        })
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar
               src={user?.photoURL}
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
                <SidebarOptions addchat/>
            {
                rooms.map(({room,id})=>(
                    <SidebarOptions
                    channel= {room.channel} 
                    id={id} 
                    />
                ))
            }
           
            </div>
        </div>
    )
}

export default Sidebar
