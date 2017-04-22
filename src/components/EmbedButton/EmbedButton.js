import React, { Component, PropTypes } from 'react';
import Icon from '../../icons/embed';
import ActionIcon from '../ActionIcon';
import { insertDataBlock } from '../../utils';

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
        const url = window.prompt('Enter URL');

        if (!url) return;
        this.addEmbedURL(url);
    }
    addEmbedURL = (src) => {
        const { editorState, setEditorState, close } = this.props;
        const data = { src, type: 'embed' };
        setEditorState(insertDataBlock(editorState, data));
        close();
    }
    render() {
        const { title } = this.props;
        return (
            <ActionIcon onClick={this.onClick}>
                <Icon />
                {title}
            </ActionIcon>
        );
    }
}
