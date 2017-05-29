// @flow
import { genKey, EditorState, ContentBlock, Modifier, BlockMapBuilder } from 'draft-js';
import { List, Map } from 'immutable';
import { Block } from './constants';


/**
*   Returns default block-level metadata for various block type.
*   Empty object otherwise
**/
export const getDefaultBlockData = (blockType: string, initialData:Object = {}) => {
    switch (blockType) {
    case Block.TODO: return { checked: false };
    default: return initialData;
    }
};

/**
*   Get currentBlock in the editorState
**/
export const getCurrentBlock = (editorState:EditorState) => {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const block = contentState.getBlockForKey(selectionState.getStartKey());

    return block;
};

// Change the block type of the current block
export const resetBlockWithType = (editorState: EditorState, newType:string = Block.UNSTYLED, overrides?:Object = {}):EditorState => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const key = selectionState.getStartKey();
    const blockMap = contentState.getBlockMap();

    const block = blockMap.get(key);
    const newBlock = block.mergeDeep(overrides, {
        type: newType,
        data: getDefaultBlockData(newType)
    });

    const newContentState = contentState.merge({
        blockMap: blockMap.set(key, newBlock),
        selectionAfter: selectionState.merge({
            anchorOffset: 0,
            focusOffset: 0
        })
    });

    return EditorState.push(editorState, newContentState, 'change-block-type');
};

/**
*   Adds new block at the current cursor position
*/
export const addNewBlock = (editorState:EditorState, newType:string = Block.UNSTYLED, initialData:Object = {}) => {
    const selectionState = editorState.getSelection();

    if (!selectionState.isCollapsed()) return editorState;

    const contentState = editorState.getCurrentContent();
    const key = selectionState.getStartKey();
    const blockMap = contentState.getBlockMap();
    const currentBlock = getCurrentBlock(editorState);

    if (!currentBlock) return editorState;

    if (currentBlock.getLength() === 0) {
        if (currentBlock.getType() === newType) {
            return editorState;
        }
        const newBlock = currentBlock.merge({
            type: newType,
            data: getDefaultBlockData(newType, initialData)
        });
        // console.log(newBlock);

        const newContentState = contentState.merge({
            blockMap: blockMap.set(key, newBlock),
            selectionAfter: selectionState
        });

        return EditorState.push(editorState, newContentState, 'insert-fragment');
    }
    return editorState;
};

export const insertDataBlock = (editorState:EditorState, data:Object) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const afterRemoval = Modifier.removeRange(
        contentState,
        selectionState,
        'backward'
    );

    const targetSelection = afterRemoval.getSelectionAfter();
    const afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);
    const insertionTarget = afterSplit.getSelectionAfter();

    const asAtomicBlock = Modifier.setBlockType(
        afterSplit,
        insertionTarget,
        'atomic'
    );

    const block = new ContentBlock({
        key: genKey(),
        type: 'atomic',
        text: '',
        characterList: new List(),
        data: new Map(data)
    });

    const fragmentArray = [
        block,
        new ContentBlock({
            key: genKey(),
            type: 'unstyled',
            text: '',
            characterList: new List()
        })
    ];

    const fragment = BlockMapBuilder.createFromArray(fragmentArray);

    const withAtomicBlock = Modifier.replaceWithFragment(
        asAtomicBlock,
        insertionTarget,
        fragment
    );

    const newContent = withAtomicBlock.merge({
        selectionBefore: selectionState,
        selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
    });
    return EditorState.push(editorState, newContent, 'insert-fragment');
};
