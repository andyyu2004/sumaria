import { Conversation } from "../types/Chat";
import { User } from "../types/User";
import { TNotification } from "../types/notifications";

export type Action 
    = SetUserAction
    | AddConversationAction
    | SetConversationsAction
    | NewNotificationAction
    | DismissNotificationAction
    | LogoutAction;

export type NewNotificationAction = {
    type: "NEW_NOTIFICATION",
    notification: TNotification,
};

export type DismissNotificationAction = {
    type: "DISMISS_NOTIFICATION";
    id: string;
};

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