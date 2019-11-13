import mockdata from '../mockdata.json';
import { IEither, Left, Right } from '../types/Either';
import { User } from '../types/User.js';
import axios from 'axios';

export async function getUsers(): Promise<IEither<string, User[]>> {
    return new Right(mockdata.users);
}

export async function getUserById(id: string): Promise<IEither<string, User>> {
    console.log(id);
    const { data } = await axios.get(`/api/userinfo/${id}`);
    return data.error ? new Left(`Could not find user with id ${id}`) : new Right(data.user);
}

export async function getUserByUsername(username: string): Promise<IEither<string, User>> {
    console.log(username);
    const { data } = await axios.get(`/api/userinfobyusername/${username}`);
    return data.error ? new Left(`Could not find user with id ${username}`) : new Right(data.user);
}