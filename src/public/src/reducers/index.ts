import socketio from 'socket.io-client';
import { Action } from "../actions";
import { AppState } from "../types/states";
import { UserType } from "../types/User";
import uuid from 'uuid/v4';

const initialState: AppState = {
    user: { usertype: UserType.None, _id: "", events: [] },
    conversations: [],
    notifications: [
        { message: "Test Notification 0", id: uuid() },
        { message: "Test Notification 1", id: uuid() },
    ],
}

// const rootReducer = combineReducers(user)
const rootReducer = (state: AppState = initialState, action: Action) => {
    const { conversations, notifications } = state;

    switch (action.type) {
        case "SET_USER": {
            const { user } = action;
            const socket = socketio('/', {
                query: `username=${user.username}`
            });
            return {
                ...state,
                user,
                socket,
            };
        }

        case "UPDATE_USER": {
            const { user } = action;
            return {
                ...state,
                user
            };
        }

        case "ADD_CONVERSATION": {
            const { conv } = action;
            return {
              ...state,
              conversations: [...conversations, conv],
            };
        }
    
        case "SET_CONVERSATIONS": {
            const { conversations } = action;
            return {
                ...state,
                conversations,
            }
        }

        case "NEW_NOTIFICATION": {
            const { notification } = action;
            return {
                ...state,
                notifications: [notification, ...notifications]
            };
        }

        case "DISMISS_NOTIFICATION": {
            const { id } = action;
            const newNotifications = [...notifications];
            const index = newNotifications.findIndex(n => n.id === id);
            newNotifications.splice(index, 1);
            return {
                ...state,
                notifications: newNotifications,
            };
        }
    
        case "LOGOUT": {
            return initialState;
        }

        default: return state;
        
    }
    
};

export default rootReducer;