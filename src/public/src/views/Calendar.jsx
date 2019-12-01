import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import API from '../api';
//import { Left } from '../types/Either';
import { navigate } from '@reach/router';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import { withProtection } from '../components/hoc';
import { toast } from 'react-toastify';
//import { useUser } from '../hooks/useUser';
//import globalize from 'globalize';
//const localizer = globalizeLocalizer(globalize)

//const user = useUser();

function renameProperty(obj, oldName, newName) {
  if (oldName === newName) {
      return this;
  }
  // Check for the old property name to avoid ReferenceError
  if (obj.hasOwnProperty(oldName)) {
    obj[newName] = obj[oldName];
    //delete obj[oldName];
  }
  return obj;
};

const localizer = momentLocalizer(moment);

function eventStyleGetter(event, start, end, isSelected) {
  var duration = end - start;
  var bgColor = event.allDay ? 'rgba(51, 204, 204, 0.95)' : 'rgba(102, 153, 255, 0.95)';
  if (duration > 86520000) {
    bgColor = 'rgba(153, 153, 227, 0.95)';
  }
  if (event.title === 'Today') {
    bgColor = 'rgba(69, 157, 129, 0.95)';
  }
  var style = {
    backgroundColor: bgColor,
    borderRadius: '8px',
    opacity: 0.86,
    color: 'black',
    border: '0px',
    display: 'block'
  };
  return {
    style: style
  };
}

function Event({ event }) {
  return (
    <span onClick={() => {onEventClick(event)}}>
      <ReactTooltip place="top" />
      <div data-tip={event.desc}>
        <strong>{event.title}</strong>
        {event.desc && ':  ' + event.desc}
      </div>
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

const onEventClick = (event) => {
  if (event.title !== 'Today'){
    navigate( event.title ? `/event/${event.title}` : '/calendar', { state: { event } })
  }
  //navigate(event.url || '/calendar');
}


const MyCalendar = props => {

  const { username } = useSelector(state => state.user);
  const [userEvents, setEvents] = useState([]);
  // same as in profile

  const fetchEvents = useCallback(async () => {
      (await API.getEventsForUser())
      .map(setEvents)
      .mapLeft(toast.error);
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  /*
  need to get the list of events for current logged in user
  (unique id, title, start time, end time, description, unique url, etc.)
  */

  // { date, description, name, postDate, endDate, skills, address, city, province, unit, organizer }
  let events = [];

  if (userEvents.length > 0) {
    events = userEvents;
    // alter event (obj) props
    events.map((event) => {
      renameProperty(event, 'name', 'title');
      renameProperty(event, 'description', 'desc');
      //renameProperty(event, 'endDate', 'end');
      //renameProperty(event, 'date', 'start');
      event['start'] = new Date(event['date']);
      event['end'] = new Date(event['endDate']);
      return null;
    })
    events.push({
      id: 0,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 1)),
      end: new Date(new Date().setHours(new Date().getHours())),
      description: 'Today'
    });
  } else {
    // examples
    events = [
      {
        id: 0.5,
        title: 'CSC301 Presentation',
        allDay: true,
        start: new Date(2019, 11, 1),
        end: new Date(2019, 11, 2),
        desc: 'MVP DEMO (to Mike)'
      },
      {
        id: 1,
        title: 'Team 24 Meeting',
        start: new Date(2019, 10, 25),
        end: new Date(2019, 10, 29),
        desc: 'Daily Metting'
      },
      {
        id: 1.5,
        title: 'Volunteer Party',
        start: new Date(2019, 10, 26, 19, 30, 0),
        end: new Date(2019, 10, 26, 23, 30, 0),
        desc: 'Everyone with 4.0 is welcome'
      },
      {
        id: 0,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 1)),
        end: new Date(new Date().setHours(new Date().getHours()))
      },
      {
        id: 2.1,
        title: 'Volunteer Exam',
        start: new Date(2019, 10, 18, 18, 0, 0),
        end: new Date(2019, 10, 18, 20, 5, 0),
        desc: 'Try not to fail!'
      },
      {
        id: 3.3,
        title: 'International Student Fund Raising',
        allDay: true,
        start: new Date(2019, 10, 18),
        end: new Date(2019, 10, 19),
        desc: 'GOAL: 100000000000000000000000000000'
      },
      {
        id: 4.7,
        title: 'UofT Beach Cleanup',
        start: new Date(2019, 10, 26, 6, 30, 0),
        end: new Date(2019, 10, 26, 22, 30, 0),
        desc: 'Tri-campus'
      }
    ];
    events = [];
    events.push({
      id: 0,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 1)),
      end: new Date(new Date().setHours(new Date().getHours())),
      description: 'Today'
    });
    // alter event (obj) props
    events.map((event) => {
      renameProperty(event, 'title', 'name');
      renameProperty(event, 'desc', 'description');
      renameProperty(event, 'end', 'endDate');
      renameProperty(event, 'start', 'date');
      return null;
    })
  }


  return (<div>
    <Calendar
      popup
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultDate={new Date()}
      style={{ height: 600 }}
      defaultView={Views.MONTH}
      eventPropGetter={eventStyleGetter}
      components={{
        event: Event,
        agenda: {
          event: EventAgenda,
        },
      }}
    />
  </div>)
};
// onSelectEvent={onEventClick}

export default withProtection(MyCalendar);