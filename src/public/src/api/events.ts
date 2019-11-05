import mockdata from '../mockdata.json';

export async function getEvents(): Promise<Event[]> {
    return mockdata.events;
}


