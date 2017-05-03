'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _FloatingActionButton = require('./FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders component correctly', function () {
    var props = {
        editorState: {},
        focus: function focus() {},
        setEditorState: function setEditorState() {}
    };
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FloatingActionButton2.default, props));
    expect(component).toMatchSnapshot(component);
});