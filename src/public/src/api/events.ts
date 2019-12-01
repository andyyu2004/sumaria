// import mockdata from '../mockdata.json';
import { Right, Left, Either } from '../types/Either';
import { Event } from '../types/events';
import axios from 'axios';
import { User } from '../types/User.js';
import { apiErrorHandler } from './util';

export async function addEvent(event: Event): Promise<Either<string, Event>> {
    return axios.post('/api/event', { ...event })
        .then<any>(res => new Right(res.data.event))
        .catch(apiErrorHandler);
}

// /** Return all events */
// export async function getEvents(): Promise<IEither<string, Event[]>> {
//     return new Right(mockdata.events);
// }

/** Return all events */
export async function getEvents(): Promise<Either<string, Event[]>> {
    const { data } = await axios.get(`/api/events`);
    console.log(data.events);
    return data.error ? new Left(data.message) : new Right(data.events);
}

/** Given an eventid, return all the participants */
export async function getEventParticipantsByEventId(id: string): Promise<Either<string, User[]>> {
    const { data } = await axios.get(`/api/event/${id}/participants`);
    return data.error ? new Left(data.message) : new Right(data.participants);
}

export async function getEventById(id: string): Promise<Either<string, Event>> {
    return axios.get(`/api/event/${id}`)
        .then<any>(res => new Right(res.data.event))
        .catch(apiErrorHandler);
}

export async function getEventFileIds(eventid: string) {
    return axios.get(`/api/event/${eventid}/file`)
        .then(res => new Right(res.data.file))
        .catch(apiErrorHandler);
}

export async function registerForEvent(eventid: string) {
    return axios.post(`/api/event/${eventid}/participants`)
        .then(_ => new Right("Successfully registered"))
        .catch(apiErrorHandler);
}

export async function downloadFile(eventid: string, fileid: string) {
    // http://localhost:3001/api/event/5de2f86d231f8a11ac910c3b/file/5de31c302ac3222a4a186274
    return axios.get(`/api/event/${eventid}/file/${fileid}`, { responseType: "blob" })
        .then(_ => new Right("Successfully downloaded file"))
        .catch(apiErrorHandler);
}

/** Given a list of event ids, return the events in order of the closest upcoming one first */
// export async function getEventsByIds(ids: number[]): Promise<Either<string, Event[]>> {
//     const events = mockdata.events.filter(event => ids.includes(event.id));
//     events.sort((x, y) => x.date.localeCompare(y.date));
//     return new Right(events);
// }


