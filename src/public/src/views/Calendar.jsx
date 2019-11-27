import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
//import API from '../api';
//import { Left } from '../types/Either';
import { navigate } from '@reach/router';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';

const localizer = momentLocalizer(moment);

/*
need api to get the list of events for current logged in user
(unique id, title, start time, end time, description, unique url, etc.)
*/
const events = [
  {
    id: 0,
    title: 'CSC301 Presentation',
    allDay: true,
    start: new Date(2019, 11, 1),
    end: new Date(2019, 11, 2),
    desc: 'MVP DEMO (to Mike)',
    url: '/'
  },
  {
    id: 1,
    title: 'Team 24 Meeting',
    start: new Date(2019, 10, 25),
    end: new Date(2019, 10, 29),
    desc: 'Daily Metting',
    url: '/'
  },
  {
    id: 1.5,
    title: 'Volunteer Party',
    start: new Date(2019, 10, 26, 19, 30, 0),
    end: new Date(2019, 10, 26, 23, 30, 0),
    desc: 'Everyone with 4.0 is welcome',
    url: '/'
  },
  {
    id: 2,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    url: '/'
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
    desc: 'GOAL: 100000000000000000000000000000',
    url: '/'
  },
  {
    id: 4.7,
    title: 'UofT Beach Cleanup',
    start: new Date(2019, 10, 26, 6, 30, 0),
    end: new Date(2019, 10, 26, 22, 30, 0),
    desc: 'Tri-campus',
    url: '/'
  }
];

function eventStyleGetter(event, start, end, isSelected) {
  var duration = end - start;
  var bgColor = event.allDay ? 'rgba(51, 204, 204, 0.95)' : 'rgba(102, 153, 255, 0.95)';
  if (duration > 86520000) {
    bgColor = 'rgba(153, 153, 227, 0.95)';
  }
  if (event.title == 'Today') {
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
    <span>
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

const onEventClick = event => {

  navigate(event.url || '/calendar');
}


const MyCalendar = props => (
  <div>
    <Calendar
      popup
      onSelectEvent={event => onEventClick(event)}
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
  </div>
)

export default MyCalendar;