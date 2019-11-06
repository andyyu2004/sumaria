import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Conversations } from '../components';
import { AppState } from '../types/states';
import "./ChatView.css";

export function id<T>(x: T) { return x; }

const ChatView: React.FC<RouteComponentProps> = () => {
  // const { userid, firstname, surname } = state;
  const { user, socket } = useSelector<AppState, AppState>(id);
  const { username } = user || {};
  const dispatch = useDispatch();  

  return (
    <div className="chat-view-container">
      {username ? <Conversations /> : <h4>Please Log In To Use Chat</h4>}
    </div>
  );
}

export default ChatView;
