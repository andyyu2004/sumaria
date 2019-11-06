import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewConversation, setConversations } from '../actions/actionCreators';
import { apiGetConversations, apiNewConversation as apiCreateConversation } from '../api/chat';
import { Chat } from '../components';
import Sidebar from './Sidebar';
import { AppState } from '../types/states';
import { Conversation } from '../types/Chat';
import "./Conversations.css";

const Conversations = () => {
  const username = useSelector<AppState, string>(state => state.user.username!);
  const convos = useSelector<AppState, Conversation[]>(state => state.conversations);

  const [currConvoIndex, setCurrentConvoIndex] = useState<number>(0);

  const [newname, setNewname] = useState("");
  const dispatch = useDispatch();
  const socket = useSelector<AppState, SocketIOClient.Socket>(state => state.socket!);
  
  const createConversation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newname) return;
    const { conversation } = await apiCreateConversation(username, newname);
    addNewConversation(dispatch)(conversation);
  };

  const refreshConversations = useCallback(async () => {
    const { conversations } = await apiGetConversations(username);
    console.log("Refreshing conversations");
    setConversations(dispatch)(conversations);
  }, [dispatch, username]);

  /** Refresh conversations on page load and on 'refresh-conversations' event */
  useEffect(() => { 
    refreshConversations();
    socket.on('refresh-conversations', refreshConversations);
    return () => {
      socket.removeListener('refresh-conversations', refreshConversations);
    };
  }, [refreshConversations, socket]);

  return (
    <div className="conversations-container">
      <h4>Conversations</h4>
      <form onSubmit={createConversation} name="newconversationform">
        <label>Create new conversation</label>
        <input onChange={e => setNewname(e.target.value)} value={newname} />
        <input type="submit" value="submit" />
      </form>
      <div className="chat-flex-container">
        <Sidebar text="Conversations" entries={convos.map((c, i) => [c.name, () => setCurrentConvoIndex(i)])} />
        {convos[currConvoIndex] && <Chat conversation={convos[currConvoIndex]} /> }
      </div>
    </div>
  );
};

export default Conversations;
