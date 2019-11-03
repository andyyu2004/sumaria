import React, { useState } from 'react'
import data from "../mockdata.json";

/**
 * Formats the list of events in an unordered list.
 * 
 * @param {string} eventsList The list of events.
 * @param {string} keyword The keyword to filter events.
 * @param {string} skill The skill to filter events.
 * @returns {JSX.Element}
 */
const BrowseEntries = ({event}) => {
  const { name, date, posteddate, skills, address, description, organizer } = event;
  return (
    <li>{name}
      <ul>
        <li>
          Date:
          {new Date(date).toDateString()}
        </li>
        <li>
          Posted Date:
          {new Date(posteddate).toDateString()}
        </li>
        <li>
          Skills Required:
          <ul> 
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </li>
        <li>
          Address: {address}
        </li>
        <li>
          Description: {description}
        </li>
        <li>
          Organizer: {organizer}
        </li>
      </ul>
    </li>)
}

const Browse = props => {
  const [skill, setSkill] = useState("");
  const [keyword, setKeyword] = useState("");  
  const events = data.events;

  const events_filtered = events
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
        {events_filtered.map(event => <BrowseEntries event={event}/>)}
      </ul>
    </div>
    );
};

export default Browse;