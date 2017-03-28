// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { EditorBlock } from 'draft-js';
import { getCurrentBlock } from '../../utils/blocks';

const Image = styled.img`
    width: 50px;
    height: 50px;
`;

const ImageBlock = ({ ...props }:Object) => {
    const { block, blockProps } = props;
    const { editorState } = blockProps;
    const data = block.getData();
    const src = data.get('src');
    const currentBlock = getCurrentBlock(editorState);
    const selected = currentBlock.getKey() === block.getKey();
    if (src) {
        return (
            <div>
                <div>
                    <Image role="presentation" selected={selected} src={src} />
                </div>
                <figcaption>
                    <EditorBlock {...props} />
                </figcaption>
            </div>
        );
    }
    return <EditorBlock {...props} />;
};

ImageBlock.propTypes = {
    block: PropTypes.shape({
        getData: PropTypes.func.isRequired
    }).isRequired,
    blockProps: PropTypes.shape({
        editorState: PropTypes.object
    }).isRequired
};

export default ImageBlock;
