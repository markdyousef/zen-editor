'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: rgba(98, 177, 254, 1.0);\n    direction: ltr;\n    unicode-bidi: bidi-override\n'], ['\n    color: rgba(98, 177, 254, 1.0);\n    direction: ltr;\n    unicode-bidi: bidi-override\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Handle = _styledComponents2.default.span(_templateObject);

exports.default = function (_ref) {
    var contentState = _ref.contentState,
        entityKey = _ref.entityKey,
        children = _ref.children;

    return _react2.default.createElement(
        Handle,
        null,
        children
    );
};