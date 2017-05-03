import React from 'react';
// import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton
} from 'draft-js-buttons';
import buttonStyles from './styles/buttonsStyles.css';
import toolbarStyles from './styles/toolbarStyles.css';

export const inlineToolbarPlugin = createInlineToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        HeadlineOneButton,
        HeadlineTwoButton,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton
    ],
    theme: { buttonStyles, toolbarStyles }
});

const { InlineToolbar } = inlineToolbarPlugin;

export default () => {
    return <InlineToolbar />;
};
