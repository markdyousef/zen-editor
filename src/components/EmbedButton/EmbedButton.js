import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { AtomicBlockUtils } from 'draft-js';

const Button = styled.button`
    height: 25px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    background: #fff;
    border: none;
    outline: none;
`;

export default class EmbedButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        setEditorState: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    }
    onClick = () => {
        const { close } = this.props;
        const url = window.prompt('Enter URL', 'https://www.clai.io');
        close();

        if (!url) return;
        this.addEmbedURL(url);
    }
    addEmbedURL = (url) => {
        const { setEditorState, editorState } = this.props;
        const contentState = editorState.getCurrentContent();
        const entityKey = contentState
            .createEntity('embed', 'IMMUTABLE', { url })
            .getLastCreatedEntityKey();

        setEditorState(
            AtomicBlockUtils.insertAtomicBlock(
                editorState,
                entityKey,
                'E'
            )
        );
    }
    render() {
        const { title } = this.props;
        return (
            <Button onClick={this.onClick}>
                {title}
            </Button>
        );
    }
}
