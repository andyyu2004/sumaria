import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewConversation, setConversations } from '../actions/actionCreators';
import API from '../api';
import { Chat } from '../components';
import { Conversation } from '../types/Chat';
import { AppState } from '../types/states';
import './Chat.css';
import "./Conversations.css";
import Sidebar from './Sidebar';

const Conversations = () => {
  const username = useSelector<AppState, string>(state => state.user.username!);
  const convos = useSelector<AppState, Conversation[]>(state => state.conversations);

  const [currConvoIndex, setCurrentConvoIndex] = useState<number>(0);

  const [newname, setNewname] = useState("");
  const dispatch = useDispatch();
  const socket = useSelector<AppState, SocketIOClient.Socket | undefined>(state => state.socket);
  
  const createConversation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newname) return toast.info("Can't create chat with empty name");
    (await API.createNewConversation(username, newname))
      .map(addNewConversation(dispatch))
      .mapLeft(toast.error);
  };

  const refreshConversations = useCallback(async () => {
    (await API.getConversations(username))
      .map(setConversations(dispatch))
      .mapLeft(toast.error);
    
  }, [dispatch, username]);

  /** Refresh conversations on page load and on 'refresh-conversations' event */
  useEffect(() => { 
    refreshConversations();
    socket && socket.on('refresh-conversations', refreshConversations);
    return () => {
      socket && socket.removeListener('refresh-conversations', refreshConversations);
    };
  }, [refreshConversations, socket]);

  // TODO line 55 error. convos undef.
  return (
    <div className="conversations-container">
      <div>
        <h3>Chat</h3>
        <form onSubmit={createConversation} name="newconversationform">
          <InputGroup className='conversations-input'>
            <label className='conversations-label'>Create new conversation</label>
            <input onChange={e => setNewname(e.target.value)} value={newname} className='conversations-input-box form-control'/>
            <input type="submit" value="Submit" className='btn chat-button' />
          </InputGroup>
        </form>
      </div>
      
      <div className="conversations-flex-container"> 
        <Sidebar text="Conversations" entries={convos.map((c, i) => [c.name, () => setCurrentConvoIndex(i)])} />
        {convos[currConvoIndex] && <Chat conversation={convos[currConvoIndex]} /> }
      </div>
    </div>
  );
};

export default Conversations;
