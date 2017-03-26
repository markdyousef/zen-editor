import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
];

const Container = styled.div`
    width: 200px;
    height: 50px;
`;

export default class BlockStyleControls extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }).isRequired,
        onToggle: PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.state = {};
    }
    componentWillReceiveProps(nextProps) {
        const { editorState } = nextProps;
        const selection = editorState.getSelection();
        this.blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getKey();
    }
    render() {
        return (
            <Container>
                Yes
            </Container>
        );
    }
}
