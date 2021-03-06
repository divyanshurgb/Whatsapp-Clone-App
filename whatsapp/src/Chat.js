import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './Chat.css'

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>', input);
    }
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'}/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            </div>

            <div className="chat__body">
                <p className={'chat__message ${true && '}{..."chat__reciever"}>
                <span className="chat__name">Divyanshu Singh </span>
                Hey Guys
                <span className="chat__timestamp">3:30pm </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.Value)} placeholder="Type a message"type="text" />
                    <button onClick={sendMessage} type="submit"> Send a message </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
