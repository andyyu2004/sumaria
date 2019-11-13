import axios from 'axios';
import mockdata from '../mockdata.json';
import { UserResponse } from '../types/api';
import { IEither, Left, Right } from '../types/Either';
import { User } from '../types/User';

/** Don't want an error to be thrown on client side error */
axios.defaults.validateStatus = status => status >= 200 && status < 500;

export async function signup(username: string, password: string): Promise<IEither<string, UserResponse>> {
    try {
        const { data } = await axios.post("/api/account", {
            username,
            password,
        });
        return data.error
            ? new Left(data.message)
            : new Right(data.user);

    } catch (err) {
        console.log("Signup request failed", err);
        return new Left(err.message);
    }
}

// export async function signup(username: string, password: string): Promise<UserResponse | string> {
//     return (await msignup(username, password)).match<UserResponse | string>(id, id);
// }

/** Currently the response is identical from the server as signup */
export async function login(username: string, password: string): Promise<IEither<string, UserResponse>> {
    try {
        const { data } = await axios.post("/api/account/login", {
            username,
            password,
        });
        console.log(data);
        return data.error
            ? new Left(data.message)
            : new Right(data.user);
    } catch (err) {
        console.log("Login request failed", err);
        return new Left(err.message); 
    }
}


// export async function getUserByUsername(username: string): Promise<IEither<string, User>> {
//     const users = mockdata.users;
//     const user = users.find(x => x.username === username);
//     if (!user) return new Left(`Could not find user with username ${username}`);
//     return new Right(user);
// }


