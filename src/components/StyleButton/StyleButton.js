import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../styles/colors';
import ActionIcon from '../ActionIcon';

export default class StyleButton extends Component {
    static propTypes = {
        onToggle: PropTypes.func.isRequired,
        style: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        Icon: PropTypes.func
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
        const { label, active, Icon } = this.props;
        return (
            <ActionIcon active={active} onClick={this.onToggle}>
                {Icon && <Icon />}
                {label}
            </ActionIcon>
        );
    }
}
