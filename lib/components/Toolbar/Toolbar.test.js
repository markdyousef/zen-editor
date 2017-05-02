'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
    var props = {
        editorState: {},
        toggleBlockType: function toggleBlockType() {},
        toggleInlineStyle: function toggleInlineStyle() {},
        focus: function focus() {},
        showToolbar: true
    };
    var shallowComponent = (0, _enzyme.shallow)(_react2.default.createElement(_Toolbar2.default, props));
    expect(shallowComponent).toMatchSnapshot(shallowComponent);
});