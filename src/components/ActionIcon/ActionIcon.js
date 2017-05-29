// @flow
import React from 'react';
import styled from 'styled-components';
import { actionsColor } from '../../styles/colors';

const Button = styled.button`
    height: 25px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    margin-bottom: 5px;
    color: ${props => props.active ? actionsColor.textActive : actionsColor.text};
    background: none;
    & svg {
        border: 1px solid ${actionsColor.text};
        border-radius: 3px;
        margin-right: 5px;
        fill: ${props => props.active ? actionsColor.textActive : actionsColor.text}
    }
`;


export default ({ children, onClick, active }:Object) => {
    return (
        <Button onClick={onClick} active={active}>
            {children}
        </Button>
    );
};
