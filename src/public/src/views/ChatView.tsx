import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/actionCreators';
import { Conversations, ChatLogin } from '../components';
import { RouteComponentProps } from '@reach/router';
import { AppState } from '../types/states';

export function id<T>(x: T) { return x; }

const ChatView: React.FC<RouteComponentProps> = () => {
  // const { userid, firstname, surname } = state;
  const { user, socket } = useSelector<AppState, AppState>(id);
  const { _id, firstname, surname, username } = user || {};
  const dispatch = useDispatch();

  const handleLogout = () => {
    socket && socket.close();
    dispatch(logout());
  };

  return (
    <div>
      <h2>Chat</h2>
      {_id ? (
        <div>
          <h4>Hello {firstname} {surname} {username} ({_id})</h4> 
          <button onClick={handleLogout}>Logout</button>
        </div>)
        : (
        <div>
          <h4>Please Log In Below</h4>
          <ChatLogin />
        </div>
        )
      }
      {_id && <Conversations /> }
    </div>
  );
}

export default ChatView;
