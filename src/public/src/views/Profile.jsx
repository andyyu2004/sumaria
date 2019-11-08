import React, { useState, useEffect } from 'react';
import { DisplayEvent } from '../components';
import API from '../api';

async function fetchEvents(setEvents, setUserInfo, setUserEvents) {
  const events = (await API.getEvents());
  const userInfo = (await API.getProfiles());
  setEvents(events);
  setUserInfo(userInfo[0]);
  setUserEvents((userInfo[0]["events"]).sort((x, y) => (events[x].date).localeCompare(events[y].date)));
}

const Profile = props => {

  const [events, setEvents] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  
  useEffect(() => { fetchEvents(setEvents, setUserInfo, setUserEvents); }, []);

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