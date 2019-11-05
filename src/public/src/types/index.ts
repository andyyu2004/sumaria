import { Action } from "../actions";

export type User = {
    firstname: string,
    surname: string,
    username: string,
    _id: string,
};

export type AppState = {
    user?: User,
    conversations: Conversation[],
    socket?: SocketIOClient.Socket,
};

export type Conversation = {
    name: string,
    members: string[],
    _id: string,
};

export type Message = {
    userid: string,
    username: string,
    conversationId: string,
    createdAt: string,
    message: string,
    updatedAt: string,
    _id: string,
};

