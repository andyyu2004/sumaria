import mockdata from '../mockdata.json';
import { IEither, Right, Left, Either } from '../types/Either';
import { Event } from '../types/events';
import axios from 'axios';

export async function addEvent(event: Event): Promise<Either<string, Event>> {
    const { data } = await axios.post('/api/event', {
        ...event,
    });

    return data.error ? new Left(data.message) : new Right(data.event);
}

/** Return all events */
export async function getEvents(): Promise<IEither<string, Event[]>> {
    return new Right(mockdata.events);
}

/** Given a username, return all the events the user is participating in */
export async function getEventsByUsername(username: string): Promise<IEither<string, Event[]>> {
    return new Left("unimplemented");
}

/** Given a list of event ids, return the events in order of the closest upcoming one first */
export async function getEventsByIds(ids: number[]): Promise<IEither<string, Event[]>> {
    const events = mockdata.events.filter(event => ids.includes(event.id));
    events.sort((x, y) => x.date.localeCompare(y.date));
    return new Right(events);
}


