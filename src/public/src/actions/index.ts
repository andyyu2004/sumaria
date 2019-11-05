import { User, Conversation } from "../types";

export type Action 
    = SetUserAction
    | AddConversationAction
    | SetConversationsAction
    | LogoutAction;

export type SetUserAction = {
    type: "SET_USER",
    user: User,
};

export type AddConversationAction = {
    type: "ADD_CONVERSATION",
    conv: Conversation,
};

export type SetConversationsAction = {
    type: "SET_CONVERSATIONS",
    conversations: Conversation[],
};

export type LogoutAction = {
    type: "LOGOUT",
};