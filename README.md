# Zen Editor

Custom editor for Clai's Cuest Project

### KEY COMMANDS

**Following are the keyboard shortcuts (<kbd>Alt and CTRL</kbd> for Windows/Linux and <kbd>Control and Command</kbd> for OSX)**

*   <kbd>Alt/Control</kbd> +

    *   <kbd>1</kbd> - H1
    *   <kbd>2</kbd> - H2
    *   <kbd>`</kbd> - code-block
    *   <kbd>'</kbd> - blockquote
    *   <kbd>*</kbd> - unordered-list-item.


*   <kbd>CTRL/Command</kbd> +

    *   <kbd>O</kbd> - Open finder
    *   <kbd>L</kbd> - Add URL (embedded link)
    *   <kbd>B</kbd> - make selection bold
    *   <kbd>I</kbd> - make selection italic
    *   <kbd>U</kbd> - underline selection

<!-- ##### Editor level commands

These commands are not a part of the core editor but have been implemented in the example code that uses the `zen-editor` editor.

*   <kbd>Command/CTRL</kbd> + <kbd>S</kbd> - Save current data to `localstorage`.
*   <kbd>Alt + Shift</kbd> + <kbd>L</kbd> - Load previously saved data from `localstorage`.

##### Special characters while typing: While typing in an empty block, if the content matches one of the following, that particular block's type and look will be changed to the corresponding block specified below

*   `--` - If current block is `blockquote`, it will be changed to `block-quote-caption`, else `caption`.
*   `*.` `(An asterisk and a period)` - `unordered-list-item`.
*   `*<SPACE>` `(An asterisk and a space)` - `unordered-list-item`.
*   `-<SPACE>` `(A hyphen and a space)` - `unordered-list-item`.
*   `1.` `(The number 1 and a period)` - `unordered-list-item`.
*   `##` - `header-two`.
*   `[]` - `todo`.
*   `==` - `unstyled`. -->

### Installation

- **npm**.
    - `npm install zen-editor`.
    - `import Editor from 'zen-editor'`

#### JS (ES6)

At the minimum, you need to provide `editorState` and `onChange` props, the same as `draft-js`.

```javascript

import React from 'react';
import ReactDOM from 'react-dom';

import { Editor, createEditorState } from 'zen-editor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(?data) // optionally create with data
    };

    this.onChange = editorState => this.setState({ editorState });
  }

  componentDidMount() {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        ref={editor => { this.editor = editor; }}
        editorState={editorState}
        onChange={this.onChange} />
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

#### LICENSE

MIT
