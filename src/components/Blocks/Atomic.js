import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px;
`;

const AtomicBlock = ({ ...props }:Object) => {
    const { blockProps, block, contentState } = props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const data = entity.getData();
    const type = entity.getType();
    console.log(blockProps);
    if (blockProps.components[type]) {
        const Component = blockProps.components[type];
        return (
            <Container>
                <Component data={data} />
            </Container>
        );
    }

    return null;
};

AtomicBlock.propTypes = {
    block: PropTypes.shape({
        getEntityAt: PropTypes.func.isRequired
    }).isRequired,
    blockProps: PropTypes.shape({
        components: PropTypes.object
    }).isRequired,
    contentState: PropTypes.shape({
        getEntity: PropTypes.func
    }).isRequired
};

export default AtomicBlock;
