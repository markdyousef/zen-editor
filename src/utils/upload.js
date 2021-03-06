// @flow
import { EditorState } from 'draft-js';
import { insertDataBlock } from './index';

export default(onChange: Function, file: Object, editorState: EditorState):Promise<*> => (
    new Promise((resolve, reject) => {
        if (file.type.indexOf('image/') === 0) {
            const src = URL.createObjectURL(file);
            const data = {
                url: src,
                type: 'image',
                display: 'medium',
                name: file.name
            };
            onChange(insertDataBlock(editorState, data));
            return resolve(file);
        }
        return reject('file has to be an image');
    })
);
