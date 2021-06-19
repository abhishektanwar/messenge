import React from 'react'
import { useHistory } from 'react-router'
import "../css/SidebarOption.css"
import { db } from '../firebase'
const SidebarOption = ({Icon,title,addChannelOption,id}) => {
    const history = useHistory()

    const selectChannel = () =>{
        if(id){
            history.push(`/room/${id}`)
        }
        else{
            history.push(title)
        }
    }

    const addChannel = () =>{
        const channelName = prompt('Please enter the channel name');

        if(channelName){
            db.collection('rooms').add({
                name:channelName,
            })
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon className="sidebarOptionIcon" />}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarOptionChannel">
                    <span className="sidebarOptionHash"> #</span>{title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
