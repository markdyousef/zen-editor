import styled from 'styled-components';

export const Container = styled.div`
    ${''/* padding: 30px 30px; */}
    box-sizing: border-box;
    position: relative;
    font-family: 'proxima-nova', 'helvetica', 'arial';
    box-sizing: border-box;
    font-size: 21px;
    color: #131517;
    font-weight: 300;
    line-height: 1.54;
    & h1 {
        font-size: 48px;
        font-weight: bold;
        letter-spacing: -.024em;
        line-height: 1.18;
        margin-bottom: 20px;
        color: #131517;

    }
    & h2 {
        font-size: 28px;
        font-weight: normal;
        letter-spacing: -.008em;
        line-height: 1.24;
        margin-bottom: 20px;
        color: #797C80;
    }
    & ul {
        padding-left: 0;
        list-style: none;
    }
    & ol {
        padding-left: 0;
        list-style: none;
    }
    & li {
        font-size: 21px;
        line-height: 1,78;
    }
`;

export const EditorContainer = styled.div`
    ${''/* cursor: text; */}
    ${''/* position: relative;
    margin: 0 auto;
    margin-top: 10px;
    max-width: 700px; */}
`;
