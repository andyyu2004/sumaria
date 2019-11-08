import { getEvents } from './events';
import { getProfiles } from './profiles';
import { login, signup, msignup, mlogin, } from './user';

const API = {
    login,
    getEvents,
    getProfiles,
    signup,
    monad: {
        msignup,
        mlogin,
    },
};

export default API;

