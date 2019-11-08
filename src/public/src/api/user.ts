import axios from 'axios';
import { UserResponse } from '../types/api';
import { Result } from '../types/Result';
import { Left, Right, Either } from '../types/Either';
import { id } from '../util';

/** Don't want an error to be thrown on client side error */
axios.defaults.validateStatus = status => status >= 200 && status < 500;

/** API comes in pairs of functions with different methods of error handling */

export async function msignup(username: string, password: string): Promise<Either<string, UserResponse>> {
    try {
        const data = (await axios.post("/api/account", {
            username,
            password,
        })).data;
        return data.error
            ? new Left(data.message)
            : new Right(data.user);

    } catch (err) {
        console.log("Signup request failed", err);
        return new Left(err.message);
    }
}

export async function signup(username: string, password: string): Promise<UserResponse | string> {
    return (await msignup(username, password)).match<UserResponse | string>(id, id);
}

/** Currently the response is identical from the server as signup */
export async function mlogin(username: string, password: string): Promise<Either<string, UserResponse>> {
    try {
        const data = (await axios.post("/api/account/login", {
            username,
            password,
        })).data;
        
        return data.error
            ? new Left(data.message)
            : new Right(data.user);
    } catch (err) {
        console.log("Login request failed", err);
        return new Left(err.message); 
    }
}


export async function login(username: string, password: string): Promise<UserResponse | string> {
    return (await mlogin(username, password)).match<UserResponse | string>(id, id);
}


