'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin: 5px;\n'], ['\n    margin: 5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var AtomicBlock = function AtomicBlock(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    var block = props.block,
        blockProps = props.blockProps;

    var data = block.getData().toJS();
    console.log(data);
    if (blockProps.components[data.type]) {
        var Component = blockProps.components[data.type];
        return _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(Component, { data: data })
        );
    }

    return null;
};

AtomicBlock.propTypes = {
    block: _react.PropTypes.shape({
        getEntityAt: _react.PropTypes.func,
        getData: _react.PropTypes.func
    }).isRequired,
    blockProps: _react.PropTypes.shape({
        components: _react.PropTypes.object
    }).isRequired,
    contentState: _react.PropTypes.shape({
        getEntity: _react.PropTypes.func
    }).isRequired
};

exports.default = AtomicBlock;