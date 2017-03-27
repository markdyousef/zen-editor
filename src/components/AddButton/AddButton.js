import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 200px;
    width: 100px;
`;

export default class AddButton extends Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Container>
                Yeah
            </Container>
        );
    }
}
