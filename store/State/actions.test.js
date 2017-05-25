// @flow
import { EditorState } from 'draft-js';
import * as actions from './actions';
import * as types from '../constants';

jest.mock('draft-js/lib/generateRandomKey', () => () => '123');

describe('actions', () => {
    it(`should return ${types.SET_EDITOR_STATE} with editorState`, () => {
        const expectedAction = {
            type: types.SET_EDITOR_STATE,
            data: {
                editorState: EditorState.createEmpty()
            }
        };
        expect(actions.setEditorState()).toEqual(expectedAction);
    });
});
