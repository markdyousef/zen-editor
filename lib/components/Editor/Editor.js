'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _draftJsPluginsEditor = require('draft-js-plugins-editor');

var _draftJsPluginsEditor2 = _interopRequireDefault(_draftJsPluginsEditor);

var _Toolbar = require('../Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _customRenderer = require('../../utils/customRenderer');

var _customRenderer2 = _interopRequireDefault(_customRenderer);

var _utils = require('../../utils');

var _styles = require('./styles');

var _FloatingActionButton = require('../FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import decorator from '../../utils/decorator';


var plugins = [_Toolbar.inlineToolbarPlugin];

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
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
                onChange = _this$props4.onChange,
                addFile = _this$props4.addFile,
                setReadOnly = _this$props4.setReadOnly;

            switch (command) {
                case 'open-finder':
                    _this.input.value = null;
                    _this.input.click();
                    return 'handled';
                case 'open-url':
                    {
                        var src = window.prompt('Enter link: ');
                        if (!src) return 'handled';
                        _this.handleLinkUpload(src);
                        return 'handled';
                    }
                // code block
                case _utils.Block.CODE:
                    (0, _utils.keyCommands)(_this, command);
                    setReadOnly();
                    return 'handled';
                default:
                    return (0, _utils.keyCommands)(_this, command);
            }
        };

        _this.handleFileUpload = function (event) {
            var _this$props5 = _this.props,
                editorState = _this$props5.editorState,
                onChange = _this$props5.onChange,
                addFile = _this$props5.addFile,
                addImage = _this$props5.addImage;


            event.preventDefault();
            var file = event.target.files[0];
            addImage(editorState, file, addFile);
        };

        _this.handleLinkUpload = function (src) {
            var _this$props6 = _this.props,
                editorState = _this$props6.editorState,
                onChange = _this$props6.onChange,
                addFile = _this$props6.addFile;

            var data = { src: src, type: 'embed' };
            onChange((0, _utils.insertDataBlock)(editorState, data));
        };

        _this.handleBeforeInput = function (input) {
            var _this$props7 = _this.props,
                editorState = _this$props7.editorState,
                onChange = _this$props7.onChange;

            return (0, _utils.beforeInput)(editorState, input, onChange, _utils.StringToTypeMap);
        };

        _this.state = {
            showUrlInput: false,
            urlValue: '',
            readOnly: props.readOnly || false
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
                showFAB = _props.showFAB,
                title = _props.title,
                readOnly = _props.readOnly;

            return _react2.default.createElement(
                _styles.Container,
                { onClick: this.focus },
                title && title,
                _react2.default.createElement(
                    _styles.EditorContainer,
                    null,
                    showFAB && !readOnly && _react2.default.createElement(_FloatingActionButton2.default, {
                        setEditorState: onChange,
                        editorState: editorState,
                        handleLinkUpload: this.handleLinkUpload,
                        handleFileUpload: this.handleFileUpload
                    }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_draftJsPluginsEditor2.default, {
                            ref: function ref(node) {
                                _this2.editor = node;
                            },
                            editorState: editorState,
                            spellCheck: spellCheck,
                            placeholder: placeholder,
                            onChange: onChange,
                            blockRendererFn: (0, _customRenderer2.default)(editorState),
                            onTab: this.onTab,
                            keyBindingFn: _utils.keyBindings,
                            handleKeyCommand: this.handleKeyCommand,
                            plugins: plugins,
                            readOnly: readOnly,
                            customStyleMap: _utils.styleMap,
                            handleBeforeInput: this.handleBeforeInput
                        })
                    ),
                    _react2.default.createElement(_Toolbar2.default, null),
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