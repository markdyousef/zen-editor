// @flow
import { Map, List } from 'immutable';
import { EditorState } from 'draft-js';
import * as types from '../constants';
import type { Action } from './actions';
import { decorator } from '../../utils';

const initialState = Map({
    isLoading: false,
    editorState: EditorState.createEmpty(decorator),
    currentContent: null,
    currentInlineStyle: null,
    selection: null
});

export default (state = initialState, action: Action) => {
    switch (action.type) {
    case types.SET_EDITOR_STATE:
        if (action.data && action.data.editorState) {
            const { data: { editorState } } = action;
            return state
                .set('editorState', editorState)
                .set('currentContent', editorState.getCurrentContent())
                .set('currentInlineStyle', editorState.getCurrentInlineStyle())
                .set('selection', editorState.getSelection());
        }
        return state;
    default : return state;
    }
};
