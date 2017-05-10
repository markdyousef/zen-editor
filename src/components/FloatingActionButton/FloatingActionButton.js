// @flow
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import ImageButton from '../ImageButton';
import EmbedButton from '../EmbedButton';
import { getSelectedBlockNode } from '../../utils/display';
import Icon from '../../icons/plus';
import Dropdown from './Dropdown';

const Container = styled.div`
    height: 200px;
    width: 100px;
    position: absolute;
    top: ${props => props.top}px;
    left: -40px;
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 999em;
    border: 1px solid #e5e5e5;
    outline: none;
    cursor: pointer;
    text-align: center;
    transition: all .2s ease;
    padding: 0;
`;

const ACTION_BUTTONS = [
    {
        title: 'Image',
        component: ImageButton
    },
    {
        title: 'Embed',
        component: EmbedButton
    }
    // {
    //     title: 'Separator',
    //     component: ''
    // }
];

type DefaultProps = {};
type Props = {
    editorState: EditorState,
    focus: () => void,
    setEditorState: () => void
};
type State = {
    isVisible: bool,
    isOpen: bool,
    top: ?number
};

export default class FloatingActionButton extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
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
    componentWillReceiveProps(nextProps: Props) {
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
                setTimeout(this.findNode, 0);
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
        setTimeout(this.findNode, 0);
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
            top: node.offsetTop - 4
        });
    }
    render() {
        const { isOpen, top, isVisible } = this.state;
        const { editorState, setEditorState, focus } = this.props;

        if (!isVisible) return null;

        return (
            <Container top={top}>
                <Button
                    onClick={() => this.setState({ isOpen: !isOpen })}
                    style={(isOpen) ? { transform: 'rotate(45deg)' } : null}
                >
                    <Icon />
                </Button>
                <Dropdown
                    isOpen={isOpen}
                    onClose={() => this.setState({ isOpen: false })}
                >
                    {ACTION_BUTTONS.map((button) => {
                        const ActionButton = button.component;
                        return (
                            <ActionButton
                                key={button.title}
                                title={button.title}
                                editorState={editorState}
                                setEditorState={setEditorState}
                                close={() => this.setState({ isOpen: !isOpen })}
                            />
                        );
                    })}
                </Dropdown>
            </Container>
        );
    }
}
