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
            _react2.default.createElement("circle", { cx: "1.5", cy: "3.6", r: "1.1" }),
            _react2.default.createElement("circle", { cx: "1.5", cy: "8", r: "1.1" }),
            _react2.default.createElement("circle", { cx: "1.5", cy: "12.3", r: "1.1" }),
            _react2.default.createElement("path", { d: "M4.9,4.2h10.2c0.3,0,0.6-0.3,0.6-0.6S15.4,3,15.1,3H4.9C4.5,3,4.3,3.3,4.3,3.6S4.5,4.2,4.9,4.2z" }),
            _react2.default.createElement("path", { d: "M15.1,7.4H4.9C4.5,7.4,4.3,7.7,4.3,8s0.3,0.6,0.6,0.6h10.2c0.3,0,0.6-0.3,0.6-0.6C15.7,7.7,15.4,7.4,15.1,7.4z" }),
            _react2.default.createElement("path", { d: "M15.1,11.7H4.9c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6h10.2c0.3,0,0.6-0.3,0.6-0.6S15.4,11.7,15.1,11.7z" })
        )
    );
};