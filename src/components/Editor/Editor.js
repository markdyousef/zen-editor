// @flow
import React, { Component } from 'react';
import { EditorState, RichUtils, Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
    customRenderer,
    keyCommands,
    keyBindings,
    insertDataBlock,
    Block,
    styleMap,
    beforeInput,
    StringToTypeMap,
    addImage
} from '../../utils';
import { Container, EditorContainer } from './styles';
import FAB from '../FloatingActionButton';

type DefaultProps = {
    placeholder: 'write something',
    readOnly: false,
    spellCheck: true,
    showFAB: false
}
type Props = {
    editorState: EditorState,
    onChange: Function,
    placeholder: ?string,
    readOnly: ?bool,
    spellCheck: ?bool,
    showFAB: bool,
    addFile: (file:Object) => void
}
type State = {
    showUrlInput: bool,
    urlValue: string
}


export default class App extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    props: Props;
    editor: Editor;
    input: Object;
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
            if (!src) return 'handled';
            const data = { src, type: 'embed' };
            onChange(insertDataBlock(editorState, data));
            return 'handled';
        }
        default:
            return keyCommands(this, command);
        }
    }
    handleFileUpload = (event:Object) => {
        const { editorState, onChange, addFile } = this.props;
        event.preventDefault();
        const file = event.target.files[0];
        addImage(onChange, file, editorState)
            .then(res => addFile(res))
            .catch(err => console.log(err));
    }
    handleBeforeInput = (input: string) => {
        const { editorState, onChange } = this.props;
        return beforeInput(editorState, input, onChange, StringToTypeMap);
    }
    render() {
        const { editorState, onChange, placeholder, spellCheck, readOnly, showFAB } = this.props;
        return (
            <Container onClick={this.focus}>
                <EditorContainer>
                    {showFAB &&
                        <FAB
                            setEditorState={onChange}
                            editorState={editorState}
                        />
                    }
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
                        customStyleMap={styleMap}
                        handleBeforeInput={this.handleBeforeInput}
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
