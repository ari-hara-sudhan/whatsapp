import React, { useEffect, useState } from 'react'
import "./SidebarOptions.css"
import { Avatar } from '@material-ui/core'
import db from './firebase'
import {Link} from "react-router-dom"

function SidebarOptions({channel,timestamp,addchat,id}) {

    const[seed,setSeed]=useState()
   

    useEffect(()=>{

        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createRoom=()=>{
        console.log("room created...")
        const roomname=prompt("Enter the RoomName..");
        if(roomname){
            db.collection("rooms").add({
                channel:roomname,
            })
        }
    }
    return (
        <div className="sidebaroptions">
            {
            addchat?(
                <div onClick={createRoom}>
                    <h3>AddnewChat..</h3>
                </div> 
            ):(
               
               <>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <Link to={`/rooms/${id}`}>
                           <div className="sidebaroptions__info">
                   <h4>{channel}</h4>
                   <h5>{timestamp}</h5>
   
               </div>
                </Link>
                </>
    
          
            
               
            )

            }
          
        </div>
    )
}

export default SidebarOptions
