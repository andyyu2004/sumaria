import mockdata from '../mockdata.json';
import { Either, Left, Right } from '../types/Either';
import { Event } from '../types/events'

export async function getEvents(): Promise<Either<Event[], Event[]>> {
    const errorEvent = [{
        "id": -1,
        "name": "N/A",
        "date": "2019-10-15T09:00:00.000Z",
        "posteddate": "2019-10-05T09:00:00.000Z",
        "skills": [],
        "address": "N/A",
        "description": "N/A",
        "organizer": "N/A"
      }];
    try {
        return !(mockdata.events)
            ? new Left(errorEvent)
            : new Right(mockdata.events);

    } catch (err) {
        console.log("Events request failed", err);
        return new Left(errorEvent);
    }
} 

