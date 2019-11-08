import React, { useState } from 'react'
import SumariaLogo from '../assets/images/logos/sumaria_logo.png'
import API from '../api'
import { Result } from '../types/Result'
import { useDispatch } from 'react-redux'
import { setUser } from '../actions/actionCreators'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import './Login.css'
import Button from 'react-bootstrap/Button'

const Login = props => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault()

  };

  return (
    <div>
      <div className='login-container'>
        <div>
          <img src={SumariaLogo} alt="Sumaria" className='login-logo'/>
          <Form className='login-form' onSubmit={onSubmit}>
            <Form.Group>
              <InputGroup>
                <i className="fa fa-envelope login-icon"/>
                <input className="form-control" type="text" name="email" placeholder="Email" value={username} 
                onChange={e => setInputs({ ...inputs, username: e.target.value })} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <InputGroup>
                <i className="fa fa-lock login-icon" />
                <input className="form-control" type="password" name="pass" placeholder="Password" value={password} 
                onChange={e => setInputs({ ...inputs, password: e.target.value })} />
              </InputGroup>
            </Form.Group>
            <Button block variant='success'>Login</Button>
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