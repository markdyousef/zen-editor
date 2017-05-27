// @flow
import {
    EditorState,
    AtomicBlockUtils
} from 'draft-js';

export default (editorState: EditorState, data: Object) => {
    const type = 'image';
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(type, 'IMMUTABLE', data);
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
    );
    return EditorState.forceSelection(
        newEditorState,
        editorState.getCurrentContent().getSelectionAfter()
    );
};
