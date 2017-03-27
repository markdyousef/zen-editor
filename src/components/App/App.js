import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import Toolbar from '../Toolbar';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = editorState => this.setState({ editorState })
    focus = () => this.editor.focus();
    toggleBlockType = (blockType) => {
        const { editorState } = this.state;
        this.onChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }
    render() {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        console.log(contentState.getSelectionBefore());
        return (
            <div>
                <Toolbar
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <Container onClick={this.focus}>
                    <Editor
                        editorState={editorState}
                        spellCheck
                        ref={(element) => { this.editor = element; }}
                        placeholder="Write something cool..."
                        onChange={this.onChange}
                    />
                </Container>
            </div>
        );
    }
}
