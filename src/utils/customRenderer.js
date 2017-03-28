// @flow
import { Block } from './constants';
import ImageBlock from '../components/Blocks/Image';

export default (editorState:Object, getEditorState:Function) => (contentBlock:Object) => {
    const type = contentBlock.getType();
    switch (type) {
    case Block.IMAGE:
        return {
            component: ImageBlock,
            props: {
                editorState,
                getEditorState
            }
        }
    default:
        return null;
    }
};
