export type User = {
    firstname?: string;
    surname?: string;
    username?: string;
    _id?: string;
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