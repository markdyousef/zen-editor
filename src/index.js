import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { EditorState } from 'draft-js';
import Editor from './components/Editor/EditorContainer';
import initStore from './store/configureStore';
import { decorator } from './utils';

const store = initStore();

const Container = styled.div`
    ${''/* position: relative; */}
    width: 70%;
    margin: 0 auto;
    margin-top: 70px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(decorator),
            files: []
        };
    }
    addFile = (data: Object, type?: string) => {
        console.log(data);
    }
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Editor
                        spellCheck
                        placeholder="Cool"
                        // readOnly={false}
                        // addFile={this.addFile}
                        showFAB
                    />
                </Container>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
