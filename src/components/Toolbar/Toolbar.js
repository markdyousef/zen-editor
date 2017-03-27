import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import BlockToolbar from './BlockToolbar';
import InlineToolbar from './InlineToolbar';
import { actionsColor } from '../../styles/colors';
import { boxLayout } from '../../styles/layouts';

const Container = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    ${boxLayout()};
    z-index: 2;
    transition: all 0.1s ease;
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
        showToolbar: PropTypes.bool.isRequired
    };
    static defaultProps = {
        editorState: {}
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { toggleBlockType, editorState, showToolbar, toggleInlineStyle } = this.props;
        return (
            <Container showToolbar={showToolbar}>
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
