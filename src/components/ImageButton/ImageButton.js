import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../styles/colors';
import { Block } from '../../utils/constants';
import { addNewBlock } from '../../utils/blocks';

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


export default class ImageButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        setEditorState: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    }
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (e) => {
        const { setEditorState, editorState, close } = this.props;
        const file = e.target.files[0];
        // check file type
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            setEditorState(addNewBlock(editorState, Block.IMAGE, { src }));
        }
        close();
    }
    render() {
        const { title } = this.props;
        return (
            <Button onClick={this.onClick}>
                {title}
                <input
                    type="file"
                    accept="image/*"
                    ref={(c) => { this.input = c; }}
                    onChange={this.onChange}
                    style={{ display: 'none' }}
                />
            </Button>
        );
    }
}
