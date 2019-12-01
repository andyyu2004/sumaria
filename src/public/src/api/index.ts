import { getEvents, deleteEvent, addEvent, cancelEventRegistration, getEventById, getEventsForUser, registerForEvent, getEventParticipantsByEventId, getEventFileIds, downloadFile } from './events';
import { getUserById, getUserByUsername } from './profiles';
import { signup, login, updateUser } from './user';
import { createCompany, getCompanyById } from './company';
import { createNewConversation, getConversations, getMessages } from './chat';
import axios from 'axios';

/** Don't want an error to be thrown on client side error */
// axios.defaults.validateStatus = status => status >= 200 && status <= 500;
axios.defaults.withCredentials = true;

const API = {
    deleteEvent,
    getEventsForUser,
    cancelEventRegistration,
    getEvents,
    signup,
    login,
    updateUser,
    getEventParticipantsByEventId,
    // getEventsByIds,
    // getEventsByUsername,
    addEvent,
    downloadFile,
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

