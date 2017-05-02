'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleButton = require('../StyleButton');

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _bold = require('../../icons/bold');

var _bold2 = _interopRequireDefault(_bold);

var _italic = require('../../icons/italic');

var _italic2 = _interopRequireDefault(_italic);

var _underline = require('../../icons/underline');

var _underline2 = _interopRequireDefault(_underline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INLINE_BUTTONS = [{
    label: 'B',
    style: 'BOLD',
    Icon: _bold2.default,
    description: 'Bold'
}, {
    label: 'I',
    style: 'ITALIC',
    Icon: _italic2.default,
    description: 'Italic'
}, {
    label: 'U',
    style: 'UNDERLINE',
    Icon: _underline2.default,
    description: 'Underline'
}, {
    label: 'Hi',
    style: 'HIGHLIGHT',
    Icon: _underline2.default,
    description: 'Highlight selection'
}];


var InlineToolbar = function InlineToolbar(_ref) {
    var onToggle = _ref.onToggle,
        editorState = _ref.editorState;

    var currentStyle = editorState.getCurrentInlineStyle();
    return _react2.default.createElement(
        'div',
        null,
        INLINE_BUTTONS.map(function (item) {
            return _react2.default.createElement(_StyleButton2.default, {
                key: item.label,
                active: currentStyle.has(item.style),
                label: item.label,
                onToggle: onToggle,
                style: item.style,
                Icon: item.Icon
            });
        })
    );
};

InlineToolbar.propTypes = {
    editorState: _react.PropTypes.shape({
        _immutable: _react.PropTypes.object
    }).isRequired,
    onToggle: _react.PropTypes.func.isRequired
};

exports.default = InlineToolbar;