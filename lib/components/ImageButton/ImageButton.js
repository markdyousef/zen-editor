'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _image = require('../../icons/image');

var _image2 = _interopRequireDefault(_image);

var _ActionIcon = require('../ActionIcon');

var _ActionIcon2 = _interopRequireDefault(_ActionIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageButton = function (_Component) {
    _inherits(ImageButton, _Component);

    function ImageButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ImageButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageButton.__proto__ || Object.getPrototypeOf(ImageButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
            _this.input.value = null;
            _this.input.click();
        }, _this.onChange = function (event) {
            var _this$props = _this.props,
                close = _this$props.close,
                handleFileUpload = _this$props.handleFileUpload;

            handleFileUpload(event);
            close();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ImageButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var title = this.props.title;

            return _react2.default.createElement(
                _ActionIcon2.default,
                { onClick: this.onClick },
                _react2.default.createElement(_image2.default, null),
                title,
                _react2.default.createElement('input', {
                    type: 'file',
                    accept: 'image/*',
                    ref: function ref(c) {
                        _this2.input = c;
                    },
                    onChange: this.onChange,
                    style: { display: 'none' }
                })
            );
        }
    }]);

    return ImageButton;
}(_react.Component);

ImageButton.defaultProps = {
    handleFileUpload: function handleFileUpload() {},
    close: function close() {},
    title: 'Image'
};
exports.default = ImageButton;