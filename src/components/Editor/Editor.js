// @flow
import React, { Component } from 'react';
import { EditorState, RichUtils, Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import customRenderer from '../../utils/customRenderer';
import { Block } from '../../utils/constants';
import { Container, EditorContainer } from './styles';
import decorator from '../../utils/decorator';
import keyBindings from '../../utils/keyBindings';
import keyCommands from '../../utils/keyCommands';
import { insertDataBlock } from '../../utils/blocks';

type State = {
    showUrlInput: bool,
    urlValue: string
}

type Props = {
    editorState: Object,
    onChange: Function,
    placeholder: ?string,
    readOnly: ?bool,
    spellCheck: ?bool
}


export default class App extends Component {
    state: State
    props: Props
    static defaultProps = {
        editorState: EditorState.createEmpty(decorator),
        placeholder: 'write something',
        readOnly: false,
        spellCheck: true
    }
    constructor() {
        super();
        this.state = {
            showUrlInput: false,
            urlValue: ''
        };
    }
    // onChange = (editorState:Object) => this.setState({ editorState })
    onTab = (event:Object) => {
        const { editorState, onChange } = this.props;
        // depth on ul and ol
        const levels = 2;
        const newEditorState = RichUtils.onTab(event, editorState, levels);
        if (newEditorState !== editorState) {
            onChange(newEditorState);
        }
    };
    getEditorState = () => this.state.editorState;
    focus = () => this.editor.focus();
    toggleBlockType = (blockType:string) => {
        const { editorState, onChange } = this.props;
        const type = RichUtils.getCurrentBlockType(editorState);
        if (type.indexOf(`${Block.ATOMIC}:`) === 0) return;
        onChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }
    toggleInlineStyle = (inlineStyle:string) => {
        const { editorState, onChange } = this.props;
        onChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }
    handleKeyCommand = (command: string) => {
        const { editorState, onChange } = this.props;
        switch (command) {
        case 'open-finder':
            this.input.value = null;
            this.input.click();
            return 'handled';
        case 'open-url': {
            const src = window.prompt('Enter link: ');
            const data = { src, type: 'embed' };
            onChange(insertDataBlock(editorState, data));
            return 'handled';
        }
        default:
            return keyCommands(this, command);
        }
    }
    handleFileUpload = (event:Object) => {
        const { editorState, onChange } = this.props;
        event.preventDefault();
        const file = event.target.files[0];
        // // check file type
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            const data = { src, type: 'image', display: 'medium' };
            onChange(insertDataBlock(editorState, data));
        }
    }
    render() {
        const { editorState, onChange, placeholder, spellCheck, readOnly } = this.props;
        return (
            <Container onClick={this.focus}>
                <EditorContainer>
                    <Editor
                        ref={(node) => { this.editor = node; }}
                        editorState={editorState}
                        spellCheck={spellCheck}
                        placeholder={placeholder}
                        onChange={onChange}
                        blockRendererFn={customRenderer(editorState, onChange)}
                        onTab={this.onTab}
                        keyBindingFn={keyBindings}
                        handleKeyCommand={this.handleKeyCommand}
                        readOnly={readOnly}
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
