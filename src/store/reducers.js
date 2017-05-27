import { combineReducers } from 'redux';
import editor from './Editor/reducers';
import state from './State/reducers';

export default combineReducers({
    editor,
    state
});
