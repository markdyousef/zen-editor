// @flow
export const linkStrategy = (contentBlock: Object, cb: Function, contentState: Object) => {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                    contentState.getEntity().getType() === 'LINK'
            );
        },
        cb
    );
};

const findWithRegex = (regex:Object, contentBlock:Object, cb:Function) => {
    const text = contentBlock.getText();
    let matchArray;
    let start;
    /* eslint-disable */
    while ((matchArray = regex.exec(text)) !== null) {
        start = matchArray.index;
        cb(start, start + matchArray[0].length);
    }
    /* eslint-disable */
};
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;
export const hashtagStrategy = (contentBlock: Object, cb: Function) => {
    findWithRegex(HASHTAG_REGEX, contentBlock, cb);
};

const HANDLE_REGEX = /\@[\w]+/g;
export const handleStrategy = (contentBlock:Object, cb:Function) => {
    findWithRegex(HANDLE_REGEX, contentBlock, cb);
};
