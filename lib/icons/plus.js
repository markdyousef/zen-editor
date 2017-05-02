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
        _extends({}, props, { width: "14", height: "14", viewBox: "0 0 16 16" }),
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                d: "M15.77,8c0,0.28-0.23,0.5-0.5,0.5H8.5v6.81c0,0.28-0.22,0.5-0.5,0.5s-0.5-0.22-0.5-0.5V8.5H0.73c-0.27,0-0.5-0.22-0.5-0.5 s0.23-0.5,0.5-0.5H7.5V0.78c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V7.5h6.77C15.54,7.5,15.77,7.72,15.77,8z"
            })
        )
    );
};