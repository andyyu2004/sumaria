import React, { useState, useEffect } from 'react';
import * as fuse from 'fuse.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import { DisplayEvent } from '../components';
import API from '../api';
import './Browse.css'

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
  
  const fetchEvents = async () => {
    const eventInfo = await API.getEvents();
    eventInfo.match(
      err => console.log(err),
      events => setEvents(events),
    );
  };
  
  useEffect(() => { fetchEvents(); }, []);

  const optionsName = {
    shouldSort: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 0,
    keys: [
      "name"
    ]
  }

  const optionsSkills = {
    shouldSort: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "skills"
    ]
  }

  let eventsFiltered = skill ? (new fuse(events, optionsSkills)).search(skill) : events;
  eventsFiltered = keyword ? (new fuse(eventsFiltered, optionsName)).search(keyword) : eventsFiltered;

  return (
    <div className='browse-container'>
      <h1>Browse For Events</h1>
      <Form.Row>
        <Form.Group as={Col} xs={3} className='browse-input'>
          <Form.Control placeholder="Search for a skill..." onChange={e => setSkill(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} xs={3}>
          <Form.Control placeholder="Search for an event..." onChange={e => setKeyword(e.target.value)}/>
        </Form.Group>
      </Form.Row>
      <div>
        {eventsFiltered.map(event => <DisplayEvent key={event._id} event={event}/>)}
      </div>
    </div>
  );
};

export default Browse;