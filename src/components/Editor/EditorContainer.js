// @flow
import { connect } from 'react-redux';
import { setReadOnly } from '../../store/Editor/actions';
import Editor from './Editor';


const mapStateToProps = (state: Object) => (
    {
        readOnly: state.editor.readOnly
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        setReadOnly: () => dispatch(setReadOnly())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
