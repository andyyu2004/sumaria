

export type Event =  {
    id?: number,
    name: string,
    date: string,
    enddate?: string
    posteddate?: string,
    skills: string[],
    address: string,
    numVolunteers?: number,
    description: string,
    organizer?: string,
};