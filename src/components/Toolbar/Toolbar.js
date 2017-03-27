import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import BlockToolbar from './BlockToolbar';
import { actionsColor } from '../../styles/colors';
import { boxLayout } from '../../styles/layouts';

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

export default class Toolbar extends Component {
    static propTypes = {
        editorState: PropTypes.shape({
            _immutable: PropTypes.object
        }),
        toggleBlockType: PropTypes.func.isRequired,
        focus: PropTypes.func.isRequired
    };
    static defaultProps = {
        editorState: {}
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { toggleBlockType, editorState } = this.props;
        return (
            <Container>
                <BlockToolbar
                    onToggle={toggleBlockType}
                    editorState={editorState}
                />
            </Container>
        );
    }
}
