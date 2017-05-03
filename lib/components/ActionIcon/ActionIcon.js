'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 25px;\n    cursor: pointer;\n    font-size: 12px;\n    display: flex;\n    align-items: center;\n    background: ', ';\n    border: none;\n    outline: none;\n    margin-bottom: 5px;\n    color: ', ';\n    & svg {\n        padding: 5px;\n        border: 1px solid ', ';\n        border-radius: 3px;\n        height: 12px;\n        width: 12px;\n        margin-right: 5px;\n        fill: ', '\n    }\n'], ['\n    height: 25px;\n    cursor: pointer;\n    font-size: 12px;\n    display: flex;\n    align-items: center;\n    background: ', ';\n    border: none;\n    outline: none;\n    margin-bottom: 5px;\n    color: ', ';\n    & svg {\n        padding: 5px;\n        border: 1px solid ', ';\n        border-radius: 3px;\n        height: 12px;\n        width: 12px;\n        margin-right: 5px;\n        fill: ', '\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, _colors.actionsColor.background, function (props) {
    return props.active ? _colors.actionsColor.textActive : _colors.actionsColor.text;
}, _colors.actionsColor.text, function (props) {
    return props.active ? _colors.actionsColor.textActive : _colors.actionsColor.text;
});

exports.default = function (_ref) {
    var children = _ref.children,
        onClick = _ref.onClick,
        active = _ref.active;

    return _react2.default.createElement(
        Button,
        { onClick: onClick, active: active },
        children
    );
};