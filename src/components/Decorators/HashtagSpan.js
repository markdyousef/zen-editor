// @flow
import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
    color: rgba(95, 184, 138, 1.0);
`;
export default ({ children }:Object) => {
    return <Hashtag>{children}</Hashtag>;
};
