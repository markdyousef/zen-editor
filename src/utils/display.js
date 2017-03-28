// @flow

/**
*   returns the native selection node
**/
export const getSelection = (root:Object) => {
    let t = null;

    if (root.getSelection) {
        t = root.getSelection();
    } else if (root.document.getSelection) {
        t = root.document.getSelection();
    } else if (root.document.selection) {
        t = root.document.selection.createRange().text;
    }
    return t;
};

/**
* Recursively finds the DOM Element of the block where the cursor is currently present
**/
export const getSelectedBlockNode = (root:Object) => {
    const selection = root.getSelection();

    if (selection.rangeCount === 0) return null;

    let node = selection.getRangeAt(0).startContainer;

    do {
        if (node.getAttribute && node.getAttribute('data-block') === 'true') {
            return node;
        }

        node = node.parentNode;
    } while (node !== null);

    return null;
};
