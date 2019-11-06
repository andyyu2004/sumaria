import React, { FormEvent, useState, MouseEvent } from 'react'
import { RouteComponentProps } from '@reach/router';
import API from '../api';
import { Result } from '../types/Result';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/actionCreators';
import { UserResponse } from '../types/api';

/**
 * Component for making test api calls 
 */
const APITesting: React.FC<RouteComponentProps> = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");

  const handleSignup = async () => {

    /** Non-monadic appraoch */
    // const res = await API.signup(username, password);
    // console.log(res);

    /** One monadic approach */
    const mresult = await API.monad.msignup(username, password);
    // dispatch(setUser({ username: user.username }))
    Result.match<UserResponse, string, void>(
      mresult,
      (user: UserResponse) => setMessage(`Signed up user: username = ${user.username}`),
      (err: string) => setMessage(`${err} - Probably empty username/password`),
    );
  };

  const handleLogin = async () => {
    Result.match(
      await API.monad.mlogin(username, password),
      user => {
        setMessage(`Succesfully logged in: username = ${user.username}`)
      },
      err => setMessage(`${err} - Login Failed`),
    )
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
          type="text" 
          onChange={e => setPassword(e.target.value)} 
          value={password} />
        <button onClick={handleSignup}>Signup Test</button>
        <button onClick={handleLogin}>Login Test</button>
      </div>      
    </div>
  );
};

export default APITesting;
