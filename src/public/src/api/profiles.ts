import mockdata from '../mockdata.json';
import { Either, Left, Right } from '../types/Either';
import { User } from '../types/User.js';

export async function getUsers(): Promise<Either<string, User[]>> {
    return new Right(mockdata.users);
}
 