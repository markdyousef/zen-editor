'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inlineToolbarPlugin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJsInlineToolbarPlugin = require('draft-js-inline-toolbar-plugin');

var _draftJsInlineToolbarPlugin2 = _interopRequireDefault(_draftJsInlineToolbarPlugin);

var _draftJsButtons = require('draft-js-buttons');

var _buttonsStyles = require('./styles/buttonsStyles.css');

var _buttonsStyles2 = _interopRequireDefault(_buttonsStyles);

var _toolbarStyles = require('./styles/toolbarStyles.css');

var _toolbarStyles2 = _interopRequireDefault(_toolbarStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
var inlineToolbarPlugin = exports.inlineToolbarPlugin = (0, _draftJsInlineToolbarPlugin2.default)({
    structure: [_draftJsButtons.BoldButton, _draftJsButtons.ItalicButton, _draftJsButtons.UnderlineButton, _draftJsButtons.HeadlineOneButton, _draftJsButtons.HeadlineTwoButton, _draftJsButtons.UnorderedListButton, _draftJsButtons.OrderedListButton, _draftJsButtons.BlockquoteButton, _draftJsButtons.CodeBlockButton],
    theme: { buttonStyles: _buttonsStyles2.default, toolbarStyles: _toolbarStyles2.default }
});

var InlineToolbar = inlineToolbarPlugin.InlineToolbar;

exports.default = function () {
    return _react2.default.createElement(InlineToolbar, null);
};