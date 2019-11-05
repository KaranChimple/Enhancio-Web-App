import {LOAD_USERS_SUCCESS} from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
    switch (action.type) {
        case LOAD_USERS_SUCCESS: {
            console.log('66666666', action);
            return action.users;
        }
        default:
            return state;
    }
}