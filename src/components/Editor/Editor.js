// @flow
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import type { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import Toolbar, { inlineToolbarPlugin } from '../Toolbar';
import customRenderer from '../../utils/customRenderer';
import {
    Block,
    insertDataBlock,
    keyCommands,
    keyBindings,
    addImage,
    beforeInput,
    StringToTypeMap,
    styleMap
} from '../../utils';
import { Container } from './styles';
// import decorator from '../../utils/decorator';
import FAB from '../FloatingActionButton';

const plugins = [inlineToolbarPlugin];

type State = {
    showUrlInput: bool,
    urlValue: string
}

type DefaultProps = {
    addFile: Function
}

type Props = {
    editorState: EditorState,
    onChange: (state: EditorState) => void,
    addFile?: (file: Object | string, type?: string) => void,
    placeholder?: string,
    spellCheck?: bool,
    readOnly?: bool,
    showFAB?: bool
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
        const { editorState, onChange, addFile } = this.props;
        switch (command) {
        case 'open-finder':
            this.input.value = null;
            this.input.click();
            return 'handled';
        case 'open-url': {
            const src = window.prompt('Enter link: ');
            if (!src) return 'handled';
            this.handleLinkUpload(src);
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
        // if addFile is provided use that
        if (addFile) {
            addFile(file);
            return;
        }

        addImage(onChange, file, editorState)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    handleLinkUpload = (src: string) => {
        console.log(src);
        const { editorState, onChange, addFile } = this.props;
        const data = { src, type: 'embed' };

        if (addFile) {
            addFile(src, 'embed');
            return;
        }
        onChange(insertDataBlock(editorState, data));
    }
    handleBeforeInput = (input: string) => {
        const { editorState, onChange } = this.props;
        return beforeInput(editorState, input, onChange, StringToTypeMap);
    }
    render() {
        const { editorState, onChange, placeholder, spellCheck, readOnly, showFAB } = this.props;
        return (
            <Container onClick={this.focus}>
                {/* <EditorContainer> */}
                {showFAB &&
                    <FAB
                        setEditorState={onChange}
                        editorState={editorState}
                        handleFileUpload={this.handleFileUpload}
                        handleLinkUpload={this.handleLinkUpload}
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
                    plugins={plugins}
                    readOnly={readOnly}
                    customStyleMap={styleMap}
                    handleBeforeInput={this.handleBeforeInput}
                />
                <Toolbar />
                <input
                    type="file"
                    accept="image/*"
                    ref={(c) => { this.input = c; }}
                    onChange={this.handleFileUpload}
                    style={{ display: 'none' }}
                />
                {/* </EditorContainer> */}
            </Container>
        );
    }
}
