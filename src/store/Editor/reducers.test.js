// @flow
import { Map } from 'immutable';
import reducer from './reducers';
import * as actions from './actions';

const initialState = Map({
    readOnly: false
});

describe('Editor reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {})).toEqual(initialState);
    });
    it('should set readOnly to true', () => {
        const action = actions.setReadOnly();
        const nextState = reducer(initialState, action);
        expect(nextState.get('readOnly')).toEqual(true);
    });
});
