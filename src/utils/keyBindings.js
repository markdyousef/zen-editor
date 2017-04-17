// @flow
import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

const { hasCommandModifier, isCtrlKeyCommand } = KeyBindingUtil;

export default (event: Object) => {
    // command + o
    if (event.keyCode === 79 && hasCommandModifier(event)) {
        return 'open-finder';
    }
    if (event.keyCode === 49 && isCtrlKeyCommand(event)) {
        return 'header-one';
    }
    return getDefaultKeyBinding(event);
};
