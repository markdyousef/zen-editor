'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../utils');

exports.default = function (editor, command) {
    switch (command) {
        case _utils.Block.H1:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Block.H2:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Block.BLOCKQUOTE:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Block.UL:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Block.OL:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Block.CODE:
            editor.toggleBlockType(command);
            return 'handled';

        case _utils.Inline.BOLD:
            editor.toggleInlineStyle(command);
            return 'handled';

        case _utils.Inline.ITALIC:
            editor.toggleInlineStyle(command);
            return 'handled';

        case _utils.Inline.UNDERLINE:
            editor.toggleInlineStyle(command);
            return 'handled';

        case _utils.Inline.HIGHLIGHT:
            editor.toggleInlineStyle(command);
            return 'handled';

        default:
            return 'not-handled';
    }
};