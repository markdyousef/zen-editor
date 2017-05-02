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
                d: "M1.688,0.428h7.97c2.883,0,4.359,1.839,4.359,3.859c0,1.908-1.181,3.179-2.611,3.474c1.612,0.25,2.906,1.817,2.906,3.724 c0,2.27-1.521,4.087-4.404,4.087H1.688V0.428z M8.953,6.513c1.09,0,1.771-0.704,1.771-1.68c0-0.931-0.681-1.657-1.771-1.657H4.912 v3.338H8.953z M9.067,12.825c1.226,0,1.952-0.704,1.952-1.793c0-0.954-0.681-1.771-1.952-1.771H4.912v3.564H9.067z"
            })
        )
    );
};