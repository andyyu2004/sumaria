import axios from 'axios';
// import mockdata from '../mockdata.json';
import { UserResponse } from '../types/api';
import { IEither, Right } from '../types/Either';
import { apiErrorHandler } from './util';

export async function signup(registerInfo: any): Promise<IEither<string, UserResponse>> {
    //console.log('api: ', registerInfo);
    return axios.post("/api/user", registerInfo)
        .then<any>(({ data }) => new Right(data.user))
        .catch(apiErrorHandler);
}

// export async function signup(username: string, password: string): Promise<UserResponse | string> {
//     return (await msignup(username, password)).match<UserResponse | string>(id, id);
// }

/** Currently the response is identical from the server as signup */
export async function login(username: string, password: string): Promise<IEither<string, UserResponse>> {
    return axios.post("/api/user/login", { username, password })
        .then<any>(({ data }) => new Right(data.user))
        .catch(apiErrorHandler);
}

export async function updateUser(user: any): Promise<IEither<string, UserResponse>> {
    return axios.patch(`/api/user/${user._id}`, user)
        .then<any>(({ data }) => new Right(data.user))
        .catch(apiErrorHandler);
}


// export async function getUserByUsername(username: string): Promise<IEither<string, User>> {
//     const users = mockdata.users;
//     const user = users.find(x => x.username === username);
//     if (!user) return new Left(`Could not find user with username ${username}`);
//     return new Right(user);
// }


