import React from 'react';
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
        <Row>
          <Col><h4>{name}</h4></Col>
          <Col xs='auto' className='browse-post-date'>Posted Date: {new Date(postDate).toDateString()}</Col>
        </Row>
        <ul>
          <Row>
            <Col>Event Start Date: {new Date(date).toLocaleString()}</Col>
            <Col>Event End Date: {new Date(endDate).toLocaleString()}</Col>
          </Row>
          <Row>
            <Col>Organizer: {organizer}</Col>
          </Row>
          <Row noGutters={true}>
            <Col xs='auto'>Location: {address + (unit ? ' ' + unit : '') + (city ? ', ' + city : '') + (province ? ', ' + province: '')}</Col>
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
            <Col className='browse-description'>Description: {description}</Col>
          </Row>
          <Button onClick={() => navigate(`/event/${_id}`, { state: { event } })} className='view-details-button'>View Details</Button>
        </ul>
      </div>
    );
  };

  export default DisplayEvent;