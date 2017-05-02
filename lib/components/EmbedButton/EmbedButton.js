'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _embed = require('../../icons/embed');

var _embed2 = _interopRequireDefault(_embed);

var _ActionIcon = require('../ActionIcon');

var _ActionIcon2 = _interopRequireDefault(_ActionIcon);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbedButton = function (_Component) {
    _inherits(EmbedButton, _Component);

    function EmbedButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EmbedButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmbedButton.__proto__ || Object.getPrototypeOf(EmbedButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
            var url = window.prompt('Enter URL');

            if (!url) return;
            _this.addEmbedURL(url);
        }, _this.addEmbedURL = function (src) {
            var _this$props = _this.props,
                editorState = _this$props.editorState,
                setEditorState = _this$props.setEditorState,
                close = _this$props.close;

            var data = { src: src, type: 'embed' };
            setEditorState((0, _utils.insertDataBlock)(editorState, data));
            close();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EmbedButton, [{
        key: 'render',
        value: function render() {
            var title = this.props.title;

            return _react2.default.createElement(
                _ActionIcon2.default,
                { onClick: this.onClick },
                _react2.default.createElement(_embed2.default, null),
                title
            );
        }
    }]);

    return EmbedButton;
}(_react.Component);

EmbedButton.propTypes = {
    title: _react.PropTypes.string.isRequired,
    editorState: _react.PropTypes.shape({
        _immutable: _react.PropTypes.object
    }).isRequired,
    setEditorState: _react.PropTypes.func.isRequired,
    close: _react.PropTypes.func.isRequired
};
exports.default = EmbedButton;