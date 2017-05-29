// @flow
import { connect } from 'react-redux';
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
        onChange: (newState: Object) => dispatch(editorState.setEditorState(newState)),
        addImage: (state: Object, file: Object, loaderFn?: Promise) =>
            dispatch(editorState.addImage(state, file, loaderFn))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
