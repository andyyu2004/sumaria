import axios from 'axios';
import { UserResponse } from '../types/api';
import { Result } from '../types/Result';

/** Don't want an error to be thrown on client side error */
axios.defaults.validateStatus = status => status >= 200 && status < 500;

/** API comes in pairs of functions with different methods of error handling */

export async function msignup(username: string, password: string): Promise<Result<UserResponse, string>> {
    try {
        const data = (await axios.post("/api/account", {
            username,
            password,
        })).data;
        return data.error
            ? { tag: "err", err: data.message }
            : { tag: "ok", value: data.user };

    } catch (err) {
        console.log("Signup request failed", err);
        return { tag: "err", err: err.message };
    }
}

export async function signup(username: string, password: string): Promise<UserResponse | string> {
    const result = await msignup(username, password);
    switch (result.tag) {
        case "ok": return result.value;
        case "err": return result.err;
    }
}

/** Currently the response is identical from the server as signup */
export async function mlogin(username: string, password: string): Promise<Result<UserResponse, string>> {
    try {
        const data = (await axios.post("/api/account/login", {
            username,
            password,
        })).data;
        console.log(data);
        return data.error
            ? { tag: "err", err: data.message }
            : { tag: "ok", value: data.user };
    } catch (err) {
        console.log("Login request failed", err);
        return { tag: "err", err: err.message };
    }
}


export async function login(username: string, password: string): Promise<UserResponse | string> {
    const result = await mlogin(username, password);
    switch (result.tag) {
        case "ok": return result.value;
        case "err": return result.err;
    }
}


