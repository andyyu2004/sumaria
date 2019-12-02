import { Either, Right } from '../types/Either';
import { User } from '../types/User.js';
import axios from 'axios';
import { apiErrorHandler } from './util';

export async function getUserById(id: string): Promise<Either<string, User>> {
    return axios.get(`/api/userinfo/${id}`)
        .then<any>(res => new Right(res.data.user))
        .catch(apiErrorHandler);
}

export async function getUserByUsername(username: string): Promise<Either<string, User>> {
    return axios.get(`/api/user/${username}`)
        .then<any>(res => new Right(res.data.user))
        .catch(apiErrorHandler);
}