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
import { ToastContainer, toast } from 'react-toastify';


const Login = props => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
  const dispatch = useDispatch();

  const validateLoginParams = (u, p) => {
    if (u.length < 3 || u.length > 15 || !/^[A-Za-z][A-Za-z0-9]*(?:[ _-][A-Za-z0-9]+)*$/.test(u)){
      toast.error('Invalid username!', {
        position: toast.POSITION.TOP_CENTER
      });
      setInputs({
        username: "",
        password: "",
      });
      return false;
    } else{
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/.test(p)){
        toast.error('Invalid password!', {
          position: toast.POSITION.TOP_CENTER
        });
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
      return false;
    }

    const res = await API.login(username, password);
    res.match(
      err => {
        console.log(err);
        // setMessage(`${err} - Login Failed`),
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER
        });
        setInputs({
          username: "",
          password: "",
        });
      },
      user => {
        // setMessage(`Succesfully logged in: username = ${user.username}`);
        toast.success('Successfully logged in: ' + user.username, {
          position: toast.POSITION.TOP_CENTER
        });
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