import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import API from '../api';
import { Conversation, Message } from '../types/Chat';
import { AppState } from '../types/states';
import { User } from '../types/User';
import './Chat.css';
import Button from 'react-bootstrap/Button';

type PropType = {
  conversation: Conversation,
};

const Chat: React.FC<PropType> = ({ conversation }) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [personToAdd, setPersonToAdd] = useState<string>("");
  const [addPersonPopup, setAddPersonPopup] = useState<boolean>(false);
  const socket = useSelector<AppState, SocketIOClient.Socket>(state => state.socket!);
  const user = useSelector<AppState, User>(state => state.user!);

  const chatRef: any = useRef();

  const fetchMessages = useCallback(async () => {
    // const { messages } = await apiGetMessages(conversation._id);
    (await API.getMessages(conversation._id)).match(err => toast.error(err), setMessages);

    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [conversation]);

  useEffect(() => { 
    fetchMessages();
  }, [fetchMessages]);

  /** Socket listener initialization and destruction */
  useEffect(() => {
    socket.emit('enter-conversation', conversation._id);
    socket.on('refresh-messages', fetchMessages);
  
    socket.on('err', (err: string) => toast.error(err));

    return () => { 
      socket.emit('leave-conversation', conversation._id); 
      socket.removeListener('refresh-messages', fetchMessages);
      socket.removeListener('err'); 
    };
    
  }, [conversation, socket, fetchMessages]);

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.length) return;
    socket.emit('new-message', { 
      senderid: user._id, 
      sender: user.username, 
      message,
      conversationId: conversation._id,
    });
    setMessage("");
  };

  const handleAddPersonToConversation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddPersonPopup(false);
    socket.emit('add-user', {
      username: personToAdd,
      conversationId: conversation._id,
    });
  };

  return (
    <div className="chat-flex-container">
      <div className="chat-container" key="chat-view-container">
        <h5>{conversation.name} ({conversation._id})</h5>
      <div className="message-container" ref={chatRef}>
        {messages.map(({ message, _id, username, createdAt }) => {
          const date = new Date(createdAt);
          const formatted = `${date.getHours()}:${date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
          return <p className="chatmsg" key={_id}>{username}@{formatted}: {message}</p>
        })}
        </div>
        <form onSubmit={sendMessage} key="message-form" className="message-input-form">
          <input 
            key="message-input"
            className="message-input-box form-control"
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            placeholder="message..." />
          <input type="submit" className='btn message-submit-button chat-button' value="Send Message" />
        </form>
      </div>  

      <div className="chat-options-container">
        <h6>Chat Options</h6>
        <ToastContainer />
        <Button className='chat-button' onClick={() => setAddPersonPopup(!addPersonPopup)}>Add Person</Button>
        <div>
          <h4>Members</h4>
          {conversation.members.map(mem => <h5 key={mem}>{mem}</h5>)}
        </div>
        <Popup position="left top" open={addPersonPopup} onClose={() => setAddPersonPopup(false)}>
          <div>
            <form onSubmit={handleAddPersonToConversation}>
              <input type="text" placeholder="Person To Add" onChange={e => setPersonToAdd(e.target.value)} />
              <input type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Chat;
