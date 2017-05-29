// @flow
import { EditorState, AtomicBlockUtils } from 'draft-js';
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

const insertBlock = (editorState: EditorState, data: Object) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(data.type, 'IMMUTABLE', data);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
    );
    return setEditorState(EditorState.forceSelection(
        newEditorState,
        editorState.getCurrentContent().getSelectionAfter()
    ));
};

export const addImage = (editorState: EditorState, file: Object, loaderFn?: Promise): Action => {
    const src = URL.createObjectURL(file);
    const data = {
        url: src,
        type: 'image',
        display: 'medium',
        name: file.name
    };
    return insertBlock(editorState, data);

    // TODO: change this with update based on entity key
    // if (loaderFn) {
    //     loaderFn(file)
    //         .then((res) => {
    //             insertBlock(editorState, { ...res });
    //         })
    //         .catch(err => console.log(err));
    // }
};

export const addCodeBlock = (editorState: EditorState): Action => {
    const data = {
        type: 'code'
    };
    return insertBlock(editorState, data);
};

export const addEmbed = (editorState: EditorState, src: string): Action => {
    const data = {
        url: src,
        type: 'embed'
    };
    return insertBlock(editorState, data);
};
