import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';

/* eslint-disable */
injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'proxima-nova', 'helvetica', 'arial';
        box-sizing: border-box;
        font-size: 21px;
        color: #131517;
        font-weight: 300;
        line-height: 1.54
    }

    h1 {
        font-size: 48px;
        font-weight: bold;
        letter-spacing: -.024em;
        line-height: 1.18;
        margin-bottom: 20px;
        color: #131517;

    }

    h2 {
        font-size: 28px;
        font-weight: normal;
        letter-spacing: -.008em;
        line-height: 1.24;
        margin-bottom: 20px;
        color: #797C80;
    }

    ul {
        padding-left: 0;
        list-style: none;
    }

    ol {
        padding-left: 0;
        list-style: none;
    }

    li {
        font-size: 21px;
        line-height: 1,78;
    }
`;
/* eslint-enable */

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
