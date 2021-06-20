import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import "../css/ChatInput.css"
import { db } from '../firebase'
import firebase from 'firebase';
const ChatInput = ({user,channelName,channelId}) => {
    const [msg,setMsg] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:msg,
                user:user.displayName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                userImage:user.photoURL,
            })
        }
        setMsg("")
    }
    return (
        <div className="chatInput">
            <form >
                <input 
                    onChange={(e)=>setMsg(e.target.value)}
                    value={msg}
                    placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <Button type="submit" onClick={(e) =>sendMessage(e)}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
