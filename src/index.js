import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import Editor from './components/Editor';
import decorator from './utils/decorator';

class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(decorator)
        };
    }
    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={editorState => this.setState({ editorState })}
                spellCheck
                placeholder="Cool"
                readOnly={false}
            />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
