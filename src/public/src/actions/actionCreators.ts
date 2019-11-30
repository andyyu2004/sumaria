import { Conversation } from "../types/Chat";
import { SetUserAction, AddConversationAction, SetConversationsAction, LogoutAction, NewNotificationAction, DismissNotificationAction, UpdateUserAction } from ".";
import { User } from "../types/User";
import { TNotification } from "../types/notifications";

export const setUserAsync: (dispatch: any) => (user: User) => SetUserAction = dispatch => user =>
    dispatch({
        type: "SET_USER",
        user,
    });

export const setUser: (user: User) => SetUserAction = user => ({
    type: "SET_USER",
    user,
});

export const updateUser: (user: User) => UpdateUserAction = user => ({
    type: "UPDATE_USER",
    user,
});

export const newNotification: (notification: TNotification) => NewNotificationAction = notification => ({
    type: "NEW_NOTIFICATION",
    notification,
});

export const dismissNotification: (id: string) => DismissNotificationAction = id => ({
    type: "DISMISS_NOTIFICATION",
    id,
});

export const addNewConversation: (dispatch: any) => (conv: Conversation) => void = dispatch => conv =>
    dispatch({
        type: "ADD_CONVERSATION",
        conv,
    });

export const setConversations: (dispatch: any) => (conv: Conversation[]) => void = dispatch => conversations =>
    dispatch({
        type: "SET_CONVERSATIONS",
        conversations,
    });

export const logout: () => LogoutAction = () => ({
    type: "LOGOUT",
});

