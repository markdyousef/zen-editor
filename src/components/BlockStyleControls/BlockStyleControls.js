import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import StyleButton from './StyleButton';
import { actionsColor } from '../../styles/colors';
import { boxLayout } from '../../styles/layouts';

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
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    background-color: ${actionsColor.background};
    box-shadow: ${boxLayout.boxShadow};
    border-radius: ${boxLayout.borderRadius};
    border: 1px solid ${boxLayout.border};
    padding: 15px;
`;

export default class BlockStyleControls extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }),
        onToggle: PropTypes.func.isRequired
    };
    static defaultProps = {
        editorState: {}
    }
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
        const { onToggle } = this.props;
        return (
            <Container>
                {BLOCK_TYPES.map(block =>
                    <StyleButton
                        key={block.label}
                        active={block.style === this.blockType}
                        label={block.label}
                        onToggle={onToggle}
                        style={block.style}
                    />
                )}
            </Container>
        );
    }
}
