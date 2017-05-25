// @flow
import { Record } from 'immutable';
import { EditorState } from 'draft-js';
import reducer from './reducers';
import * as actions from './actions';
import * as types from '../constants';

const initialState = Record({
    isLoading: false,
    editorState: null
});

describe('state reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {})).toEqual(initialState);
    })
})
