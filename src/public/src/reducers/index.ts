import { combineReducers } from "redux"
import { Action } from "../actions";
import { UserType } from "../types/User";
import { AppState } from "../types/states";

const initialState: AppState = {
    user: { usertype: UserType.None },
    conversations: [],
}

// const rootReducer = combineReducers(user)
const rootReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case "SET_USER": {
            const { user } = action;
            return {
                ...state,
                user,
            };
        }
        default: return state;
    }
    
};

export default rootReducer;