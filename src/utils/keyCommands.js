// @flow
import { Block, Inline } from '../utils';

export default (editor:Object, command:string):string => {
    switch (command) {
    case Block.H1:
        editor.toggleBlockType(command);
        return 'handled';

    case Block.H2:
        editor.toggleBlockType(command);
        return 'handled';

    case Block.BLOCKQUOTE:
        editor.toggleBlockType(command);
        return 'handled';

    case Block.UL:
        editor.toggleBlockType(command);
        return 'handled';

    case Block.OL:
        editor.toggleBlockType(command);
        return 'handled';

    case Block.CODE:
        editor.toggleBlockType(command);
        return 'handled';

    case Inline.BOLD:
        editor.toggleInlineStyle(command);
        return 'handled';

    case Inline.ITALIC:
        editor.toggleInlineStyle(command);
        return 'handled';

    case Inline.UNDERLINE:
        editor.toggleInlineStyle(command);
        return 'handled';

    case Inline.HIGHLIGHT:
        editor.toggleInlineStyle(command);
        return 'handled';

    default:
        return 'not-handled';
    }
};
