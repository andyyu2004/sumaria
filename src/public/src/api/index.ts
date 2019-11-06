import { getEvents } from './events';
import { login, signup, msignup, mlogin, } from './user';

const API = {
    login,
    getEvents,
    signup,
    monad: {
        msignup,
        mlogin,
    },
};

export default API;

