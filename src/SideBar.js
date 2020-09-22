import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "./SideBarChat";
import db from "./firebase";
function SideBar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
   const unsubscribe= db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return ()=>{
     unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
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
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SideBarChat addNewChat />
        {rooms.map(room=>(
            <SideBarChat key={room.id} id={room.id} name={room.data.name} /> 
        ))}
      </div>
    </div>
  );
}

export default SideBar;
