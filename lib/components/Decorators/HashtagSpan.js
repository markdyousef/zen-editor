'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: rgba(95, 184, 138, 1.0);\n'], ['\n    color: rgba(95, 184, 138, 1.0);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hashtag = _styledComponents2.default.span(_templateObject);

exports.default = function (_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        Hashtag,
        null,
        children
    );
};