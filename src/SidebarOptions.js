import React, { useEffect, useState } from 'react'
import "./SidebarOptions.css"
import { Avatar } from '@material-ui/core'
import db from './firebase'
import {Link} from "react-router-dom"

function SidebarOptions({channel,timestamp,addchat,id}) {

    const[seed,setSeed]=useState()
    const[messages,setMessages]=useState()
   

    useEffect(()=>{

        setSeed(Math.floor(Math.random()*5000))
    },[])
    useEffect(()=>{
        if(id){
            db.collection("rooms").doc(id).collection("messages")
            .orderBy("timestamp","desc").onSnapshot(snapshot=>{
                setMessages(snapshot.docs.map(doc=>doc.data()))
            })
        }

    },[id])
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
                   <h5>{ messages && messages[0]?.text}</h5>
   
               </div>
                </Link>
                </>
    
          
            
               
            )

            }
          
        </div>
    )
}

export default SidebarOptions
