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

  const [events, setEvents] = useState([]);
  const [userInfo, setUserInfo] = useState(errorUser);
  const [userEvents, setUserEvents] = useState([]);

  async function fetchEvents() {
    const userProfiles = await API.getProfiles();
    const eventInfo = await API.getEvents();
    eventInfo.match(
      (err) => setEvents(err),
      (events) => setEvents(events),
    );
    userProfiles.match(
      (err) => setUserInfo(err),
      (user) => setUserInfo(user[0]),
    );
    setUserEvents(userInfo["events"].sort((x, y) => (events[x].date).localeCompare(events[y].date)));
  }
  
  // Not sure of useEffect is needed. But it doesn't work with it.
  // useEffect(() => { fetchEvents(); }, []);
  fetchEvents();

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
        {userEvents.map(eventId => <DisplayEvent key={eventId} event={events[eventId]}/>)}
      </ul>
    </div>
    );
};

export default Profile;