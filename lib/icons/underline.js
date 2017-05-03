"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        "svg",
        _extends({}, props, { x: "0px", y: "0px", viewBox: "0 0 16 16" }),
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                d: "M10.9,0.3v7.6c0,0.9-0.1,1.6-0.4,2.1C10,11,9,11.5,7.6,11.5c-1.2,0-2-0.4-2.5-1.3C4.7,9.6,4.5,8.8,4.5,7.9V0.3H2.8v6.9 c0,1.5,0.2,2.7,0.6,3.5C4.2,12.2,5.6,13,7.7,13s3.5-0.7,4.3-2.2c0.4-0.8,0.6-2,0.6-3.5v-7H10.9z"
            }),
            _react2.default.createElement("rect", { x: "2.8", y: "14.3", width: "9.7", height: "1.4" })
        )
    );
};