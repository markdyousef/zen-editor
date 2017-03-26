import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import BlockStyleControls from '../BlockStyleControls';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = value => this.setState({ editorState: value })
    focus = () => this.editor.focus();
    toggleBlockType = (blockType) => {
        console.log(blockType);
    }
    render() {
        const { editorState } = this.state;
        return (
            <Container onClick={this.focus}>
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <Editor
                    editorState={editorState}
                    spellCheck
                    ref={(element) => { this.editor = element; }}
                    placeholder="Write something cool..."
                    onChange={this.onChange}
                />
            </Container>
        );
    }
}
export default App;
