import React, { useEffect, useState } from 'react'
import "./SidebarOptions.css"
import { Avatar } from '@material-ui/core'

function SidebarOptions({channel,timestamp}) {
    const[seed,setSeed]=useState()
    console.log(seed)

    useEffect(()=>{

        setSeed(Math.floor(Math.random()*5000))
    },[])
    return (
        <div className="sidebaroptions">
            <Avatar src={`https://avatars.dicebear.com/api/
             human/12222.svg`}/>
            <div className="sidebaroptions__info">
                <h4>{channel}</h4>
                <h5>{timestamp}</h5>

            </div>
            
        </div>
    )
}

export default SidebarOptions
