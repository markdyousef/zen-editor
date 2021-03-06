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
                d: "M2.891,10.151C1.705,10.151,0.74,9.185,0.74,8c0-1.186,0.965-2.151,2.151-2.151S5.042,6.814,5.042,8 C5.042,9.185,4.077,10.151,2.891,10.151z M2.891,6.749C2.201,6.749,1.64,7.31,1.64,8c0,0.69,0.561,1.251,1.251,1.251 S4.142,8.689,4.142,8C4.142,7.31,3.581,6.749,2.891,6.749z"
            })
        ),
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                d: "M8,10.151c-1.186,0-2.151-0.965-2.151-2.151c0-1.186,0.965-2.151,2.151-2.151S10.151,6.814,10.151,8 C10.151,9.186,9.186,10.151,8,10.151z M8,6.749C7.31,6.749,6.749,7.31,6.749,8C6.749,8.69,7.31,9.251,8,9.251S9.251,8.69,9.251,8 C9.251,7.31,8.69,6.749,8,6.749z"
            })
        ),
        _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", {
                d: "M13.109,10.151c-1.186,0-2.151-0.965-2.151-2.151c0-1.186,0.965-2.151,2.151-2.151S15.26,6.814,15.26,8 C15.26,9.185,14.295,10.151,13.109,10.151z M13.109,6.749c-0.69,0-1.251,0.561-1.251,1.251c0,0.69,0.561,1.251,1.251,1.251 S14.36,8.689,14.36,8C14.36,7.31,13.799,6.749,13.109,6.749z"
            })
        )
    );
};