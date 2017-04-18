// @flow
export default (editor:Object, command:string):string => {
    console.log(editor, command);
    switch (command) {
    case 'header-one':
        editor.toggleBlockType(command);
        return 'handled';
    case 'header-two':
        editor.toggleBlockType(command);
        return 'handled';
    case 'blockquote':
        editor.toggleBlockType(command);
        return 'handled';
    case 'unordered-list-item':
        editor.toggleBlockType(command);
        return 'handled';
    case 'ordered-list-item':
        editor.toggleBlockType(command);
        return 'handled';
    case 'code-block':
        editor.toggleBlockType(command);
        return 'handled';
    case 'BOLD':
        editor.toggleInlineStyle(command);
        return 'handled';
    case 'ITALIC':
        editor.toggleInlineStyle(command);
        return 'handled';
    case 'UNDERLINE':
        editor.toggleInlineStyle(command);
        return 'handled';
    case 'HIGHLIGHT':
        editor.toggleInlineStyle(command);
        return 'handled';
    default:
        return 'not-handled';
    }
};
