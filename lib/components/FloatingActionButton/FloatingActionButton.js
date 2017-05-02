'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 200px;\n    width: 100px;\n    position: absolute;\n    top: ', 'px;\n    left: -40px;\n'], ['\n    height: 200px;\n    width: 100px;\n    position: absolute;\n    top: ', 'px;\n    left: -40px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 35px;\n    height: 35px;\n    background-color: #fff;\n    border-radius: 999em;\n    border: 1px solid #e5e5e5;\n    outline: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n'], ['\n    width: 35px;\n    height: 35px;\n    background-color: #fff;\n    border-radius: 999em;\n    border: 1px solid #e5e5e5;\n    outline: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 200px;\n    ', ';\n    z-index: 2;\n    transition: all 0.1s ease;\n    visibility: ', ';\n    cursor: auto;\n    &:after {\n        content: \'\';\n        position: absolute;\n        bottom: -5px;\n        left: 50%;\n        margin-left: -5px;\n    }\n'], ['\n    width: 200px;\n    ', ';\n    z-index: 2;\n    transition: all 0.1s ease;\n    visibility: ', ';\n    cursor: auto;\n    &:after {\n        content: \'\';\n        position: absolute;\n        bottom: -5px;\n        left: 50%;\n        margin-left: -5px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _layouts = require('../../styles/layouts');

var _ImageButton = require('../ImageButton');

var _ImageButton2 = _interopRequireDefault(_ImageButton);

var _EmbedButton = require('../EmbedButton');

var _EmbedButton2 = _interopRequireDefault(_EmbedButton);

var _display = require('../../utils/display');

var _plus = require('../../icons/plus');

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
    return props.top;
});

var Button = _styledComponents2.default.div(_templateObject2);

var Dropdown = _styledComponents2.default.div(_templateObject3, (0, _layouts.boxLayout)(), function (props) {
    return props.isOpen ? 'visible' : 'hidden';
});

var ACTION_BUTTONS = [{
    title: 'Image',
    component: _ImageButton2.default
}, {
    title: 'Embed',
    component: _EmbedButton2.default
}
// {
//     title: 'Separator',
//     component: ''
// }
];

var FloatingActionButton = function (_Component) {
    _inherits(FloatingActionButton, _Component);

    function FloatingActionButton() {
        _classCallCheck(this, FloatingActionButton);

        var _this = _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call(this));

        _this.findNode = function () {
            var node = (0, _display.getSelectedBlockNode)(window);
            if (node === _this.node) return;

            if (!node) {
                _this.setState({
                    isVisible: false,
                    isOpen: false
                });
                return;
            }

            _this.node = node;
            _this.setState({
                isVisible: true,
                top: node.offsetTop - 4
            });
        };

        _this.node = null;
        _this.blockType = '';
        _this.blockKey = '';
        _this.blockLength = -1;
        _this.state = {
            isVisible: false,
            isOpen: false,
            top: null
        };
        return _this;
    }

    _createClass(FloatingActionButton, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // only show FAB when text length === 0
            var editorState = nextProps.editorState;

            var contentState = editorState.getCurrentContent();
            var selectionState = editorState.getSelection();

            if (!selectionState.isCollapsed() || selectionState.anchorKey !== selectionState.focusKey) {
                this.setState({
                    isVisible: false,
                    isOpen: false
                });
                return;
            }

            var block = contentState.getBlockForKey(selectionState.anchorKey);
            var blockKey = block.getKey();

            if (block.getLength() > 0) {
                this.setState({
                    isVisible: false,
                    isOpen: false
                });
                return;
            }

            if (block.getType() !== this.blockType) {
                this.blockType = block.getType();
                if (block.getLength() === 0) {
                    setTimeout(this.findNode, 0);
                }
                this.blockKey = blockKey;
                return;
            }

            if (this.blockKey === blockKey) {
                if (block.getLength() > 0) {
                    this.setState({
                        isVisible: false,
                        isOpen: false
                    });
                } else {
                    this.setState({
                        isVisible: true
                    });
                }
                return;
            }
            this.blockKey = blockKey;
            if (block.getLength() > 0) {
                this.setState({
                    isVisible: false,
                    isOpen: false
                });
            }
            setTimeout(this.findNode, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                isOpen = _state.isOpen,
                top = _state.top,
                isVisible = _state.isVisible;
            var _props = this.props,
                editorState = _props.editorState,
                setEditorState = _props.setEditorState,
                focus = _props.focus;


            if (!isVisible) return null;

            return _react2.default.createElement(
                Container,
                { top: top },
                _react2.default.createElement(
                    Button,
                    { onClick: function onClick() {
                            return _this2.setState({ isOpen: !isOpen });
                        } },
                    _react2.default.createElement(_plus2.default, null)
                ),
                _react2.default.createElement(
                    Dropdown,
                    { isOpen: isOpen },
                    ACTION_BUTTONS.map(function (button) {
                        var ActionButton = button.component;
                        return _react2.default.createElement(ActionButton, {
                            key: button.title,
                            title: button.title,
                            editorState: editorState,
                            setEditorState: setEditorState,
                            close: function close() {
                                return _this2.setState({ isOpen: !isOpen });
                            }
                        });
                    })
                )
            );
        }
    }]);

    return FloatingActionButton;
}(_react.Component);

exports.default = FloatingActionButton;