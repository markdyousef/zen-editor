// @flow
import * as types from '../constants';
import { EditorState } from 'draft-js';

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
