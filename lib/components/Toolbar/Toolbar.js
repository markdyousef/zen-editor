'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 200px;\n    ', '\n    display: flex;\n    flex-direction: column;\n    ', ';\n    z-index: 2;\n    transform: translate(-50%) scale(0);\n    cursor: auto;\n    &:after {\n        content: \'\';\n        position: absolute;\n        bottom: -5px;\n        left: 50%;\n        margin-left: -5px;\n    }\n'], ['\n    width: 200px;\n    ', '\n    display: flex;\n    flex-direction: column;\n    ', ';\n    z-index: 2;\n    transform: translate(-50%) scale(0);\n    cursor: auto;\n    &:after {\n        content: \'\';\n        position: absolute;\n        bottom: -5px;\n        left: 50%;\n        margin-left: -5px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _draftJs = require('draft-js');

var _BlockToolbar = require('./BlockToolbar');

var _BlockToolbar2 = _interopRequireDefault(_BlockToolbar);

var _InlineToolbar = require('./InlineToolbar');

var _InlineToolbar2 = _interopRequireDefault(_InlineToolbar);

var _colors = require('../../styles/colors');

var _layouts = require('../../styles/layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Toolbar height
// const toolbarHeight = 200;

var Container = _styledComponents2.default.div(_templateObject, '' /* height: ${toolbarHeight}px; */, (0, _layouts.boxLayout)());

var getRelativeParent = function getRelativeParent(element) {
    if (!element) {
        return null;
    }

    var position = window.getComputedStyle(element).getPropertyValue('position');
    if (position !== 'static') {
        return element;
    }

    return getRelativeParent(element.parentElement);
};

var Toolbar = function (_Component) {
    _inherits(Toolbar, _Component);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this));

        _this.state = {
            position: {}
        };
        return _this;
    }

    _createClass(Toolbar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            setTimeout(function () {
                var position = void 0;
                if (nextProps.showToolbar) {
                    var relativeParent = getRelativeParent(_this2.toolbar.parentElement);
                    var relativeRect = relativeParent ? relativeParent.getBoundingClientRect() : document.body.getBoundingClientRect();
                    position = {
                        top: _this2.selectionRect.top + relativeRect.top,
                        // left: (this.selectionRect.left - relativeRect.left) + (this.selectionRect.width / 2),
                        left: _this2.selectionRect.left - 200,
                        transform: 'translate(-50%) scale(1)',
                        transition: 'transform 0.15s cubic-brezier(0.3, 1.2, 0.2, 1)'
                    };
                    // console.log(this.selectionRect.left);
                    // console.log(this.selectionRect.width);
                    _this2.props.focus();
                } else {
                    position = { transform: 'translate(-50%) scale(0)' };
                }
                _this2.setState({ position: position });
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.selectionRect = (0, _draftJs.getVisibleSelectionRect)(window);
            this.props.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                toggleBlockType = _props.toggleBlockType,
                editorState = _props.editorState,
                showToolbar = _props.showToolbar,
                toggleInlineStyle = _props.toggleInlineStyle;
            var position = this.state.position;

            return _react2.default.createElement(
                Container,
                { showToolbar: showToolbar, style: position, ref: function ref(element) {
                        _this3.toolbar = element;
                    } },
                _react2.default.createElement(_BlockToolbar2.default, {
                    onToggle: toggleBlockType,
                    editorState: editorState
                }),
                _react2.default.createElement(_InlineToolbar2.default, {
                    onToggle: toggleInlineStyle,
                    editorState: editorState
                })
            );
        }
    }]);

    return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
    editorState: _react.PropTypes.shape({
        _immutable: _react.PropTypes.object
    }),
    toggleBlockType: _react.PropTypes.func.isRequired,
    toggleInlineStyle: _react.PropTypes.func.isRequired,
    focus: _react.PropTypes.func.isRequired,
    showToolbar: _react.PropTypes.bool.isRequired,
    editorNode: _react.PropTypes.shape({
        props: _react.PropTypes.object
    })
};
Toolbar.defaultProps = {
    editorState: {},
    editorNode: {}
};
exports.default = Toolbar;