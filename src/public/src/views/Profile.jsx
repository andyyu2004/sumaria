import React, { useState, useEffect } from 'react';
import { DisplayEvent } from '../components';
import { useSelector } from 'react-redux';
import API from '../api';
import { Left } from '../types/Either';

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
    <div>
      <h1>User Profile</h1>
      <h3>Username</h3>
      <div> {userInfo["username"]} </div>
      <h3>First Name</h3>
      <div>Temporary First Name</div>
      {/* <div> {userInfo["username"]} </div> */}
      <h3>Last Name</h3>
      <div>Temporary Last Name</div>
      {/* <div> {userInfo["username"]} </div> */}
      <h3>Telephone Number</h3>
      <div>Temporary Telphone</div>
      {/* <div> {userInfo["username"]} </div> */}
      <h3>Email</h3>
      <div>Temporary Email</div>
      {/* <div> {userInfo["email"]} </div> */}
      <h3>Description</h3>
      <div>Temporary Description</div>
      {/* <div> {userInfo["description"]} </div> */}
      <h3>Your Upcoming Events</h3>
      <ul>
        {userEvents.map(event => <DisplayEvent key={event.id} event={event} />)}
      </ul>
    </div>
    );
};

export default Profile;