import axios from 'axios';
import { User } from '../types/User';
import { Left, Right, Either } from '../types/Either';
import { Conversation, Message } from '../types/Chat';

// export async function apilogin(username: string, firstname: string, surname: string): Promise<User> {
//     console.log("Before login")
//     const res = await axios.post('/api/login', {
//         firstname,
//         surname,
//         username,
//     });
//     console.log("After login")
//     console.log(res);
//     // return res.data.user;
//     return res.data;
// }

export async function createNewConversation(userid: string, name: string): Promise<Either<string, Conversation>> {
    const { data } = await axios.post('/api/createconversation', {
        userid,
        name,
    });
    return data.error ? new Left(data.message) : new Right(data.conversation);
}

export async function getConversations(userid: string): Promise<Either<string, Conversation[]>> {
    const { data } = await axios.get(`/api/conversations/${userid}`);
    return data.error ? new Left(data.message) : new Right(data.conversations);
}

export async function getMessages(conversationId: string): Promise<Either<string, Message[]>> {
    const { data } = await axios.get(`/api/messages/${conversationId}`);
    return data.error ? new Left(data.message) : new Right(data.messages);
}

// export async function addUserToConversation(conversationId: string, username: string) {
//     const { data } = await axios.post('api/conversations/add', {
//         conversationId,
//         username,
//     });
//     return data.error ? new Left(data.message) : new Right(data.messages);
// }
