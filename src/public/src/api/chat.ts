import axios from 'axios';
import { User } from '../types';

export async function apilogin(username: string, firstname: string, surname: string): Promise<User> {
    console.log("Before login")
    const res = await axios.post('/api/login', {
        firstname,
        surname,
        username,
    });
    console.log("After login")
    console.log(res);
    // return res.data.user;
    return res.data;
}

export async function apiNewConversation(userid: string, name: string) {
    const res = await axios.post('/api/createconversation', {
        userid,
        name,
    });
    return res.data;
}

export async function apiGetConversations(userid: string) {
    const res = await axios.get(`/api/conversations/${userid}`);
    return res.data;
}

export async function apiGetMessages(conversationId: string) {
    const res = await axios.get(`/api/messages/${conversationId}`);
    return res.data;
}

export async function apiGetUsers() {
    const res = await axios.get('/api/users');
    return res.data;
}

export async function addUserToConversation(conversationId: string, username: string) {
    const res = await axios.post('api/conversations/add', {
        conversationId,
        username,
    });
    return res.data;
}