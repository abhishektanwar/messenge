import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import "../css/Chat.css"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InforOutlinedIcon from "@material-ui/icons/InfoOutlined"
import { db } from '../firebase'
import Message from './Message'
import ChatInput from './ChatInput'
const Chat = ({user}) => {
    const {roomId} = useParams()
    const [roomDetails,setRoomDetails] = useState(null)
    const [roomMessages,setRoomMessages] = useState([])
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId).collection('messages')
            .orderBy("timestamp","asc")
            .onSnapshot(snapshot => (
                setRoomMessages(
                    snapshot.docs.map(doc=>doc.data())
                )
            ))
        
    }, [roomId])

    console.log(roomId)
    console.log(roomDetails)
    console.log(roomMessages)
    return (
        <div className="chat">
            {/* You are in room {roomId} */}
            {/* welcome */}
            <div className="chatHeader">
                <div className="charHeaderLeft">
                    <h4 className="chatChannelName">
                        <strong>{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chatHeaderRight">
                    <p>
                        <InforOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chatMessages">
                {roomMessages?.map(message =>(
                    <Message 
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage}
                    />
                ))}

            </div>
            <ChatInput user={user} channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
