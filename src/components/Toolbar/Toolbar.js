import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import BlockToolbar from './BlockToolbar';
import InlineToolbar from './InlineToolbar';
import { actionsColor } from '../../styles/colors';
import { boxLayout } from '../../styles/layouts';
import { getSelectionRect, getSelection } from '../../utils/display';

const Container = styled.div`
    width: 200px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    display: flex;
    flex-direction: column;
    ${boxLayout()};
    z-index: 2;
    ${''/* transition: all 0.1s ease; */}
    visibility: ${props => props.showToolbar ? 'visible' : 'hidden'};
    cursor: auto;
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
    }
`;

export default class Toolbar extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }),
        toggleBlockType: PropTypes.func.isRequired,
        toggleInlineStyle: PropTypes.func.isRequired,
        focus: PropTypes.func.isRequired,
        showToolbar: PropTypes.bool.isRequired,
        editorNode: PropTypes.shape({
            props: PropTypes.object
        })
    };
    static defaultProps = {
        editorState: {},
        editorNode: {}
    }
    constructor() {
        super();
        this.state = {
            top: 0,
            left: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        const { editorState, editorNode } = nextProps;
        const selectionState = editorState.getSelection();

        if (selectionState.isCollapsed()) {
            return;
        }

        const nativeSelection = getSelection(window);
        if (!nativeSelection.rangeCount) {
            return;
        }
        const selectionBoundary = getSelectionRect(nativeSelection);
        // eslint-disable-next-line react/no-find-dom-node
        const toolbarNode = ReactDOM.findDOMNode(this);
        const toolbarBoundary = toolbarNode.getBoundingClientRect();
        // eslint-disable-next-line react/no-find-dom-node
        const parent = ReactDOM.findDOMNode(editorNode);
        const parentBoundary = parent.getBoundingClientRect();

        // logic for setting toolbar position
        const top = selectionBoundary.top + parentBoundary.top;
        let left;
        const widthDiff = selectionBoundary.width - toolbarBoundary.width;
        if (widthDiff >= 0) {
            left = widthDiff / 2;
        } else {
            left = (selectionBoundary.left + parentBoundary.left) + (widthDiff / 2);
        }
        this.setState({
            top,
            left
        });
    }
    render() {
        const { toggleBlockType, editorState, showToolbar, toggleInlineStyle } = this.props;
        const { left, top } = this.state;
        return (
            <Container showToolbar={showToolbar} left={left} top={top}>
                <BlockToolbar
                    onToggle={toggleBlockType}
                    editorState={editorState}
                />
                <InlineToolbar
                    onToggle={toggleInlineStyle}
                    editorState={editorState}
                />
            </Container>
        );
    }
}
