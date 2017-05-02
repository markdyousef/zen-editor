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
                d: "M14.2,0.5v1.4c0,0.1-0.1,0.2-0.2,0.2H9.3C9.1,2.1,9,2.2,9,2.3v13.1c0,0.1-0.1,0.2-0.2,0.2H7.2C7,15.6,7,15.5,7,15.4V2.3 c0-0.1-0.1-0.2-0.2-0.2H2C1.9,2.1,1.8,2,1.8,1.9V0.5c0-0.1,0.1-0.2,0.2-0.2h12C14.1,0.3,14.2,0.4,14.2,0.5z"
            })
        )
    );
};