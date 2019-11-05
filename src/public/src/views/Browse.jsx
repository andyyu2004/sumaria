import React, { useState } from 'react'
import data from "../mockdata.json";
import { DisplayEvent } from '../components';

const Browse = props => {
  const [skill, setSkill] = useState("");
  const [keyword, setKeyword] = useState("");  
  const events = data.events;

  const eventsFiltered = events
    .filter(e => e.name.toUpperCase().includes(keyword.toUpperCase()))
    .filter(e => e.skills.some(s => s.toUpperCase().includes(skill.toUpperCase())));
 
  return (
    <div>
      <h1>Browse For Events</h1>
      <input
        placeholder="Search for a skill..."
        onChange={e => setSkill(e.target.value)}/>
      <input
        placeholder="Search for an event..."
        onChange={e => setKeyword(e.target.value)}/>
      <ul>
        {eventsFiltered.map(event => <DisplayEvent key={event.id} event={event}/>)}
      </ul>
    </div>
    );
};

export default Browse;