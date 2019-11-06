export type User = {
    firstname?: string;
    surname?: string;
    username?: string;
    _id?: string;
    usertype: UserType;
};

export enum UserType {
    Volunteer,
    Admin,
    None,
};