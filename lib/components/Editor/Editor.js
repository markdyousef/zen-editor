'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

require('draft-js/dist/Draft.css');

var _utils = require('../../utils');

var _styles = require('./styles');

var _FloatingActionButton = require('../FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.onTab = function (event) {
            var _this$props = _this.props,
                editorState = _this$props.editorState,
                onChange = _this$props.onChange;
            // depth on ul and ol

            var levels = 2;
            var newEditorState = _draftJs.RichUtils.onTab(event, editorState, levels);
            if (newEditorState !== editorState) {
                onChange(newEditorState);
            }
        };

        _this.focus = function () {
            return _this.editor.focus();
        };

        _this.toggleBlockType = function (blockType) {
            var _this$props2 = _this.props,
                editorState = _this$props2.editorState,
                onChange = _this$props2.onChange;

            var type = _draftJs.RichUtils.getCurrentBlockType(editorState);
            if (type.indexOf(_utils.Block.ATOMIC + ':') === 0) return;
            onChange(_draftJs.RichUtils.toggleBlockType(editorState, blockType));
        };

        _this.toggleInlineStyle = function (inlineStyle) {
            var _this$props3 = _this.props,
                editorState = _this$props3.editorState,
                onChange = _this$props3.onChange;

            onChange(_draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyle));
        };

        _this.handleKeyCommand = function (command) {
            var _this$props4 = _this.props,
                editorState = _this$props4.editorState,
                onChange = _this$props4.onChange;

            switch (command) {
                case 'open-finder':
                    _this.input.value = null;
                    _this.input.click();
                    return 'handled';
                case 'open-url':
                    {
                        var src = window.prompt('Enter link: ');
                        if (!src) return 'handled';
                        var data = { src: src, type: 'embed' };
                        onChange((0, _utils.insertDataBlock)(editorState, data));
                        return 'handled';
                    }
                default:
                    return (0, _utils.keyCommands)(_this, command);
            }
        };

        _this.handleFileUpload = function (event) {
            var _this$props5 = _this.props,
                editorState = _this$props5.editorState,
                onChange = _this$props5.onChange,
                addFile = _this$props5.addFile;

            event.preventDefault();
            var file = event.target.files[0];
            (0, _utils.addImage)(onChange, file, editorState).then(function (res) {
                return addFile(res);
            }).catch(function (err) {
                return console.log(err);
            });
        };

        _this.handleBeforeInput = function (input) {
            var _this$props6 = _this.props,
                editorState = _this$props6.editorState,
                onChange = _this$props6.onChange;

            return (0, _utils.beforeInput)(editorState, input, onChange, _utils.StringToTypeMap);
        };

        _this.state = {
            showUrlInput: false,
            urlValue: ''
        };
        return _this;
    }
    // onChange = (editorState:Object) => this.setState({ editorState })


    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                editorState = _props.editorState,
                onChange = _props.onChange,
                placeholder = _props.placeholder,
                spellCheck = _props.spellCheck,
                readOnly = _props.readOnly,
                showFAB = _props.showFAB;

            return _react2.default.createElement(
                _styles.Container,
                { onClick: this.focus },
                _react2.default.createElement(
                    _styles.EditorContainer,
                    null,
                    showFAB && _react2.default.createElement(_FloatingActionButton2.default, {
                        setEditorState: onChange,
                        editorState: editorState
                    }),
                    _react2.default.createElement(_draftJs.Editor, {
                        ref: function ref(node) {
                            _this2.editor = node;
                        },
                        editorState: editorState,
                        spellCheck: spellCheck,
                        placeholder: placeholder,
                        onChange: onChange,
                        blockRendererFn: (0, _utils.customRenderer)(editorState, onChange),
                        onTab: this.onTab,
                        keyBindingFn: _utils.keyBindings,
                        handleKeyCommand: this.handleKeyCommand,
                        readOnly: readOnly,
                        customStyleMap: _utils.styleMap,
                        handleBeforeInput: this.handleBeforeInput
                    }),
                    _react2.default.createElement('input', {
                        type: 'file',
                        accept: 'image/*',
                        ref: function ref(c) {
                            _this2.input = c;
                        },
                        onChange: this.handleFileUpload,
                        style: { display: 'none' }
                    })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;