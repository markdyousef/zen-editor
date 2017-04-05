// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { EditorBlock } from 'draft-js';
import { getCurrentBlock } from '../../utils/blocks';

const Container = styled.div`
    position: relative;
`;

const Image = styled.img`
    ${''/* width: 50px;
    height: 50px; */}
`;

const ImageBlock = ({ data }:Object) => {
    return (
        <div>
            <Container>
                <Image role="presentation" src={data.src} />
            </Container>
        </div>
    );
};

ImageBlock.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string
    }).isRequired
};

export default ImageBlock;
