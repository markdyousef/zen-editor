// @flow
import { EditorState } from 'draft-js';
import * as types from '../constants';

export type Action = {
    type?: string,
    data?: Object
};

export const setEditorState = (editorState?: EditorState): Action => (
    {
        type: types.SET_EDITOR_STATE,
        data: {
            editorState: (editorState) || EditorState.createEmpty()
        }
    }
);

export const cool = {};
