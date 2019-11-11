import mockdata from '../mockdata.json';
import { IEither, Left, Right } from '../types/Either';
import { User } from '../types/User.js';

export async function getUsers(): Promise<IEither<string, User[]>> {
    return new Right(mockdata.users);
}
 