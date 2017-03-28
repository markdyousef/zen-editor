import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import FloatingActionButton from '../FloatingActionButton';

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
    toggleInlineStyle = (inlineStyle) => {
        const { editorState } = this.state;
        this.onChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }
    render() {
        const { editorState } = this.state;
        const showToolbar = !editorState.getSelection().isCollapsed();
        console.log(editorState);
        return (
            <div>
                <Container onClick={this.focus}>
                    <Editor
                        editorState={editorState}
                        spellCheck
                        ref={(node) => { this.editor = node; }}
                        placeholder="Write something cool..."
                        onChange={this.onChange}
                    />
                </Container>
                <FloatingActionButton
                    editorState={editorState}
                    focus={this.focus}
                    setEditorState={this.onChange}
                />
                <Toolbar
                    editorState={editorState}
                    toggleBlockType={this.toggleBlockType}
                    toggleInlineStyle={this.toggleInlineStyle}
                    focus={this.focus}
                    editorNode={this.editor}
                    showToolbar={showToolbar}
                />
            </div>
        );
    }
}
