import axios from 'axios';
import { USER_LOADING, USER_LOGIN, USER_LOGIN_ERROR } from './types';

// user login 
export const login = (userObj) => {
    return async dispatch => {
        dispatch(userLoading())
        try {
            const response = await axios.post(`/api/login`, { data: userObj });
            if (response.data) {
                dispatch({
                    type: USER_LOGIN,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: USER_LOGIN_ERROR,
                payload: error
            })
        }
    }
}
// user loading
export const userLoading = () => {
    return {
        type: USER_LOADING
    }
}