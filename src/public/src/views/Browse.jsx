import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import data from "../mockdata.json";
import { DisplayEvent } from '../components';
import style from 'bootstrap/dist/css/bootstrap.css';
import './Browse.css'

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
    <Card className='event-post'>
      <h4>{name}</h4>
      <ul>
        <Row>
          <Col>Event Date: {new Date(date).toDateString()}</Col>
          <Col>Posted Date: {new Date(posteddate).toDateString()}</Col>
        </Row>
        <Row>
          <Col>Organizer: {organizer}</Col>
        </Row>
        <Row>
          <Col>Address: {address}</Col>
        </Row>
        Skills Required:
        <Row>
          <Col>
          <ul> 
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
          </Col>
        </Row>
        <Row>
          <Col>Description: {description}</Col>
        </Row>
      </ul>
    </Card>)
}

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