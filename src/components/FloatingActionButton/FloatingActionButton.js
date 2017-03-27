import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { boxLayout } from '../../styles/layouts';
import ImageButton from '../ImageButton';

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
    ${boxLayout()};
    z-index: 2;
    transition: all 0.1s ease;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    cursor: auto;
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
    }
`;

const ACTION_BUTTONS = [
    {
        title: 'Image',
        component: ImageButton
    }
    // {
    //     title: 'Embed',
    //     component: ''
    // },
    // {
    //     title: 'Separator',
    //     component: ''
    // }
];

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
        const { editorState, setEditorState, focus } = this.props;
        return (
            <Container>
                <Button onClick={() => this.setState({ isOpen: !isOpen })}>
                    X
                </Button>
                <Dropdown isOpen={isOpen}>
                    {ACTION_BUTTONS.map((button) => {
                        const ActionButton = button.component;
                        return (
                            <ActionButton
                                key={button.title}
                                title={button.title}
                                editorState={editorState}
                                setEditorState={setEditorState}
                                close={() => {
                                    this.setState({ isOpen: !isOpen });
                                    focus();
                                }}
                            />
                        );
                    })}
                </Dropdown>
            </Container>
        );
    }
}
