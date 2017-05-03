'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.beforeInput = exports.StringToTypeMap = undefined;

var _draftJs = require('draft-js');

var _blocks = require('./blocks');

var _constants = require('./constants');

var StringToTypeMap = exports.StringToTypeMap = {
    '# ': _constants.Block.H1,
    '##': _constants.Block.H2,
    '1.': _constants.Block.OL,
    '* ': _constants.Block.UL,
    '` ': _constants.Block.CODE,
    '" ': _constants.Block.BLOCKQUOTE
};
var beforeInput = exports.beforeInput = function beforeInput(editorState, input, onChange) {
    var mapping = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : StringToTypeMap;

    var selection = editorState.getSelection();
    var block = (0, _blocks.getCurrentBlock)(editorState);
    var blockType = block.getType();

    // check for atomic blocks
    if (blockType.indexOf(_constants.Block.ATOMIC) === 0) {
        return 'not-handled';
    }

    // Should be the first thing on line and not have
    // a length longer then the longest command
    var blockLength = block.getLength();
    if (selection.getAnchorOffset > 1 || blockLength > 2) {
        return 'not-handled';
    }

    var blockTo = mapping[block.getText()[0] + input];
    if (!blockTo) {
        return 'not-handled';
    }

    var finalType = blockTo.split(':');
    if (finalType.length < 1 || finalType.length > 3) {
        return 'not-handled';
    }

    var newType = finalType[0];
    if (finalType.length === 1) {
        if (blockType === finalType[0]) {
            return 'not-handled';
        }
    } else if (finalType.length === 2) {
        if (blockType === finalType[1]) {
            return 'not-handled';
        }
        if (blockType === finalType[0]) {
            newType = finalType[1];
        }
    } else if (finalType.length === 3) {
        if (blockType === finalType[2]) {
            return 'not-handled';
        }
        if (blockType === finalType[0]) {
            newType = finalType[1];
        } else {
            newType = finalType[2];
        }
    }
    onChange((0, _blocks.resetBlockWithType)(editorState, newType, { text: '' }));
    return 'handled';
};