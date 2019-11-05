import React from 'react'
import data from "../mockdata.json";
import { DisplayEvent } from '../components';


const Profile = props => {
  const userInfo = data.user[0];
  const eventInfo = data.events;
  const userEvents = (userInfo["events"]).sort((x, y) => (eventInfo[x].date).localeCompare(eventInfo[y].date));

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
        {userEvents.map(eventId => <DisplayEvent key={eventId} event={eventInfo[eventId]}/>)}
      </ul>
    </div>
    );
};

export default Profile;