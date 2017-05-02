'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertDataBlock = exports.addNewBlock = exports.resetBlockWithType = exports.getCurrentBlock = exports.getDefaultBlockData = undefined;

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _constants = require('./constants');

/**
*   Returns default block-level metadata for various block type.
*   Empty object otherwise
**/
var getDefaultBlockData = exports.getDefaultBlockData = function getDefaultBlockData(blockType) {
    var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (blockType) {
        case _constants.Block.TODO:
            return { checked: false };
        default:
            return initialData;
    }
};

/**
*   Get currentBlock in the editorState
**/

var getCurrentBlock = exports.getCurrentBlock = function getCurrentBlock(editorState) {
    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var block = contentState.getBlockForKey(selectionState.getStartKey());

    return block;
};

// Change the block type of the current block
var resetBlockWithType = exports.resetBlockWithType = function resetBlockWithType(editorState) {
    var newType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.Block.UNSTYLED;
    var overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();

    var key = selectionState.getStartKey();
    var blockMap = contentState.getBlockMap();

    var block = blockMap.get(key);
    var newBlock = block.mergeDeep(overrides, {
        type: newType,
        data: getDefaultBlockData(newType)
    });

    var newContentState = contentState.merge({
        blockMap: blockMap.set(key, newBlock),
        selectionAfter: selectionState.merge({
            anchorOffset: 0,
            focusOffset: 0
        })
    });

    return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
};

/**
*   Adds new block at the current cursor position
*/
var addNewBlock = exports.addNewBlock = function addNewBlock(editorState) {
    var newType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.Block.UNSTYLED;
    var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var selectionState = editorState.getSelection();

    if (!selectionState.isCollapsed()) return editorState;

    var contentState = editorState.getCurrentContent();
    var key = selectionState.getStartKey();
    var blockMap = contentState.getBlockMap();
    var currentBlock = getCurrentBlock(editorState);

    if (!currentBlock) return editorState;

    if (currentBlock.getLength() === 0) {
        if (currentBlock.getType() === newType) {
            return editorState;
        }
        var newBlock = currentBlock.merge({
            type: newType,
            data: getDefaultBlockData(newType, initialData)
        });
        // console.log(newBlock);

        var newContentState = contentState.merge({
            blockMap: blockMap.set(key, newBlock),
            selectionAfter: selectionState
        });

        return _draftJs.EditorState.push(editorState, newContentState, 'insert-fragment');
    }
    return editorState;
};

var insertDataBlock = exports.insertDataBlock = function insertDataBlock(editorState, data) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();

    var afterRemoval = _draftJs.Modifier.removeRange(contentState, selectionState, 'backward');

    var targetSelection = afterRemoval.getSelectionAfter();
    var afterSplit = _draftJs.Modifier.splitBlock(afterRemoval, targetSelection);
    var insertionTarget = afterSplit.getSelectionAfter();

    var asAtomicBlock = _draftJs.Modifier.setBlockType(afterSplit, insertionTarget, 'atomic');

    var block = new _draftJs.ContentBlock({
        key: (0, _draftJs.genKey)(),
        type: 'atomic',
        text: '',
        characterList: new _immutable.List(),
        data: new _immutable.Map(data)
    });

    var fragmentArray = [block, new _draftJs.ContentBlock({
        key: (0, _draftJs.genKey)(),
        type: 'unstyled',
        text: '',
        characterList: new _immutable.List()
    })];

    var fragment = _draftJs.BlockMapBuilder.createFromArray(fragmentArray);

    var withAtomicBlock = _draftJs.Modifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);

    var newContent = withAtomicBlock.merge({
        selectionBefore: selectionState,
        selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
    });
    return _draftJs.EditorState.push(editorState, newContent, 'insert-fragment');
};