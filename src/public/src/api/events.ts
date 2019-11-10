import mockdata from '../mockdata.json';
import { Either, Right, Left } from '../types/Either';
import { Event } from '../types/events';

/** Return all events */
export async function getEvents(): Promise<Either<string, Event[]>> {
    return new Right(mockdata.events);
}

/** Given a username, return all the events the user is participating in */
export async function getEventsByUsername(username: string): Promise<Either<string, Event[]>> {
    return new Left("unimplemented");
}

/** Given a list of event ids, return the events in order of the closest upcoming one first */
export async function getEventsByIds(ids: number[]): Promise<Either<string, Event[]>> {
    const events = mockdata.events.filter(event => ids.includes(event.id));
    events.sort((x, y) => x.date.localeCompare(y.date));
    return new Right(events);
}


