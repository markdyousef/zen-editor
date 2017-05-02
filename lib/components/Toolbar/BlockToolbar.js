'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _StyleButton = require('../StyleButton');

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _h = require('../../icons/h1');

var _h2 = _interopRequireDefault(_h);

var _h3 = require('../../icons/h2');

var _h4 = _interopRequireDefault(_h3);

var _quote = require('../../icons/quote');

var _quote2 = _interopRequireDefault(_quote);

var _unorderedList = require('../../icons/unorderedList');

var _unorderedList2 = _interopRequireDefault(_unorderedList);

var _codeBlock = require('../../icons/codeBlock');

var _codeBlock2 = _interopRequireDefault(_codeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BLOCK_TYPES = [{ label: 'H1', style: 'header-one', Icon: _h2.default }, { label: 'H2', style: 'header-two', Icon: _h4.default }, { label: 'Quote', style: 'blockquote', Icon: _quote2.default }, { label: 'Bulleted List', style: 'unordered-list-item', Icon: _unorderedList2.default }, { label: 'Numbered List', style: 'ordered-list-item', Icon: _unorderedList2.default }, { label: 'Code Block', style: 'code-block', Icon: _codeBlock2.default }];

var BlockToolbar = function BlockToolbar(_ref) {
    var onToggle = _ref.onToggle,
        editorState = _ref.editorState;

    var blockType = _draftJs.RichUtils.getCurrentBlockType(editorState);
    return _react2.default.createElement(
        'div',
        null,
        BLOCK_TYPES.map(function (item) {
            return _react2.default.createElement(_StyleButton2.default, {
                key: item.label,
                active: item.style === blockType,
                label: item.label,
                onToggle: onToggle,
                style: item.style,
                Icon: item.Icon
            });
        })
    );
};

BlockToolbar.propTypes = {
    editorState: _react.PropTypes.shape({
        _immutable: _react.PropTypes.object
    }).isRequired,
    onToggle: _react.PropTypes.func.isRequired
};

exports.default = BlockToolbar;