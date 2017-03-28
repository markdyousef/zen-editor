import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../utils/constants';

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
    onClick = () => {}
    addEmbedURL = () => {}
    render() {
        const { title } = this.props;
        return (
            <Button onClick={this.onClick}>
                {title}
            </Button>
        );
    }
}
