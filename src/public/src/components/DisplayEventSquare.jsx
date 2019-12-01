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
const DisplayEventSquare = ({ event }) => {
    const { _id, date, name, description, postDate, endDate, skills, address, city, province, unit, organizer } = event;
    return (
      <div className='browse-square'>
        <Row>
          <Col><h4>{name}</h4></Col>
        </Row>
        <Row>
        <Col>Start Date: {new Date(date).toLocaleString()}</Col>
        <Col>End Date: {new Date(endDate).toLocaleString()}</Col>
        </Row>
        <Row>
        <Col>Organizer: {organizer}</Col>
        </Row>
        <Row noGutters={true} className='browse-info'>
            <Col xs='auto'>Location: {address + (unit ? ' ' + unit : '') + (city ? ', ' + city : '') + (province ? ', ' + province: '')}</Col>
        </Row>
        <Row>
            <Col className='browse-description browse-info'>Description: {description}</Col>
        </Row>
        <Button onClick={() => navigate(`/event/${_id}`, { state: { event } })} className='view-details-button'>View Details</Button>
      </div>
    );
  };

  export default DisplayEventSquare;