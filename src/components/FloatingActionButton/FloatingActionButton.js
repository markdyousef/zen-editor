import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { boxLayout } from '../../styles/layouts';
import ImageButton from '../ImageButton';
import { getSelectedBlockNode } from '../../utils/display';

const Container = styled.div`
    height: 200px;
    width: 100px;
    position: fixed;
    top: ${props => props.top}px;
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
        this.node = null;
        this.blockType = '';
        this.blockKey = '';
        this.blockLength = -1;
        this.state = {
            isVisible: false,
            isOpen: false,
            top: null
        };
    }
    componentWillReceiveProps(nextProps) {
        // only show FAB when text length === 0
        const { editorState } = nextProps;
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();

        if (!selectionState.isCollapsed() || selectionState.anchorKey !== selectionState.focusKey) {
            this.setState({
                isVisible: false,
                isOpen: false
            });
            return;
        }

        const block = contentState.getBlockForKey(selectionState.anchorKey);
        const blockKey = block.getKey();

        if (block.getLength() > 0) {
            this.setState({
                isVisible: false,
                isOpen: false
            });
            return;
        }

        if (block.getType() !== this.blockType) {
            this.blockType = block.getType();
            if (block.getLength() === 0) {
                this.findNode();
            }
            this.blockKey = blockKey;
            return;
        }

        if (this.blockKey === blockKey) {
            if (block.getLength() > 0) {
                this.setState({
                    isVisible: false,
                    isOpen: false
                });
            } else {
                this.setState({
                    isVisible: true
                });
            }
            return;
        }
        this.blockKey = blockKey;
        if (block.getLength() > 0) {
            this.setState({
                isVisible: false,
                isOpen: false
            });
        }
        this.findNode();
    }
    findNode = () => {
        const node = getSelectedBlockNode(window);
        if (node === this.node) return;

        if (!node) {
            this.setState({
                isVisible: false,
                isOpen: false
            });
            return;
        }

        this.node = node;
        this.setState({
            isVisible: true,
            top: node.offsetTop - 3
        });
    }
    render() {
        const { isOpen, top, isVisible } = this.state;
        const { editorState, setEditorState, focus } = this.props;

        if (!isVisible) return null;

        return (
            <Container top={top}>
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
