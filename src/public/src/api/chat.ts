import axios from 'axios';
import { Conversation, Message } from '../types/Chat';
import { Either, Right } from '../types/Either';
import { apiErrorHandler } from './util';

export async function createNewConversation(userid: string, name: string): Promise<Either<string, Conversation>> {
    return axios.post('/api/conversation', { userid, name })
        .then<any>(({ data }) => new Right(data.conversation))
        .catch(apiErrorHandler);
}

export async function getConversations(userid: string): Promise<Either<string, Conversation[]>> {
    return axios.get(`/api/conversation/user/${userid}`)
        .then<any>(({ data }) => new Right(data.conversations))
        .catch(apiErrorHandler);
}

export async function getMessages(conversationId: string): Promise<Either<string, Message[]>> {
    return axios.get(`/api/conversation/${conversationId}/messages`)
        .then<any>(({ data }) => new Right(data.messages))
        .catch(apiErrorHandler);
}
