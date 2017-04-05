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
    background: ${actionsColor.background};
    border: none;
    outline: none;
    margin-bottom: 5px;
    & svg {
        padding: 5px;
        border: 1px solid #000;
        border-radius: 3px;
        height: 12px;
        width: 12px;
        margin-right: 5px;
    }
`;


export default ({ children, onClick }:Object) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};
