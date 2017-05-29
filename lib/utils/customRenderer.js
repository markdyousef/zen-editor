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

var renderAtomic = function renderAtomic(editorState, contentBlock) {
    var contentState = editorState.getCurrentContent();
    var entity = contentState.getEntity(contentBlock.getEntityAt(0));
    if (entity.getType() === 'image') {
        return {
            component: _Image2.default,
            editable: false,
            props: {
                data: entity.get('data')
            }
        };
    }
    return {
        component: _Atomic2.default,
        editable: false,
        props: {
            components: {
                embed: _Embed2.default,
                separator: _Separator2.default
            }
        }
    };
};

exports.default = function (editorState) {
    return function (contentBlock) {
        var type = contentBlock.getType();
        switch (type) {
            case _constants.Block.ATOMIC:
                return renderAtomic(editorState, contentBlock);
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