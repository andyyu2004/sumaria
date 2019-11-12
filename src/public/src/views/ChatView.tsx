import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Conversations } from '../components';
import { AppState } from '../types/states';
import { id } from '../util';
import "./ChatView.css";

const ChatView: React.FC<RouteComponentProps> = () => {
  // const { userid, firstname, surname } = state;
  const { user } = useSelector<AppState, AppState>(id);
  const { username } = user || {};
  return (
    <div className="chat-view-container">
      {username ? <Conversations /> : <h4>Please Log In To Use Chat</h4>}
    </div>
  );
}

export default ChatView;
