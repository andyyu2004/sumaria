import { RouteComponentProps, navigate } from '@reach/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/actionCreators';
import API from '../api';
import { UserResponse } from '../types/api';
import { UserType } from '../types/User';

/**
 * Component for making test api calls 
 */
const APITesting: React.FC<RouteComponentProps> = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");

  const handleSignup = async () => {
    const res = await API.signup(username, password);
    res.match(
      (err: string) => setMessage(`${err} - Probably empty username/password`),
      (user: UserResponse) => setMessage(`Signed up user: username = ${user.username}`),
    );
  };

  const handleLogin = async () => {
    const res = await API.login(username, password);
    res.match(
      err => setMessage(`${err} - Login Failed`),
      user => {
        setMessage(`Succesfully logged in: username = ${user.username}`);
        dispatch(setUser({ 
          username: user.username, 
          usertype: UserType.Volunteer, 
          _id: user._id,
          events: [] 
        }));
        navigate("/");
      },
    );
  };


  return (
    <div>
      <div>
        <h2>Signup API</h2>
        {message && <h5>{message}</h5>}
        <input 
          type="text" 
          onChange={e => setUsername(e.target.value)} 
          value={username} />
        <input 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
          value={password} />
        <button onClick={handleSignup}>Signup Test</button>
        <button onClick={handleLogin}>Login Test</button>
      </div>      
    </div>
  );
};

export default APITesting;
