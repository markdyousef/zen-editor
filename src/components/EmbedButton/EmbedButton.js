// @flow
import React, { Component } from 'react';
import Icon from '../../icons/embed';
import ActionIcon from '../ActionIcon';

type DefaultProps = {
    title: string,
    close: () => void,
    handleLinkUpload: () => void
};

type Props = {
    title?: string,
    close: () => void,
    handleLinkUpload: (src: string) => void
};

type State = {};

export default class EmbedButton extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        handleLinkUpload: () => {},
        close: () => {},
        title: 'Image'
    };
    props: Props;
    state: State;
    onClick = () => {
        const src = window.prompt('Enter URL');

        if (!src) return;
        this.addEmbedURL(src);
    }
    addEmbedURL = (src: string) => {
        const { close, handleLinkUpload } = this.props;
        handleLinkUpload(src);
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
