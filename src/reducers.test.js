import { CHANGE_SEARCH_FIELD, REQUEST_DATA } from "./actions";
import { searchCard, requestData } from './reducers';

describe('searchCard reducer', () => {
    const initialState = {
        searchField: ''
    };
    it('should return the initial state on missing input (by default)', () => {
        expect(searchCard()).toEqual(initialState);
    });
    it('should handle CHANGE_SEARCH_FIELD action', () => {
        const newState = Object.assign({}, initialState);
        const searchField = newState.searchField = 'changed';
        const action = { type: CHANGE_SEARCH_FIELD, payload: searchField};
        expect(searchCard(initialState, action)).toEqual(newState);
    });
});

describe('requestData reducer', () => {
    const initialState = {
        isPending: false,
        data: [],
        error: ''
    };
    it('should return the initial state on missing input (by default)', () => {
        expect(requestData()).toEqual(initialState);
    });
    it('should handle REQUEST_DATA.PENDING action', () => {
        const newState = Object.assign({}, initialState);
        newState.isPending = true;
        expect(requestData(initialState, { type: REQUEST_DATA.PENDING })).toEqual(newState);
    });
    it('should handle REQUEST_DATA.FAILED action', () => {
        const newState = Object.assign({}, initialState);
        const payload = newState.error = 'something went wrong';
        expect(requestData(initialState, { type: REQUEST_DATA.FAILED, payload: payload })).toEqual(newState);
    });
    it('should handle REQUEST_DATA.SUCCESS action', () => {
        const newState = Object.assign({}, initialState);
        const payload = newState.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz'
            }
        ];
        expect(requestData(initialState, { type: REQUEST_DATA.SUCCESS, payload: payload })).toEqual(newState);
    });
});
