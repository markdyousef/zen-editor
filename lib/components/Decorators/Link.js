'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: #3b5998;\n    text-decoration: underline;\n'], ['\n    color: #3b5998;\n    text-decoration: underline;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = _styledComponents2.default.a(_templateObject);

exports.default = function (_ref) {
    var contentState = _ref.contentState,
        entityKey = _ref.entityKey,
        children = _ref.children;

    var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
        url = _contentState$getEnti.url;

    return _react2.default.createElement(
        Link,
        { href: url },
        children
    );
};