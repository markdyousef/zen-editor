// @flow
import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

const { hasCommandModifier, isCtrlKeyCommand } = KeyBindingUtil;

export default (event: Object) => {
    // command + o
    if (event.keyCode === 79 && hasCommandModifier(event)) {
        return 'open-finder';
    }
    // ctrl + 1
    if (event.keyCode === 49 && isCtrlKeyCommand(event)) {
        return 'header-one';
    }
    // ctrl + 2
    if (event.keyCode === 50 && isCtrlKeyCommand(event)) {
        return 'header-two';
    }
    // ctrl + *
    if (event.keyCode === 56 && isCtrlKeyCommand(event)) {
        return 'unordered-list-item';
    }
    // ctrl + ''
    if (event.keyCode === 222 && isCtrlKeyCommand(event)) {
        return 'blockquote';
    }
    // ctrl + ``
    if (event.keyCode === 192 && isCtrlKeyCommand(event)) {
        return 'code-block';
    }
    // command + b
    if (event.keyCode === 66 && hasCommandModifier(event)) {
        return 'BOLD';
    }
    // command + u
    if (event.keyCode === 85 && hasCommandModifier(event)) {
        return 'UNDERLINE';
    }
    // command + i
    if (event.keyCode === 73 && hasCommandModifier(event)) {
        return 'ITALIC';
    }
    // command + h
    if (event.keyCode === 72 && hasCommandModifier(event)) {
        return 'HIGHLIGHT';
    }
    return getDefaultKeyBinding(event);
};
