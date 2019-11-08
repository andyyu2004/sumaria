export type User = {
    firstname?: string;
    surname?: string;
    username?: string;
    id?: number;
    _id?: string; // Mongo uses the _id i think
    usertype: string;
    description?: string,
    password?: string,
    email?: string,
    events: number[],
};

export enum UserType {
    Volunteer = "Volunteer",
    Admin = "Admin",
    None = "None",
};