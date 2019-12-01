import { getEvents, addEvent, getEventById, registerForEvent, getEventFileIds } from './events';
import { getUserById, getUserByUsername } from './profiles';
import { signup, login, updateUser } from './user';
import { createCompany, getCompanyById } from './company';
import { createNewConversation, getConversations, getMessages } from './chat';
import axios from 'axios';

/** Don't want an error to be thrown on client side error */
// axios.defaults.validateStatus = status => status >= 200 && status <= 500;
axios.defaults.withCredentials = true;

const API = {
    getEvents,
    signup,
    login,
    updateUser,
    // getEventsByIds,
    // getEventsByUsername,
    addEvent,
    getEventById,
    createCompany,
    getCompanyById,
    createNewConversation,
    getConversations,
    getEventFileIds,
    getMessages,
    getUserById,
    getUserByUsername,
    registerForEvent,
};

export default API;

