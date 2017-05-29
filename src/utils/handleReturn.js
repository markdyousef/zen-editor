// @flow
import { EditorState, RichUtils } from 'draft-js';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import { insertNewUnstyledBlock } from 'draftjs-utils';
import { getCurrentBlock, resetBlockWithType } from './blocks';
import { Block } from './constants';

const continuousBlocks = [
    Block.UNSTYLED,
    Block.BLOCKQUOTE,
    Block.OL,
    Block.UL,
    Block.CODE,
    Block.TODO
];

export default (event: Object, editorState: EditorState, onChange: Function) => {
    if (isSoftNewlineEvent(event)) {
        onChange(RichUtils.insertSoftNewline(editorState));
        return 'handled';
    }
    const currentBlock = getCurrentBlock(editorState);
    const blockType = currentBlock.getType();
    if (!event.altKey && !event.metaKey && !event.ctrlKey) {
        if (blockType.indexOf(Block.ATOMIC) === 0) {
            onChange(insertNewUnstyledBlock(editorState, currentBlock.getKey()));
            return 'handled';
        }

        if (currentBlock.getLength() === 0) {
            switch (blockType) {
            case Block.UL:
            case Block.OL:
            case Block.H1:
            case Block.H2:
            case Block.H3:
            case Block.BLOCKQUOTE:
            case Block.BLOCKQUOTE_CAPTION:
                onChange(resetBlockWithType(editorState, Block.UNSTYLED));
                return 'handled';
            default:
                return 'not_handled';
            }
        }
    }

    const selection = editorState.getSelection();

    if (selection.isCollapsed() && currentBlock.getLength() === selection.getStartOffset()) {
        if (continuousBlocks.indexOf(blockType) < 0) {
            onChange(insertNewUnstyledBlock(editorState, currentBlock.getKey()));
            return 'handled';
        }
        return 'not_handled';
    }
    return 'not_handled';
};
