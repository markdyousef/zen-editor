// @flow
import {
    EditorState,
    AtomicBlockUtils
} from 'draft-js';

const addToState = (editorState: EditorState, data: Object) => {
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

export default (editorState: EditorState, file: Object, loaderFn?: Promise): EditorState => {
    if (loaderFn) {
        loaderFn(file)
            .then((res) => {
                // TODO: change this with update based on entity key
                return addToState(editorState, { ...res });
            })
            .catch(err => console.log(err));
    }
    const src = URL.createObjectURL(file);
    const data = {
        url: src,
        type: 'image',
        display: 'medium',
        name: file.name
    };
    return addToState(editorState, data);
};
