import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../views/Browse.css'

/**
 * Formats the list of events in an unordered list.
 * 
 * @param {string} eventsList The list of events.
 * @param {string} keyword The keyword to filter events.
 * @param {string} skill The skill to filter events.
 * @returns {JSX.Element}
 */
const DisplayEvent = ({ event }) => {
    const { date, description, name, postDate, skills, address, organizer } = event;
    const tempAddress = "temp";
    const tempOrganizer = "temp";
    return (
        <div className='browse-post'>
        <h4>{name}</h4>
        <ul>
          <Row>
            <Col>Event Date: {new Date(date).toDateString()}</Col>
            <Col className='browse-post-date'>Posted Date: {new Date(postDate).toDateString()}</Col>
          </Row>
          <Row>
            <Col>Organizer: {tempOrganizer}</Col>
          </Row>
          <Row>
            <Col>Address: {tempAddress}</Col>
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
      </div>)
  };

  export default DisplayEvent;