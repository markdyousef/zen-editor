// @flow
import React, { Component } from 'react';
import { EditorState, RichUtils, Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import customRenderer from '../../utils/customRenderer';
import { Block } from '../../utils/constants';
import { Container, EditorContainer } from './styles';
import decorator from '../../utils/decorator';

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
                    />
                </EditorContainer>
            </Container>
        );
    }
}
