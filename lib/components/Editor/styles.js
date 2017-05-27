'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorContainer = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n'], ['\n    width: 100%;\n    height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    font-family: \'Proxima-Nova\', \'helvetica\', \'arial\';\n    box-sizing: border-box;\n    font-size: 21px;\n    color: #131517;\n    font-weight: 300;\n    line-height: 1.54;\n    & h1 {\n        font-size: 48px;\n        font-weight: bold;\n        letter-spacing: -.024em;\n        line-height: 1.18;\n        margin-bottom: 20px;\n        color: #131517;\n\n    }\n    & h2 {\n        font-size: 28px;\n        font-weight: normal;\n        letter-spacing: -.008em;\n        line-height: 1.24;\n        margin-bottom: 20px;\n        color: #797C80;\n    }\n    & ul {\n        padding-left: 24px;\n        ', '\n    }\n    & ol {\n        padding-left: 24px;\n        ', '\n    }\n    & li {\n        font-size: 21px;\n        line-height: 1,78;\n    }::selection {\n        background-color: #B1DFCB;\n    }\n'], ['\n    ', '\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    font-family: \'Proxima-Nova\', \'helvetica\', \'arial\';\n    box-sizing: border-box;\n    font-size: 21px;\n    color: #131517;\n    font-weight: 300;\n    line-height: 1.54;\n    & h1 {\n        font-size: 48px;\n        font-weight: bold;\n        letter-spacing: -.024em;\n        line-height: 1.18;\n        margin-bottom: 20px;\n        color: #131517;\n\n    }\n    & h2 {\n        font-size: 28px;\n        font-weight: normal;\n        letter-spacing: -.008em;\n        line-height: 1.24;\n        margin-bottom: 20px;\n        color: #797C80;\n    }\n    & ul {\n        padding-left: 24px;\n        ', '\n    }\n    & ol {\n        padding-left: 24px;\n        ', '\n    }\n    & li {\n        font-size: 21px;\n        line-height: 1,78;\n    }::selection {\n        background-color: #B1DFCB;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var EditorContainer = exports.EditorContainer = _styledComponents2.default.div(_templateObject2, '' /* padding: 30px 30px; */, '' /* list-style: none; */, '' /* list-style: none; */);