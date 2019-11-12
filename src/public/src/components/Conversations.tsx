import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewConversation, setConversations } from '../actions/actionCreators';
import API from '../api';
import { Chat } from '../components';
import { Conversation } from '../types/Chat';
import { AppState } from '../types/states';
import "./Conversations.css";
import Sidebar from './Sidebar';

const Conversations = () => {
  const username = useSelector<AppState, string>(state => state.user.username!);
  const convos = useSelector<AppState, Conversation[]>(state => state.conversations);

  const [currConvoIndex, setCurrentConvoIndex] = useState<number>(0);

  const [newname, setNewname] = useState("");
  const dispatch = useDispatch();
  const socket = useSelector<AppState, SocketIOClient.Socket>(state => state.socket!);
  
  const createConversation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newname) return toast.info("Can't create chat with empty name");
    (await API.createNewConversation(username, newname)).match(
      err => toast.error(err),
      addNewConversation(dispatch),
    );
  };

  const refreshConversations = useCallback(async () => {
    (await API.getConversations(username)).match(
      err => toast.error(err),
      setConversations(dispatch),
    );
    
  }, [dispatch, username]);

  /** Refresh conversations on page load and on 'refresh-conversations' event */
  useEffect(() => { 
    refreshConversations();
    socket.on('refresh-conversations', refreshConversations);
    return () => {
      socket.removeListener('refresh-conversations', refreshConversations);
    };
  }, [refreshConversations, socket]);

  // TODO line 55 error. convos undef.
  return (
    <div className="conversations-container">
      <div>
        <span>Chat Header</span>
        <form onSubmit={createConversation} name="newconversationform">
          <label>Create new conversation</label>
          <input onChange={e => setNewname(e.target.value)} value={newname} />
          <input type="submit" value="submit" />
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
