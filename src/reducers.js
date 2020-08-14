import { CHANGE_SEARCH_FIELD, REQUEST_DATA } from "./actions";

const initialStateІSearch = {
    searchField: ''
}
export const searchCard = (state = initialStateІSearch,
                           action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: {
            return {
                ...state,
                searchField: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const initialStateData = {
    isPending: false,
    data: [],
    error: ''
}
export const requestData = (state = initialStateData,
                            action = {}) => {
    switch (action.type) {
        case REQUEST_DATA.PENDING: {
            return { ...state, isPending: true}
        }
        case REQUEST_DATA.SUCCESS: {
            return { ...state, isPending: false, data: action.payload}
        }
        case REQUEST_DATA.FAILED: {
            return { ...state, isPending: false, error: action.payload}
        }
        default: {
            return state;
        }
    }
};