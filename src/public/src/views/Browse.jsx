import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import data from "../mockdata.json";
import { DisplayEvent } from '../components';
import './Browse.css'

const Browse = props => {
  const [skill, setSkill] = useState("");
  const [keyword, setKeyword] = useState("");  
  const events = data.events;

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