// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px;
`;

type DefaultProps = {};

type Props = {
    blockProps: {
        data?: {
            url: string
        }
    }
};

type State = {};

export default class EmbedBlock extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        blockProps: {}
    };
    state: State = {
        showIframe: false
    }
    props: Props;
    componentDidMount() {
        this.renderEmbedly();
    }
    componentDidUpdate(prevProps: Props, prevState: State) {
        const { showIframe } = this.state;
        if (prevState.showIframe !== showIframe && showIframe === true) {
            this.renderEmbedly();
        }
    }
    getScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//cdn.iframe.ly/embed.js?api_key=4d65eb16e6b4e265179567';
        script.onload = () => {
            window.iframely = window.iframely || {};
        };
        document.body.appendChild(script);
    }
    renderEmbedly = () => {
        if (document.querySelectorAll('[data-iframely-url]').length === 0) return;
        const iframely = window.iframely || {};
        const widgets = iframely.widgets || {};
        if (widgets.load) {
            widgets.load();
        } else {
            this.getScript();
        }
    }
    render() {
        const { blockProps: { data } } = this.props;
        const url = (data && data.url) || 'www.clai.io';
        const innerHTML = `
            <a href="${url}" data-iframely-url>
            </a>
        `;
        return (
            <Container>
                <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
            </Container>
        );
    }
}
