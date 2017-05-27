'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var _Image = require('../components/Blocks/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Embed = require('../components/Blocks/Embed');

var _Embed2 = _interopRequireDefault(_Embed);

var _Atomic = require('../components/Blocks/Atomic');

var _Atomic2 = _interopRequireDefault(_Atomic);

var _Separator = require('../components/Blocks/Separator');

var _Separator2 = _interopRequireDefault(_Separator);

var _CodeBlock = require('../components/Blocks/CodeBlock');

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (editorState, setEditorState) {
    return function (contentBlock) {
        var type = contentBlock.getType();
        // TODO: Image always comes as type.unstyled
        switch (type) {
            case _constants.Block.IMAGE:
                return {
                    component: _Image2.default,
                    props: {
                        editorState: editorState,
                        setEditorState: setEditorState
                    }
                };
            case _constants.Block.ATOMIC:
                return {
                    component: _Atomic2.default,
                    editable: false,
                    props: {
                        components: {
                            embed: _Embed2.default,
                            separator: _Separator2.default,
                            image: _Image2.default
                        }
                    }
                };
            case _constants.Block.CODE:
                return {
                    component: _CodeBlock2.default,
                    editable: false
                };
            default:
                return null;
        }
    };
};