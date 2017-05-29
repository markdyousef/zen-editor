// @flow
import React from 'react';
import styled from 'styled-components';
import withAlignment, { AlignmentTool } from './withAlignment';

const Container = styled.div`
    position: relative;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    border: ${props => props.inFocus ? '3px solid #34B289' : null};
    border-radius: 3px;
`;

type Props = {
    setFocus?: (focus?: bool) => void,
    alignLeft?: () => void,
    alignCenter?: () => void,
    alignRight?: () => void,
    style?: Object,
    inFocus?: bool,
    blockProps: {
        data?: {
            url: string
        }
    }
}

const ImageBlock = ({ ...props }:Props) => {
    const {
        blockProps: { data },
        setFocus,
        inFocus,
        alignLeft,
        alignRight,
        alignCenter,
        style
    } = props;
    return (
        <Container style={style}>
            <Image
                role="presentation"
                src={data && data.url}
                onClick={setFocus}
                inFocus={inFocus}
            />
            {inFocus &&
                <AlignmentTool
                    alignLeft={alignLeft}
                    alignCenter={alignCenter}
                    alignRight={alignRight}
                />
            }
        </Container>
    );
};


export default withAlignment(ImageBlock);
