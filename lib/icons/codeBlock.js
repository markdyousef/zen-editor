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
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                    d: "M0.173,7.569c0-0.11,0.077-0.246,0.172-0.302l4.203-2.508C4.643,4.701,4.72,4.745,4.72,4.855v0.875 c0,0.11-0.078,0.245-0.174,0.299L1.275,7.894C1.179,7.948,1.18,8.037,1.276,8.091l3.27,1.839c0.096,0.054,0.174,0.188,0.174,0.298 v0.876c0,0.11-0.077,0.154-0.172,0.098L0.345,8.705C0.251,8.649,0.173,8.513,0.173,8.403V7.569z"
                })
            ),
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                    d: "M9.496,3.398c0.027-0.107,0.139-0.194,0.249-0.194h0.538c0.11,0,0.178,0.087,0.151,0.194l-2.318,9.205 c-0.027,0.107-0.139,0.194-0.249,0.194H7.329c-0.11,0-0.178-0.087-0.151-0.194L9.496,3.398z"
                })
            ),
            _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", {
                    d: "M11.28,10.228c0-0.11,0.078-0.244,0.174-0.298l3.27-1.839c0.096-0.054,0.096-0.143,0.001-0.197L11.454,6.03 c-0.096-0.054-0.174-0.189-0.174-0.299V4.855c0-0.11,0.077-0.154,0.172-0.098l4.203,2.508c0.094,0.056,0.172,0.192,0.172,0.302 v0.835c0,0.11-0.077,0.246-0.172,0.302l-4.202,2.496c-0.095,0.056-0.172,0.012-0.172-0.098V10.228z"
                })
            )
        )
    );
};