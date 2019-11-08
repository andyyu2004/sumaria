import mockdata from '../mockdata.json';
import { Profile } from '../types/Profile.js';

export async function getProfiles(): Promise<Profile[]> {
    return mockdata.user;
}
