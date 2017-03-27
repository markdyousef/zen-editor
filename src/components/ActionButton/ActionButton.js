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
    static propTypes = {
        title: PropTypes.string.isRequired,
        component: PropTypes.node
    }
    static defaultProps = {
        component: null
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { component, title } = this.props;
        return (
            <Button>
                {component}
                {title}
            </Button>
        );
    }
}
