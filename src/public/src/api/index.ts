import { getEvents, getEventsByIds, getEventsByUsername, addEvent, getEventById } from './events';
import { getUsers, getUserById, getUserByUsername } from './profiles';
import { signup, login } from './user';
import { createCompany, getCompanyById } from './company';
import { createNewConversation, getConversations, getMessages } from './chat';

const API = {
    getEvents,
    getUsers,
    signup,
    login,
    getEventsByIds,
    getEventsByUsername,
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

