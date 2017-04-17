// @flow
import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

const { hasCommandModifier } = KeyBindingUtil;

export default (event: Object) => {
    if (event.keyCode === 79 && hasCommandModifier(event)) {
        return 'open-finder';
    }

    return getDefaultKeyBinding(event);
};
