import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../styles/colors';

const Button = styled.span`
    height: 25px;
    color: ${props => props.active ? actionsColor.textActive : actionsColor.text};
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

export default class ActionButton extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Button>
                Button
            </Button>
        );
    }
}
