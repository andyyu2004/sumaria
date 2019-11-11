import { getEvents, getEventsByIds, getEventsByUsername, addEvent, getEventById } from './events';
import { getUsers } from './profiles';
import { signup, login, getUserByUsername } from './user';
import { createCompany, getCompanyById } from './company';

const API = {
    getEvents,
    getUsers,
    signup,
    login,
    getUserByUsername,
    getEventsByIds,
    getEventsByUsername,
    addEvent,
    getEventById,
    createCompany,
    getCompanyById,
};

export default API;

