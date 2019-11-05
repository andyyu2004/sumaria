import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { DisplayEvent } from '../components';
import './Browse.css';
import API from '../api';

const Browse = props => {
  const [skill, setSkill] = useState("");
  const [keyword, setKeyword] = useState("");  

  /** An example how to fetch async data */
  // Old code: const events = data.events;
  /**
   * A few notes
   * You must define the async function outside of useEffect
   * useEffect(async () => ... ) is not allowed
   * Also, the use effect usually needs to be wrapped in curly braces
   * i.e.
   * useEffect(() => fetchEvents(), []);
   * is not so good, as useEffect is not allowed to return anything except cleanup.
   */

  const [events, setEvents] = useState([]);
  
  const fetchEvents = async () => setEvents(await API.getEvents());
  useEffect(() => { fetchEvents(); }, []);

  const eventsFiltered = events
    .filter(e => e.name.toUpperCase().includes(keyword.toUpperCase()))
    .filter(e => e.skills.some(s => s.toUpperCase().includes(skill.toUpperCase())));
 
  return (
    <div className='event-container'>
      <h1>Browse For Events</h1>
      <Form.Row>
        <Form.Group>
          <Form.Control placeholder="Search for a skill..." onChange={e => setSkill(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder="Search for an event..." onChange={e => setKeyword(e.target.value)}/>
        </Form.Group>
      </Form.Row>
      <ul>
        {eventsFiltered.map(event => <DisplayEvent key={event.id} event={event}/>)}
      </ul>
    </div>
  );
};

export default Browse;