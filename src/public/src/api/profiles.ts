import mockdata from '../mockdata.json';
import { Profile } from '../types/Profile.js';
import { Either, Left, Right } from '../types/Either';

export async function getProfiles(): Promise<Either<Profile, Profile[]>> {
    const errorUser = {
        "id": -1,
        "username": "N/A",
        "description": "N/A",
        "password": "N/A",
        "email": "N/A",
        "type": "N/A",
        "events": [0]
      };
    try {
        return !(mockdata.user)
            ? new Left(errorUser)
            : new Right(mockdata.user);

    } catch (err) {
        console.log("Profile request failed", err);
        return new Left(errorUser);
    }
}
 