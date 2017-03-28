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

export default class StyleButton extends Component {
    static propTypes = {
        onToggle: PropTypes.func.isRequired,
        style: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        icon: PropTypes.string
    }
    constructor() {
        super();
        this.state = {};
    }
    onToggle = (e) => {
        const { onToggle, style } = this.props;
        e.preventDefault();
        onToggle(style);
    }
    render() {
        const { label, active, icon } = this.props;
        return (
            <Button active={active} onClick={this.onToggle}>
                {icon && <i className={icon} style={{ marginRight: '5px' }} />}
                {label}
            </Button>
        );
    }
}
