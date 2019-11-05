import mockdata from '../mockdata.json';
import { getEvents } from './events';

type LoginResult = {
    skdfjlsdf: "sdf"
};

async function login(username: string, password: string): Promise<LoginResult> {
    const res = await fetch('/api/');
    return {
        skdfjlsdf: "sdf"
    };
}

const API = {
    login,
    getEvents,
};

export default API;

