import { navigate } from '@reach/router'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useDispatch } from 'react-redux'
import API from '../api'
import SumariaLogo from '../assets/images/logos/sumaria_logo.png'
import './Login.css'
import { UserType } from '../types/User'
import { setUser } from '../actions/actionCreators'

const Login = props => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
  const dispatch = useDispatch();

  const validateLoginParams = (u, p) => {
    if (u.length < 3 || u.length > 15 || !/^[A-Za-z][A-Za-z0-9]*(?:[ _-][A-Za-z0-9]+)*$/.test(u)){
      alert('Invalid username!');
      setInputs({
        username: "",
        password: "",
      });
      return false;
    } else{
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/.test(p)){
        alert('Invalid password!');
        setInputs({
          username: "",
          password: "",
        });
        return false;
      }
      return true;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(username, password);
    if (!validateLoginParams(username, password)){
      /* TODO: Do some sort of display to the user */
      return false;
    }

    const res = await API.login(username, password);
    res.match(
      err => {
        // setMessage(`${err} - Login Failed`),
        /* TODO: Do some sort of display to the user */
      },
      user => {
        // setMessage(`Succesfully logged in: username = ${user.username}`);
        dispatch(setUser({ username: user.username, usertype: UserType.Volunteer, events: [] }));
        navigate("/");
      },
    );
  };

  return (
    <div>
      <div className='login-container'>
        <div>
          <img src={SumariaLogo} alt="Sumaria" className='login-logo'/>
          <Form className='login-form' onSubmit={onSubmit}>
            <Form.Group>
              <InputGroup>
                <i className="fas fa-user login-icon"/>
                <input className="form-control" type="text" name="username" placeholder="username" value={username} 
                onChange={e => setInputs({ ...inputs, username: e.target.value })} required />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <InputGroup>
                <i className="fa fa-lock login-icon" />
                <input className="form-control" type="password" name="pass" placeholder="password" value={password} 
                onChange={e => setInputs({ ...inputs, password: e.target.value })} required />
              </InputGroup>
            </Form.Group>
            <Button type="submit" block variant='success'>Login</Button>
            <div className='login-links-container'>
              Forgot <a href="/reset">Username / Password?</a>
              <a href="/register">Create Your Account</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;