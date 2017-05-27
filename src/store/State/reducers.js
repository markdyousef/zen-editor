// @flow
import { Map } from 'immutable';
import * as types from '../constants';
import type { Action } from './actions';

const initialState = Map({
    isLoading: false,
    editorState: null
});

export default (state = initialState, action: Action) => {
    switch (action.type) {
    case types.SET_EDITOR_STATE:
        return state;
    default : return state;
    }
};
