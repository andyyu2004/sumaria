import { getEvents, getEventsByIds, addEvent, getEventById } from './events';
import { getUsers, getUserById, getUserByUsername } from './profiles';
import { signup, login } from './user';
import { createCompany, getCompanyById } from './company';
import { createNewConversation, getConversations, getMessages } from './chat';
import axios from 'axios';

/** Don't want an error to be thrown on client side error */
// axios.defaults.validateStatus = status => status >= 200 && status <= 500;
axios.defaults.withCredentials = true;

const API = {
    getEvents,
    getUsers,
    signup,
    login,
    getEventsByIds,
    addEvent,
    getEventById,
    createCompany,
    getCompanyById,
    createNewConversation,
    getConversations,
    getMessages,
    getUserById,
    getUserByUsername,
};

export default API;

