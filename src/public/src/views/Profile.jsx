import React, { useState, useEffect } from 'react';
import { DisplayEvent } from '../components';
import { useSelector } from 'react-redux';
import API from '../api';
import { Left } from '../types/Either';
import './Profile.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Profile = props => {
  const errorUser = {
    "id": -1,
    "username": "N/A",
    "description": "N/A",
    "password": "N/A",
    "email": "N/A",
    "type": "N/A",
    "events": [0]
  };

  const [userInfo, setUserInfo] = useState(errorUser);
  const [userEvents, setUserEvents] = useState([]);
  const state = useSelector(state => state);
  const username = state.user.username;
  console.log("TEST " + username);

  async function fetchEvents() {
    const userEither = username ? await API.getUserByUsername(username) : new Left("");
    if (userEither.isLeft()) return console.log(`Failed to fetch user ${username}; err: ${userEither.err()}`);
    console.log("TEST Another " + username);
    
    
    const user = userEither.unwrap(); // Safely unwrap now that we know its a Right
    setUserInfo(user);
    console.log("UNWRAP " + user);
    console.log(user);

    /** Moved the brunt work into the API, as you want to retrieve every user and event etc on client side, let server and db do the hard stuff */
    const mockTemp = [2, 3]; // Currently this is mock data for the events that the user is a part of.
    // const userEvents = await API.getEventsByIds(user.events); // Uncomment when user event enrollment is implemented.
    const userEvents = await API.getEventsByIds(mockTemp);
    userEvents.match(err => console.log(err), setUserEvents);
  }
  
  // Not sure of useEffect is needed. But it doesn't work with it.
  // If you don't use useEffect it gets run every render, potentially very inefficient
  // I the problem you were having is that the setState is not completely synchronous or something?
  useEffect(() => { fetchEvents(); }, []);

  return (
    <div className='profile-outer'>
      <h2 className='profile-username'> Username: {userInfo["username"]}'s Profile </h2>
      <div className='profile-info'>
        <Row className='profile-rows'>
          <Col>
            <h5>Name</h5>
            <span>Temporary First Name</span>
            {/* <div> {userInfo["username"]} </div> */}
            <span> </span>
            <span>Temporary Last Name</span>
            {/* <div> {userInfo["username"]} </div> */}
          </Col>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Telephone Number</h5>
            <span>Temporary Telephone</span>
            {/* <div> {userInfo["username"]} </div> */}
          </Col>
          <Col>
            <h5>Email</h5>
            <span>Temporary Email</span>
            {/* <div> {userInfo["email"]} </div> */}
          </Col>
        </Row>
        <h5>Description</h5>
        <div className='profile-rows'>Temporary Description</div>
        {/* <div> {userInfo["description"]} </div> */}
        <h4>Your Upcoming Events</h4>
        <ul className='profile-event-container'>
          {userEvents.length 
            ? userEvents.map(event => <DisplayEvent key={event.id} event={event} />)
            : <h6>No upcoming events</h6>}
        </ul>
      </div>
    </div>
    );
};

export default Profile;