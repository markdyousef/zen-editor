import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import Editor from './components/Editor';
import { decorator } from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(decorator),
            files: []
        };
    }
    addFile = (file: Object) => {
        const { files } = this.state;
        files.push(file);
        this.setState({ files });
    }
    render() {
        return (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={editorState => this.setState({ editorState })}
                    spellCheck
                    placeholder="Cool"
                    readOnly={false}
                    addFile={this.addFile}
                    // showFAB
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
