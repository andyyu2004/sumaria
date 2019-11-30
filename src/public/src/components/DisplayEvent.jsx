import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../views/Browse.css'
import { Button } from 'react-bootstrap';
import { navigate } from '@reach/router';

/**
 * Formats the list of events in an unordered list.
 * 
 * @param {string} eventsList The list of events.
 * @param {string} keyword The keyword to filter events.
 * @param {string} skill The skill to filter events.
 * @returns {JSX.Element}
 */
const DisplayEvent = ({ event }) => {
    const { _id, date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;
    return (
      <div className='browse-post'>
        <h4>{name}</h4>
        <ul>
          <Row>
            <Col>Event Start Date: {new Date(date).toString()}</Col>
            <Col>Event End Date: {new Date(endDate).toString()}</Col>
            <Col className='browse-post-date'>Posted Date: {new Date(postDate).toString()}</Col>
          </Row>
          <Row>
            <Col>Organizer: {organizer}</Col>
          </Row>
          <Row>
            <Col>Address: {address}</Col>
          </Row>
          <Row>
            <Col>City: {city}</Col>
          </Row>
          <Row>
            <Col>Province: {province}</Col>
          </Row>
          <Row>
            <Col>Unit: {unit}</Col>
          </Row>
          Skills Required:
          <Row>
            <Col>
            <ul> 
              {skills ? skills.map(skill => <li key={skill}>{skill}</li>) : null}
            </ul>
            </Col>
          </Row>
          <Row>
            <Col>Description: {description}</Col>
          </Row>
          <Button onClick={() => navigate(`/event/${_id}`, { state: { event } })}>View Details</Button>
        </ul>
      </div>
    );
  };

  export default DisplayEvent;