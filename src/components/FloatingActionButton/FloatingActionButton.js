import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 200px;
    width: 100px;
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 999em;
    border: 1px solid #e5e5e5;
    outline: none;
    cursor: pointer;
`;

export default class FloatingActionButton extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        focus: PropTypes.func.isRequired,
        setEditorState: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    render() {
        const { isOpen } = this.state;
        return (
            <Container>
                <Button onClick={() => this.setState({ isOpen: !isOpen })}>
                    X
                </Button>
            </Container>
        );
    }
}
