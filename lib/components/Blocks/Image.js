'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n'], ['\n    position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    max-width: 400px;\n'], ['\n    max-width: 400px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Image = _styledComponents2.default.img(_templateObject2);

var ImageBlock = function ImageBlock(_ref) {
    var blockProps = _ref.blockProps;
    var data = blockProps.data;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(Image, { role: 'presentation', src: data && data.url })
        )
    );
};

exports.default = ImageBlock;