// @flow
import React from 'react';
import styled from 'styled-components';
import wrapper from './DropdownWrapper';
import { boxLayout } from '../../styles/layouts';

const Dropdown = styled.div`
    width: 200px;
    ${boxLayout()};
    z-index: 2;
    transition: all 0.1s ease;
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    cursor: auto;
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
    }
`;

export default wrapper(({ isOpen, children, onClose }) =>
    <Dropdown isOpen={isOpen} onClose={onClose}>
        {children}
    </Dropdown>
);
