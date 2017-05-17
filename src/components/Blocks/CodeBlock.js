// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Container = styled.div`
    width: 100%;
    height: 300px;
`;

type DefaultProps = {};
type Props = {};
type State = {
    value: ?string
};

export default class CodeBlock extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {}
    props: Props;
    state: State = {
        value: ''
    }
    onLoad = () => {}
    onChange = (value: string) => {
        this.setState({ value });
    }
    onSelectionChange = () => {}
    render() {
        return (
            <Container onKeyPress={this.handleKeyCommand}>
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="awesome_code_editor"
                    editorProps={{ $blockScrolling: true }}
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    onSelectionChange={this.onSelectionChange}
                    height="100%"
                    width="100%"
                    value={this.state.value}
                    fontSize={14}
                    showPrintMargin
                    showGutter
                    higlightActiveLine
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true
                    }}
                />
            </Container>
        );
    }
}
