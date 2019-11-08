import React, { useState, useEffect } from 'react';
import { DisplayEvent } from '../components';
import API from '../api';

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

  async function fetchEvents() {
    const username = "helloworld"; // Grab this from redux when the api is actually done
    const userEither = await API.getUserByUsername(username);
    if (userEither.isLeft()) return console.log(`Failed to fetch user ${username}; err: ${userEither.err()}`);
    
    const user = userEither.unwrap(); // Safely unwrap now that we know its a Right
    setUserInfo(user);

    /** Moved the brunt work into the API, as you want to retrieve every user and event etc on client side, let server and db do the hard stuff */
    const userEvents = await API.getEventsByIds(user.events);
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
      <h3>Email</h3>
      <div> {userInfo["email"]} </div>
      <h3>Description</h3>
      <div> {userInfo["description"]} </div>
      <h3>Your Upcoming Events</h3>
      <ul>
        {userEvents.map(event => <DisplayEvent key={event.id} event={event} />)}
      </ul>
    </div>
    );
};

export default Profile;