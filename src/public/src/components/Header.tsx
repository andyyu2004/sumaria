import { Link, navigate } from '@reach/router';
import React, { MouseEvent, useEffect } from 'react';
import { Button, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import usericon from '../assets/images/profile_pic_placeholder.png';
import { AppState } from '../types/states';
import { UserType } from '../types/User';
import Select from 'react-select';
import notificationicon from '../assets/images/notification_icon.png';
import './Header.css';
import Notification from './Notification';
import { newNotification } from '../actions/actionCreators';
import uuid from 'uuid/v4';

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

  const { user, socket, notifications } = useSelector<AppState, AppState>(state => state);
  const usertype: UserType = user.usertype as UserType;

  const handleLogout = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log(socket);
      socket && socket.close();
      navigate('/');
      dispatch({ type: "LOGOUT" });
      console.log(socket);
  };

  const newMessageNotification = (sender: string, message: string, convId: string) => {
    /* Don't need own message notification */
    if (sender === user.username) return;
    dispatch(newNotification({
      id: uuid(),
      message: `Message '${message}' from ${sender}`,
      // cb, use the convId and redirect user to that conversation or something
    }));
  };

  useEffect(() => {
    socket && socket.on('refresh-messages', newMessageNotification);
    return () => {
      socket && socket.removeListener('refresh-message', newMessageNotification);
    };
  }, [socket]);

  return (
    <div className="header-container">
      <Navbar bg="success" variant="light">
      <Navbar.Brand style={headerText} className='header-title' id="navbar-brand" onClick={() => navigate("/")}><b>{title}</b></Navbar.Brand>
      <Navbar.Text>{subtitle}</Navbar.Text>

      {/* This creates the spacing, don't remove */}
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>*/}
      </Nav>
      {usertype !== UserType.None
        /** If logged in, then take user to dashboard if admin else take to profile, else redirect to login screen */
        ? (<><h5>{user.username}</h5>
          <Dropdown>
            <Dropdown.Toggle id="notification-toggle">
              <img src={notificationicon} alt="Notifications" className="small-generic-icon" />
              <span>{notifications.length}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {notifications.length
                ? notifications.map(n => <Notification notification={n} key={n.id} />)
                : <h6>No notifications</h6>
              }
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <img src={usericon} className="small-icon" onClick={() => navigate(`/${usertype === UserType.Admin ? 'admin' : 'profile'}`)} alt="profilepic" /> 
            <Button id="logoutButton" type="button" onClick={handleLogout}>Logout</Button>
          </div></>)
        : <Link to="/login" style={headerText}>Log In/Sign Up</Link>} 
      </Navbar>
    </div>
  );
};

  

export default Header;