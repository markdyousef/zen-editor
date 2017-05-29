// @flow
import { Block } from './constants';
import ImageBlock from '../components/Blocks/Image';
import EmbedBlock from '../components/Blocks/Embed';
import AtomicBlock from '../components/Blocks/Atomic';
import SeparatorBlock from '../components/Blocks/Separator';
import CodeBlock from '../components/Blocks/CodeBlockContainer';

const renderAtomic = (editorState, contentBlock) => {
    const contentState = editorState.getCurrentContent();
    const entity = contentState.getEntity(contentBlock.getEntityAt(0));
    if (entity.getType() === 'image') {
        return {
            component: ImageBlock,
            editable: false,
            props: {
                data: entity.get('data')
            }
        };
    }
    if (entity.getType() === 'code') {
        return {
            component: CodeBlock,
            editable: false,
            props: {
                data: entity.get('data')
            }
        };
    }
    return {
        component: AtomicBlock,
        editable: false,
        props: {
            components: {
                embed: EmbedBlock,
                separator: SeparatorBlock
            }
        }
    };
};

export default (editorState:Object) => (contentBlock:Object) => {
    const type = contentBlock.getType();
    switch (type) {
    case Block.ATOMIC:
        return renderAtomic(editorState, contentBlock);
    default:
        return null;
    }
};
