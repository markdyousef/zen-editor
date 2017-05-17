import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import Editor from './components/Editor';
import { decorator } from './utils';

const Container = styled.div`
    ${''/* position: relative; */}
    width: 70%;
    margin: 0 auto;
    margin-top: 70px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(decorator),
            files: []
        };
    }
    addFile = (data: Object, type?: string) => {
        console.log(data);
    }
    render() {
        return (
            <Container>
                <Editor
                    editorState={this.state.editorState}
                    onChange={editorState => this.setState({ editorState })}
                    spellCheck
                    placeholder="Cool"
                    readOnly={false}
                    // addFile={this.addFile}
                    showFAB
                />
            </Container>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
