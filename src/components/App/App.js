import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
// import createImagePlugin from 'draft-js-image-plugin';
// TODO: add custom styling
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import FloatingActionButton from '../FloatingActionButton';
import customRenderer from '../../utils/customRenderer';
import { Block } from '../../utils/constants';

const Container = styled.div`
    padding: 30px 30px;
    box-sizing: border-box;
    position: relative;
`;

const EditorContainer = styled.div`
    cursor: text;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    max-width: 700px;
`;

// const imagePlugin = createImagePlugin();
//
// const plugins = [imagePlugin];

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = editorState => this.setState({ editorState })
    onTab = (event) => {
        const { editorState } = this.state;
        // depth on ul and ol
        const levels = 2;
        const newEditorState = RichUtils.onTab(event, editorState, levels);
        if (newEditorState !== editorState) {
            this.onChange(newEditorState);
        }
    };
    getEditorState = () => this.state.editorState;
    focus = () => this.editor.focus();
    toggleBlockType = (blockType) => {
        const { editorState } = this.state;
        const type = RichUtils.getCurrentBlockType(editorState);
        if (type.indexOf(`${Block.ATOMIC}:`) === 0) return;
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
        return (
            <Container>
                <EditorContainer>
                    <Editor
                        ref={(node) => { this.editor = node; }}
                        editorState={editorState}
                        spellCheck
                        placeholder="Write something cool..."
                        onChange={this.onChange}
                        blockRendererFn={customRenderer(editorState, this.onChange)}
                        onTab={this.onTab}
                        // plugin={plugins}
                    />
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
                </EditorContainer>
            </Container>
        );
    }
}
