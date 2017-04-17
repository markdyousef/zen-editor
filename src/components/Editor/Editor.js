// @flow
import React, { Component } from 'react';
import { EditorState, RichUtils, Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import customRenderer from '../../utils/customRenderer';
import { Block } from '../../utils/constants';
import { Container, EditorContainer } from './styles';
import decorator from '../../utils/decorator';
import keyBindings from '../../utils/keyBindings';
import { insertDataBlock } from '../../utils/blocks';

type State = {
    editorState: Object
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(decorator),
            showUrlInput: false,
            urlValue: ''
        };
    }
    state: State

    onChange = (editorState:Object) => this.setState({ editorState })
    onTab = (event:Object) => {
        const { editorState } = this.state;
        // depth on ul and ol
        const levels = 2;
        const newEditorState = RichUtils.onTab(event, editorState, levels);
        if (newEditorState !== editorState) {
            this.onChange(newEditorState);
        }
    };
    getEditorState = () => this.state.editorState;
    editor: Editor
    focus = () => this.editor.focus();
    toggleBlockType = (blockType:Object) => {
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
    toggleInlineStyle = (inlineStyle:Object) => {
        const { editorState } = this.state;
        this.onChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }
    handleKeyCommand = (command: string) => {
        if (command === 'open-finder') {
            this.input.value = null;
            this.input.click();
        }
        return 'not-handled';
    }
    handleFileUpload = (event:Object) => {
        const { editorState } = this.state;
        event.preventDefault();
        const file = event.target.files[0];
        // // check file type
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            const data = { src, type: 'image', display: 'medium' };
            this.onChange(insertDataBlock(editorState, data));
        }
    }
    render() {
        const { editorState } = this.state;
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
                        keyBindingFn={keyBindings}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={(c) => { this.input = c; }}
                        onChange={this.handleFileUpload}
                        style={{ display: 'none' }}
                    />
                </EditorContainer>
            </Container>
        );
    }
}
