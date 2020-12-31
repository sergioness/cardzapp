import { doFetch } from './util/fetch';

export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
};

export const REQUEST_DATA = {
    PENDING: 'REQUEST_DATA.PENDING',
    SUCCESS: 'REQUEST_DATA.SUCCESS',
    FAILED: 'REQUEST_DATA.FAILED'
};

export const requestData = () => (dispatch) => {
    dispatch({type: REQUEST_DATA.PENDING});
    doFetch('https://jsonplaceholder.typicode.com/users')
    .then(json => dispatch({type: REQUEST_DATA.SUCCESS, payload: json}))
    .catch(error => dispatch({type: REQUEST_DATA.FAILED, payload: error}));
};