'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    margin: 5px;\n'], ['\n    margin: 5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var EmbedBlock = function (_Component) {
    _inherits(EmbedBlock, _Component);

    function EmbedBlock() {
        _classCallCheck(this, EmbedBlock);

        var _this = _possibleConstructorReturn(this, (EmbedBlock.__proto__ || Object.getPrototypeOf(EmbedBlock)).call(this));

        _this.getScript = function () {
            var script = document.createElement('script');
            script.async = true;
            script.src = '//cdn.embedly.com/widgets/platform.js';
            script.onload = function () {
                window.embedly();
            };
            document.body.appendChild(script);
        };

        _this.renderEmbedly = function () {
            if (window.embedly) {
                window.embedly();
            } else {
                _this.getScript();
            }
        };

        _this.state = {
            showIframe: false
        };
        return _this;
    }

    _createClass(EmbedBlock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderEmbedly();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var showIframe = this.state.showIframe;

            if (prevState.showIframe !== showIframe && showIframe === true) {
                this.renderEmbedly();
            }
        }
        // enablePreview = () => {}

    }, {
        key: 'render',
        value: function render() {
            var src = this.props.data.src;

            var innerHTML = '\n            <div>\n                <a class="embedly-card" href="' + src + '" data-card-controls="0" data-card-theme="dark">\n                    Embedded - ' + src + '\n                </a>\n            </div>\n        ';
            return _react2.default.createElement(
                Container,
                null,
                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: innerHTML } })
            );
        }
    }]);

    return EmbedBlock;
}(_react.Component);

EmbedBlock.propTypes = {
    data: _react.PropTypes.shape({
        src: _react.PropTypes.string
    }).isRequired
};
exports.default = EmbedBlock;