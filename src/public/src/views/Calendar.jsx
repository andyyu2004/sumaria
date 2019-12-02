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
import { useUser } from '../hooks/useUser';
//import { useUser } from '../hooks/useUser';
//import globalize from 'globalize';
//const localizer = globalizeLocalizer(globalize)

//const user = useUser();

const localizer = momentLocalizer(moment);

const Event = ({ event }) => (
  <span onClick={() => {onEventClick(event)}}>
    <ReactTooltip place="top" />
    <div data-tip={event.desc}>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </div>
  </span>
);

const EventAgenda = ({ event }) => (
  <span>
    <em>{event.title}</em>
    <p>{event.desc}</p>
  </span>
);


const onEventClick = (event) => {
  if (event.title !== 'Today')
    navigate( event.title ? `/event/${event._id}` : '/calendar', { state: { event } })
};


const MyCalendar = props => {


  const user = useUser();

function eventStyleGetter(event, start, end, isSelected) {


  var duration = end - start;
  var bgColor = event.allDay ? 'rgba(51, 204, 204, 0.95)' : 'rgba(102, 153, 255, 0.95)';
  if (duration > 86520000) {
    bgColor = 'rgba(153, 153, 227, 0.95)';
  }
  if (event.title === 'Today') {
    bgColor = 'rgba(69, 157, 129, 0.95)';
  }

  if (event.creatorid === user._id){
    bgColor = 'rgba(209, 107, 159, 0.95)';
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

  const [userEvents, setEvents] = useState([]);
  // same as in profile

  const fetchEvents = useCallback(async () => {
    (await API.getEventsForUser())
      .map(setEvents)
      .mapLeft(toast.error);
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  // { date, description, name, postDate, endDate, skills, address, city, province, unit, organizer }
  let events = [];

  // use user registered events
  if (userEvents.length > 0) {
    events = userEvents;
  }
  // remove null value from the event list
  events = events.filter(function (event) {
    return event != null;
  });
  // map event (obj) props for calendar to render
  events.map(event => {
    event['title'] = event.name;
    event['desc'] = event.description;
    event['start'] = new Date(event['date']);
    event['end'] = new Date(event['endDate']);
  })
  events.push({
    id: 0,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 1)),
    end: new Date(new Date().setHours(new Date().getHours())),
    description: 'Today'
  });


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