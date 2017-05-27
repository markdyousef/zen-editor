// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const Image = styled.img`
    max-width: 400px;
`;

type Props = {
    blockProps: {
        data?: {
            url: string
        }
    }
}

const ImageBlock = ({ blockProps }:Props) => {
    const { data } = blockProps;
    return (
        <div>
            <Container>
                <Image role="presentation" src={data && data.url} />
            </Container>
        </div>
    );
};


export default ImageBlock;
