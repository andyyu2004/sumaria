import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './AddEvent.css'

const AddEvent = props => {
  return (
    <div className='add-event-outer'>
      <Card className='add-event-container'>
        <h1>Add Event</h1>
        <Form>
          <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control placeholder="Enter event name" />
          </Form.Group>
          <Form.Group controlId="formOrganizers">
              <Form.Label>Organizers</Form.Label>
              <Form.Control placeholder="Enter organizer name(s)" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <input type="date" className="form-control" />
            </Form.Group>
            <Form.Group as={Col} controlId="formEndDate">
                <Form.Label>End Date</Form.Label>
                <input type="date" className="form-control"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formVolunteerNum">
                <Form.Label>Number of Volunteers Needed</Form.Label>
                <input type="number" className="form-control"/>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formSkills">
              <Form.Label>Required Skills</Form.Label>
              <Form.Control placeholder="Enter required skills" />
          </Form.Group>
          <Form.Group controlId="formEventDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button type="submit" size='lg' className='btn-success' block>
              Create Event
          </Button>
        </Form>
        </Card>
    </div>
  );
}

export default AddEvent;