'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var linkStrategy = exports.linkStrategy = function linkStrategy(contentBlock, cb, contentState) {
    contentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity().getType() === 'LINK';
    }, cb);
};

var findWithRegex = function findWithRegex(regex, contentBlock, cb) {
    var text = contentBlock.getText();
    var matchArray = void 0;
    var start = void 0;
    /* eslint-disable */
    while ((matchArray = regex.exec(text)) !== null) {
        start = matchArray.index;
        cb(start, start + matchArray[0].length);
    }
    /* eslint-disable */
};
var HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;
var hashtagStrategy = exports.hashtagStrategy = function hashtagStrategy(contentBlock, cb) {
    findWithRegex(HASHTAG_REGEX, contentBlock, cb);
};

var HANDLE_REGEX = /\@[\w]+/g;
var handleStrategy = exports.handleStrategy = function handleStrategy(contentBlock, cb) {
    findWithRegex(HANDLE_REGEX, contentBlock, cb);
};