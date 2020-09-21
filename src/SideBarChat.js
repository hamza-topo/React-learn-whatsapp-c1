import React,{useState,useEffect} from 'react'
import './SideBarChat.css'
import {Avatar} from '@material-ui/core'
import db from './firebase'

function SideBarChat( {name,addNewChat} ) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);

    const createChat =()=> {
        const roomName=prompt('Please Enter name for chat');
        
        if(roomName)
            {
                db.collection("rooms").add({
                    name:roomName,
                });
            }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
    <h2>{name}</h2>
                <p>last message ...</p>
            </div>
         
        </div>
    ):(
        <div onClick={createChat}>
            <div className="sidebarChat">
                    <h1>Add New Chat</h1>
            </div>

        </div>
    );
}

export default SideBarChat
