import { combineReducers } from "redux"
import { Action } from "../actions";
import { UserType } from "../types/User";
import { AppState } from "../types/states";
import socketio from 'socket.io-client';

const initialState: AppState = {
    user: { usertype: UserType.None },
    conversations: [],
}

// const rootReducer = combineReducers(user)
const rootReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case "SET_USER": {
            const { user } = action;
            /* How to not hard cost the url for socket*/
            const socket = socketio('/', {
                query: `username=${user.username}`
            });
            return {
                ...state,
                user,
                socket,
            };
        }

        case "ADD_CONVERSATION": {
            const { conversations } = state;
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
    
        case "LOGOUT": {
            return {
                user: { usertype: UserType.None },
                conversations: [],
            };
        }

        default: return state;
        
    }
    
};

export default rootReducer;