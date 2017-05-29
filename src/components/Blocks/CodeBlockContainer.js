// @flow
import { connect } from 'react-redux';
import { editor } from '../../store/actions';
import CodeBlock from './CodeBlock';

const mapStateToProps = (state: Object) => (
    {
        readOnly: state.editor.get('readOnly')
    }
);

const mapDispatchToProps = (dispatch: Function) => (
    {
        setReadOnly: () => dispatch(editor.setReadOnly())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CodeBlock);
