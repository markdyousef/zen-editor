// @flow
import { connect } from 'react-redux';
import type { EditorState } from 'draft-js';
import { editor, editorState } from '../../store/actions';
import Editor from './Editor';


const mapStateToProps = (state: Object) => (
    {
        readOnly: state.editor.get('readOnly'),
        editorState: state.state.get('editorState')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        setReadOnly: () => dispatch(editor.setReadOnly()),
        onChange: (newState: EditorState) => dispatch(editorState.setEditorState(newState)),
        addImage: (state: EditorState, file: Object, loaderFn?: Promise) =>
            dispatch(editorState.addImage(state, file, loaderFn)),
        addCodeBlock: (state: EditorState) => dispatch(editorState.addCodeBlock(state))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
