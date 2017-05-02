'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionIcon = require('../ActionIcon');

var _ActionIcon2 = _interopRequireDefault(_ActionIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = function (_Component) {
    _inherits(StyleButton, _Component);

    function StyleButton() {
        _classCallCheck(this, StyleButton);

        var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

        _this.onToggle = function (e) {
            var _this$props = _this.props,
                onToggle = _this$props.onToggle,
                style = _this$props.style;

            e.preventDefault();
            onToggle(style);
        };

        _this.state = {};
        return _this;
    }

    _createClass(StyleButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                active = _props.active,
                Icon = _props.Icon;

            return _react2.default.createElement(
                _ActionIcon2.default,
                { active: active, onClick: this.onToggle },
                Icon && _react2.default.createElement(Icon, null),
                label
            );
        }
    }]);

    return StyleButton;
}(_react.Component);

StyleButton.propTypes = {
    onToggle: _react.PropTypes.func.isRequired,
    style: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string.isRequired,
    active: _react.PropTypes.bool.isRequired,
    Icon: _react.PropTypes.func
};
StyleButton.defaultProps = {
    Icon: null
};
exports.default = StyleButton;