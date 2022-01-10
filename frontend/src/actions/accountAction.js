import axios from 'axios';

import { ACCOUNT_LOADING, CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_SUCCESS, GET_ACCOUNT } from './types';

// create account 
export const createAccount = (contact, identity, disclosures, agreements, documents, trusted_contact) => {
    return async dispatch => {
        dispatch(accountLoading())
        // console.log(userData);
        try {
            const token = localStorage.getItem('Access-Token');
            // Headers
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            // If token, add to headers
            if (token) {
                config.headers['x-auth-token'] = token;
            }
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const response = await axios.post(`${baseUrl}/v1/accounts`, { contact, identity, disclosures, agreements, documents, trusted_contact }, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            })
            console.log(response.data)
            const data = response.data;
            const resp = await axios.post(`/api/create/account`, data, config);
            console.log(resp);
            if (resp.data) {
                dispatch({
                    type: CREATE_ACCOUNT_SUCCESS,
                    payload: resp.data
                })
            }
        } catch (e) {
            console.log(e);
            dispatch({
                type: CREATE_ACCOUNT_FAILURE,
                payload: e.response.data
            })
        }
    }
}
// Get account 
export const getAccount = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('Access-Token');
            // Headers
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            // If token, add to headers
            if (token) {
                config.headers['x-auth-token'] = token;
            }
            const response = await axios.get('/api/account', config);
            console.log(response);
            if (response.data) {
                dispatch({
                    type: GET_ACCOUNT,
                    payload: response.data
                })
            }
        } catch (e) {
            dispatch({
                type: CREATE_ACCOUNT_FAILURE,
                payload: e
            })
        }
    }
}
//account loading 
export const accountLoading = () => {
    return {
        type: ACCOUNT_LOADING
    }
}