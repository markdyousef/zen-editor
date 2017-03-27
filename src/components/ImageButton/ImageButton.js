import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../styles/colors';

const Button = styled.button`
    height: 25px;
    color: ${props => props.active ? actionsColor.textActive : actionsColor.text};
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    background: #fff;
    border: none;
    outline: none;
`;

// const Upload = styled.input`
//     display: none;
// `;

export default class ImageButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        setEditorState: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    }
    static defaultProps = {
    }
    constructor() {
        super();
        this.state = {};
    }
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (e) => {
        const { setEditorState, editorState } = this.props;
        const file = e.target.files[0];
        // check file type
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            console.log(src);
        }
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
