// @flow
import { EditorState } from 'draft-js';
import { Block } from './constants';

/**
*   Returns default block-level metadata for various block type.
*   Empty object otherwise
**/
export const getDefaultBlockData = (blockType: String, initialData:Object = {}) => {
    switch (blockType) {
    case Block.TODO: return { checked: false };
    default: return initialData;
    }
};

/**
*   Get currentBlock in the editorState
**/
export const getCurrentBlock = (editorState:Object) => {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const block = contentState.getBlockForKey(selectionState.getStartKey());

    return block;
};

/**
*   Adds new block at the current cursor position
*/
export const addNewBlock = (editorState:Object, newType:String = Block.UNSTYLED, initialData:Object = {}) => {
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

        const newContentState = contentState.merge({
            blockMap: blockMap.set(key, newBlock),
            selectionAfter: selectionState
        });

        return EditorState.push(editorState, newContentState, 'change-block-type');
    }
    return editorState;
};
