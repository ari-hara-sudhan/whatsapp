import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { Avatar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from "react-router-dom"
import db from './firebase';
function Chat() {
    const[seed ,setSeed]=useState()
    const {roomid}=useParams()
    const [roomname,setRoomname]=useState()
    const[input,setInput]=useState()
    const[messages,setMessages]=useState()
    
    useEffect(()=>{
        setSeed(Math.random(Math.floor()*5000))
    },[])



    useEffect(()=>{
        if(roomid){
            db.collection("rooms").doc(roomid).onSnapshot(snapshot=>{
                setRoomname(snapshot.data().channel)
            })
        }

    },[roomid])
    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection("rooms").doc(roomid).collection("messages").
        onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
            
        })
    }
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__center">
                <h4>{roomname}</h4>
                <p>Timestamp</p>
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
                <p className={`chat__message chat__user`}>hello<span className="chat__name">elon musk</span>
                <span className="chat__timestamp">3.00</span>
                </p>
                

            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type some Message.." type="text"/>
                    <button onClick={sendMessage} type="submit">send</button>
                </form>
                <MicIcon/>

            </div>
        
        </div>
    )
}

export default Chat
