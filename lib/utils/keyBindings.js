'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _draftJs = require('draft-js');

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier,
    isCtrlKeyCommand = _draftJs.KeyBindingUtil.isCtrlKeyCommand;

exports.default = function (event) {
    // command + o
    if (event.keyCode === 79 && hasCommandModifier(event)) {
        return 'open-finder';
    }
    // command + l
    if (event.keyCode === 76 && hasCommandModifier(event)) {
        return 'open-url';
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
    return (0, _draftJs.getDefaultKeyBinding)(event);
};