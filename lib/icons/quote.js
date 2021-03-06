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
                    d: "M12.179,13.969c-1.915,0-3.854-1.507-3.854-4.387c0-2.934,1.495-5.653,4.102-7.462c0.181-0.125,0.422-0.118,0.594,0.018 l2.135,1.677c0.133,0.104,0.204,0.269,0.189,0.438S15.23,4.57,15.081,4.649c-0.863,0.459-1.932,1.523-2.452,2.565 c0.003,0,0.005,0,0.008,0c1.741,0,3.054,1.395,3.054,3.244C15.69,12.394,14.115,13.969,12.179,13.969z M12.699,3.157 C10.55,4.771,9.325,7.094,9.325,9.582c0,2.327,1.479,3.387,2.854,3.387c1.385,0,2.512-1.126,2.512-2.511 c0-1.301-0.863-2.244-2.054-2.244c-0.289,0-0.481,0.036-0.524,0.052c-0.17,0.113-0.371,0.101-0.541-0.014 c-0.168-0.115-0.229-0.333-0.186-0.532c0.293-1.319,1.469-2.734,2.597-3.556L12.699,3.157z M4.202,13.969 c-1.934,0-3.892-1.507-3.892-4.387c0-2.917,1.509-5.637,4.141-7.462c0.182-0.126,0.424-0.118,0.598,0.02l2.096,1.677 c0.131,0.105,0.201,0.27,0.186,0.437C7.314,4.422,7.216,4.57,7.067,4.649c-0.857,0.456-1.905,1.503-2.44,2.565 c1.76,0.002,3.087,1.396,3.087,3.244C7.713,12.361,6.105,13.969,4.202,13.969z M4.721,3.158C2.548,4.787,1.31,7.109,1.31,9.582 c0,2.327,1.499,3.387,2.892,3.387c1.361,0,2.511-1.149,2.511-2.511c0-1.301-0.88-2.244-2.092-2.244 c-0.288,0-0.48,0.036-0.523,0.052C3.924,8.38,3.722,8.367,3.552,8.249C3.383,8.13,3.325,7.908,3.375,7.708 c0.332-1.331,1.5-2.737,2.601-3.545L4.721,3.158z"
                })
            )
        )
    );
};