// @flow
import React from 'react';
import styled from 'styled-components';

const Handle = styled.span`
    color: rgba(98, 177, 254, 1.0);
    direction: ltr;
    unicode-bidi: bidi-override
`;
export default ({ children }:Object) => {
    console.log(children);
    return <Handle>{children}</Handle>;
};
