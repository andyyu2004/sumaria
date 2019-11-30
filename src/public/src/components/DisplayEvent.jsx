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
    const { date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;
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
          <Row noGutters={true}>
            <Col xs='auto'>Location: {address}</Col>
            <Col xs='auto' className='browse-fix-spacing'>{unit ? ' ' + unit : ''}</Col>
            <Col xs='auto'>{city ? ', ' + city : ''}</Col>
            <Col xs='auto'>{province ? ', ' + province: ''}</Col>
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
            <Col className='browse-description'>Description: {description}</Col>
            <Col xs="auto"><Button onClick={() => navigate(`/event/${name}`, { state: { event } })} className='view-details-button'>View Details</Button></Col>
          </Row>
        </ul>
      </div>
    );
  };

  export default DisplayEvent;