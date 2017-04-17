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

export const hashtagStrategy = () => {};
