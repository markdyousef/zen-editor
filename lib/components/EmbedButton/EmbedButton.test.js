'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _EmbedButton = require('./EmbedButton');

var _EmbedButton2 = _interopRequireDefault(_EmbedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders component correctly', function () {
    var props = {
        title: '',
        editorState: {},
        setEditorState: function setEditorState() {},
        close: function close() {}
    };
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_EmbedButton2.default, props));
    expect(component).toMatchSnapshot(component);
});