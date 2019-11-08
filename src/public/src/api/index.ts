import { getEvents, getEventsByIds, getEventsByUsername } from './events';
import { getUsers } from './profiles';
import { signup, login, getUserByUsername } from './user';

const API = {
    getEvents,
    getUsers,
    signup,
    login,
    getUserByUsername,
    getEventsByIds,
    getEventsByUsername,
};

export default API;

