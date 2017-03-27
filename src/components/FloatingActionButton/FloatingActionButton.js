import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { boxLayout } from '../../styles/layouts';
import ActionButton from '../ActionButton';

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

const Dropdown = styled.div`
    width: 200px;
    ${boxLayout()}
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
                {isOpen &&
                    <Dropdown>
                        Hello
                    </Dropdown>
                }
            </Container>
        );
    }
}
