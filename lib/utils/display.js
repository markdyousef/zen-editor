'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
*   Returns the 'boundingClientRect' of the passed selection
**/
var getSelectionRect = exports.getSelectionRect = function getSelectionRect(selected) {
    var currentRect = selected.getRangeAt(0).getBoundingClientRect();
    var rect = currentRect && currentRect.top ? currentRect : selected.getRangeAt(0).getClientRects()[0];

    if (!rect) {
        if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
            rect = selected.anchorNode.getBoundingClientRect();
            rect.isEmptyLine = true;
        } else {
            return null;
        }
    }
    return rect;
};

/**
*   returns the native selection node
**/
var getSelection = exports.getSelection = function getSelection(window) {
    var selection = null;

    if (window.getSelection) {
        selection = window.getSelection();
    } else if (window.document.getSelection) {
        selection = window.document.getSelection();
    } else if (window.document.selection) {
        selection = window.document.selection.createRange().text;
    }
    return selection;
};

/**
* Recursively finds the DOM Element of the block where the cursor is currently present
**/
var getSelectedBlockNode = exports.getSelectedBlockNode = function getSelectedBlockNode(window) {
    var selection = window.getSelection();

    if (selection.rangeCount === 0) return null;

    var node = selection.getRangeAt(0).startContainer;

    do {
        if (node.getAttribute && node.getAttribute('data-block') === 'true') {
            return node;
        }

        node = node.parentNode;
    } while (node !== null);

    return null;
};