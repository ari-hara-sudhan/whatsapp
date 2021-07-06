import React from 'react'
import "./SidebarOptions.css"
import { Avatar } from '@material-ui/core'

function SidebarOptions({channel,timestamp}) {
    return (
        <div className="sidebaroptions">
            <Avatar/>
            <div className="sidebaroptions__info">
                <h4>{channel}</h4>
                <h5>{timestamp}</h5>

            </div>
            
        </div>
    )
}

export default SidebarOptions
