// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import BoldIcon from '../../icons/image';
import ActionIcon from '../ActionIcon';

type DefaultProps = {};

type Props = {
    children?: Object
};

type State = {
    inFocus: bool,
    style: ?Object,
    alignment: ?string
};

export default (WrappedComponent: Function) => {
    return (
        class AlignmentTool extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps = {};
            state: State = {
                inFocus: false,
                style: null,
                alignment: null
            }
            props: Props;
            alignLeft = () => {
                this.setState({
                    style: {
                        float: 'left'
                    },
                    alignment: 'left'
                });
            }
            alignCenter = () => {
                this.setState({
                    style: {
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    },
                    alignment: 'center'
                });
            }

            alignRight = () => {
                this.setState({
                    style: {
                        float: 'right'
                    },
                    alignment: 'right'
                });
            }
            render() {
                const { children } = this.props;
                const { inFocus, style, alignment } = this.state;
                return (
                    <WrappedComponent
                        {...this.props}
                        setFocus={() => this.setState({ inFocus: !inFocus })}
                        inFocus={inFocus}
                        style={style}
                        alignLeft={this.alignLeft}
                        alignCenter={this.alignCenter}
                        alignRight={this.alignRight}
                        alignment={alignment}
                    >
                        {children && children}
                    </WrappedComponent>
                );
            }
        }
    );
};

const Controls = styled.div`
    border: 1px solid #2D3438;
    background: #2D3438;
    border-radius: 2px;
    border-radius: 3px;
    box-shadow: 0 1px 3px 0 rgba(220, 220, 220, 1);
    box-sizing: border-box;
    display: flex;
`;


type AlignProps = {
    alignLeft?: () => void,
    alignCenter?: () => void,
    alignRight?: () => void
}
export const AlignmentTool = ({ alignLeft, alignCenter, alignRight }: AlignProps) => (
    <Controls>
        <ActionIcon onClick={alignLeft}><BoldIcon /></ActionIcon>
        <ActionIcon onClick={alignCenter}><BoldIcon /></ActionIcon>
        <ActionIcon onClick={alignRight}><BoldIcon /></ActionIcon>
    </Controls>
);
