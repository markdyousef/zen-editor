// @flow
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    color: #3b5998;
    text-decoration: underline;
`;
export default ({ contentState, entityKey, children }:Object) => {
    const { url } = contentState.getEntity(entityKey).getData();

    return <Link href={url}>{children}</Link>;
};
