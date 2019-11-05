import { User, Conversation } from "../types";
import { SetUserAction, AddConversationAction, SetConversationsAction, LogoutAction } from ".";

export const setUserAsync: (dispatch: any) => (user: User) => SetUserAction = dispatch => user =>
    dispatch({
        type: "SET_USER",
        user,
    });

export const addNewConversation: (dispatch: any) => (conv: Conversation) => AddConversationAction = dispatch => conv =>
    dispatch({
        type: "ADD_CONVERSATION",
        conv,
    });

export const setConversations: (dispatch: any) => (conv: Conversation) => SetConversationsAction = dispatch => conversations =>
    dispatch({
        type: "SET_CONVERSATIONS",
        conversations,
    });

export const logout: () => LogoutAction = () => ({
    type: "LOGOUT",
});

