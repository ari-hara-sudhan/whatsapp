import React, { useEffect, useState } from 'react'
import "./SidebarOptions.css"
import { Avatar } from '@material-ui/core'

function SidebarOptions({channel,timestamp,addchat}) {
    const[seed,setSeed]=useState()
   

    useEffect(()=>{

        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createRoom=(e)=>{
        console.log("room created...")
    }
    return (
        <div className="sidebaroptions">
            {
            addchat?(
                <h3 onClick={createRoom}>AddNewChat</h3>
            ):(
                <>
             <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
               <div className="sidebaroptions__info">
                   <h4>{channel}</h4>
                   <h5>{timestamp}</h5>
   
               </div>
               </>
               
            )

            }
          
        </div>
    )
}

export default SidebarOptions
