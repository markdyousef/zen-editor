'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _StyleButton = require('./StyleButton');

var _StyleButton2 = _interopRequireDefault(_StyleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders component correctly', function () {
    var props = {
        onToggle: function onToggle() {},
        style: '',
        label: '',
        active: false
    };
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_StyleButton2.default, props));
    expect(component).toMatchSnapshot(component);
});