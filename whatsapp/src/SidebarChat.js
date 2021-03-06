import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import { ImportExportRounded } from '@material-ui/icons';
Import { Link } from "react-router-dom";

function SidebarChat ( { id, name, addNewChat } ) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName=prompt("Please enter name for chat room");

        if (roomName) {
            //do some clever databasestuff...
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={'/rooms/%{id}'}>
        <div className="sidebarChat">
        <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'} />
            <div className="sidebarChat__info">
                <h2>{ name }</h2>
                <p>Last Message...</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;
