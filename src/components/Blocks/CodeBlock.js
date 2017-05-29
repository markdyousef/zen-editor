// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/python';
import 'brace/theme/monokai';
import 'brace/theme/github';

const Container = styled.div`
    width: 100%;
    height: 300px;
`;

const Button = styled.button`

`;

type DefaultProps = {};
type Props = {
    setReadOnly: () => void,
    readOnly: bool
};
type State = {
    value: ?string,
    mode: string,
    theme: string
};

export default class CodeBlock extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {}
    props: Props;
    state: State = {
        value: '',
        mode: 'javascript',
        theme: 'github'
    }
    onLoad = () => {}
    onChange = (value: string) => {
        this.setState({ value });
    }
    onSelectionChange = () => {}
    changeMode = () => {
        const { mode } = this.state;
        const newMode = (mode === 'javascript') ? 'python' : 'javascript';
        this.setState({ mode: newMode });
    }
    changeTheme = () => {
        const { theme } = this.state;
        const newTheme = (theme === 'github') ? 'monokai' : 'github';
        this.setState({ theme: newTheme });
    }
    render() {
        const { setReadOnly, readOnly } = this.props;
        const { value, mode, theme } = this.state;
        return (
            <Container>
                <Button onClick={this.changeMode}>{mode}</Button>
                <Button onClick={this.changeTheme}>{theme}</Button>
                <AceEditor
                    mode={mode}
                    theme={theme}
                    name="awesome_code_editor"
                    editorProps={{ $blockScrolling: true }}
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    onSelectionChange={this.onSelectionChange}
                    height="100%"
                    width="100%"
                    value={value}
                    fontSize={14}
                    showPrintMargin
                    showGutter
                    higlightActiveLine
                    readOnly={!readOnly}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4
                    }}
                />
                <Button onClick={setReadOnly}>
                    {(readOnly) ? 'Save' : 'Edit'}
                </Button>
            </Container>
        );
    }
}
