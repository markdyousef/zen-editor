// @flow
import { EditorState } from 'draft-js';
import { getCurrentBlock, resetBlockWithType } from './blocks';
import { Block } from './constants';

export const StringToTypeMap = {
    '# ': Block.H1,
    '##': Block.H2,
    '1.': Block.OL,
    '* ': Block.UL,
    '` ': Block.CODE,
    '" ': Block.BLOCKQUOTE
};

export const beforeInput = (editorState: EditorState, input: string, onChange: Function, mapping:Object = StringToTypeMap):string => {
    const selection = editorState.getSelection();
    const block = getCurrentBlock(editorState);
    const blockType = block.getType();

    // check for atomic blocks
    if (blockType.indexOf(Block.ATOMIC) === 0) {
        return 'not-handled';
    }

    // Should be the first thing on line and not have
    // a length longer then the longest command
    const blockLength = block.getLength();
    if (selection.getAnchorOffset > 1 || blockLength > 2) {
        return 'not-handled';
    }

    const blockTo = mapping[block.getText()[0] + input];
    if (!blockTo) {
        return 'not-handled';
    }

    const finalType = blockTo.split(':');
    if (finalType.length < 1 || finalType.length > 3) {
        return 'not-handled';
    }

    let newType = finalType[0];
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
    onChange(resetBlockWithType(editorState, newType, { text: '' }));
    return 'handled';
};
