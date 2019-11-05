import { LOAD_USERS_SUCCESS } from './actionTypes';
import axios from 'axios';

const baseUrl = 'https://api.github.com/search/users?q=location%3A';

const loadUsersSuccess = (users) => {
    return {
        type: LOAD_USERS_SUCCESS,
        users
    };
}

// export function loadUsers(cityName) {
//     console.log("111111", cityName );
//     return dispatch => {
//         // axios.get(`https://api.github.com/search/users?q=location%3A`, { cityName }).then(users => {
//         //     console.log('2222222',users );
//         //         dispatch(loadUsersSuccess(users.data.items));
//         //     })
//         //     .catch(err => {
//         //         // throw err;
//         //         console.log('error22222', err);
//         //     });
//     }
// }

export const loadUsers = (cityName) => async dispatch => {
    const response = await axios.get(`${baseUrl}${cityName}`);
    dispatch(loadUsersSuccess(response.data.items))
}