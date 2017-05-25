// @flow
import { Record } from 'immutable';
import * as types from '../constants';
import type { Action } from './actions';

const initialState = Record({
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
