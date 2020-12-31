import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { CHANGE_SEARCH_FIELD, REQUEST_DATA, setSearchField, requestData } from "./actions";
import { doFetch } from './util/fetch';
import { robots } from './model/data';

describe('setSearchField action', () => {
    it('should create CHANGE_SEARCH_FIELD action', () => {
        const action = { type: CHANGE_SEARCH_FIELD };
        const newSearchField = action.payload = 'changed';
        expect(setSearchField(newSearchField)).toEqual(action);
    });
});

jest.mock('./util/fetch');

describe('requestData action', () => {
    const middlewares = [thunkMiddleware];
    const mockStore = configureStore(middlewares);
    const initialStateStore = {};
    const store = mockStore(initialStateStore);
    afterEach(() => {
        store.clearActions();
        doFetch.mockRestore();
    });
    it('should create REQUEST_DATA.PENDING action', () => {
        const action = { type: REQUEST_DATA.PENDING };
        doFetch.mockImplementationOnce(() => Promise.resolve());
        store.dispatch(requestData());
        expect(store.getActions()[0]).toEqual(action);
    });
    it('should create REQUEST_DATA.FAILED action', async () => {
        const error = 'error message';
        const action = { type: REQUEST_DATA.FAILED, payload: error };
        doFetch.mockImplementationOnce(() => Promise.reject(error));
        try {
            await store.dispatch(requestData());
        } catch (error) {
            expect(store.getActions()[1]).toEqual(action);
        }
    });
    it('should create REQUEST_DATA.SUCCESS action', async () => {
        const data = robots;
        const action = { type: REQUEST_DATA.SUCCESS, payload: data };
        doFetch.mockImplementationOnce(() => Promise.resolve(data));
        await store.dispatch(requestData());
        await expect(store.getActions()[1]).toEqual(action);
    });
});
