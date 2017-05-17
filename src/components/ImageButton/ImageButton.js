// @flow
import React, { Component } from 'react';
import Icon from '../../icons/image';
import ActionIcon from '../ActionIcon';

type DefaultProps = {
    title: string,
    close: () => void,
    handleFileUpload: () => void
};

type Props = {
    title?: string,
    close: () => void,
    handleFileUpload: (event: Event) => void
};

type State = {};

export default class ImageButton extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        handleFileUpload: () => {},
        close: () => {},
        title: 'Image'
    };
    props: Props;
    state: State;
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (event: Event) => {
        const { close, handleFileUpload } = this.props;
        handleFileUpload(event);
        close();
    }
    render() {
        const { title } = this.props;
        return (
            <ActionIcon onClick={this.onClick}>
                <Icon />
                {title}
                <input
                    type="file"
                    accept="image/*"
                    ref={(c) => { this.input = c; }}
                    onChange={this.onChange}
                    style={{ display: 'none' }}
                />
            </ActionIcon>
        );
    }
}
