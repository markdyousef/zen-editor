// @flow
import { Map } from 'immutable';
import { EditorState } from 'draft-js';
import reducer from './reducers';
import * as actions from './actions';
import * as types from '../constants';

const initialState = Map({
    isLoading: false,
    editorState: null
});

describe('state reducer', () => {
    it('should return initialState', () => {
        expect(reducer(initialState, {})).toEqual(initialState);
    });
    it('should set editorState', () => {
        const action = actions.setEditorState();
        expect(reducer(initialState, action)).not.toEqual(initialState);
    });
});
