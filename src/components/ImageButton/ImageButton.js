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

export default class ImageButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    static defaultProps = {
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { title } = this.props;
        return (
            <Button>
                {title}
            </Button>
        );
    }
}
