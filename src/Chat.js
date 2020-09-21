import React,{useState,useEffect}  from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './Chat.css'

function Chat() {

    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);

    const sendMessage = (e)=>{
          e.preventDefault();
          console.log('You tiped >>> ',input);
          setInput('');
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        
                <div className="chat_headerInfo">
                        <h3>Room Name</h3>
                        <p>Last seen at ..</p>
                </div>
                <div className="chat_headerRight">
                <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>
                    <span className="chat_name">Hamza Ait Sidi Said</span> 
                    hey guys
                    <span className="chat_timestamp">3:52pm</span>
                </p>
                
            </div>
            
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type your message"/>
                    <button type="submit" onClick={sendMessage}>Send message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
