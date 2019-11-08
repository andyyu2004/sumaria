import { Link, navigate } from '@reach/router';
import React, { MouseEvent } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import usericon from '../assets/images/profile_pic_placeholder.png';
import { AppState } from '../types/states';
import './Header.css';
import { User, UserType } from '../types/User';

const headerText = {
  "color": "white",
}

type PropTypes = {
  title: string,
  subtitle?: string,
};

const Header: React.FC<PropTypes> = ({ title, subtitle }) => {
  
  // const { userType } = useSelector<AppState, UserState>(state => state.user)
  const dispatch = useDispatch();

  const { user, socket } = useSelector<AppState, AppState>(state => state);
  const usertype: UserType = user.usertype;

  const handleLogout = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      socket && socket.close();
      navigate('/');
      dispatch({ type: "LOGOUT" });
  };


  return (
    // <div className="header-container">
      <Navbar bg="success" variant="light">
      <Navbar.Brand style={headerText} className='header-title' id="navbar-brand" onClick={() => navigate("/")}><b>{title}</b></Navbar.Brand>
      <Navbar.Text>{subtitle}</Navbar.Text>

      {/* This creates the spacing, don't remove */}
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>*/}
      </Nav>
      <h5>{user.username}</h5>
      {usertype !== UserType.None
        /** If logged in, then take user to dashboard if admin else take to profile, else redirect to login screen */
        ? (<div>
            <img src={usericon} className="small-icon" onClick={() => navigate(`/${usertype === UserType.Admin ? 'admin' : 'profile'}`)} alt="profilepic" /> 
            <Button id="logoutButton" type="button" onClick={handleLogout}>Logout</Button>
          </div>)
        : <Link to="/login" style={headerText}>Log In/Sign Up</Link>} 
      </Navbar>
    // </div>
  );
};

  

export default Header;