'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorContainer = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    padding: 30px 30px;\n    box-sizing: border-box;\n    position: relative;\n    font-family: \'proxima-nova\', \'helvetica\', \'arial\';\n    box-sizing: border-box;\n    font-size: 21px;\n    color: #131517;\n    font-weight: 300;\n    line-height: 1.54;\n    & h1 {\n        font-size: 48px;\n        font-weight: bold;\n        letter-spacing: -.024em;\n        line-height: 1.18;\n        margin-bottom: 20px;\n        color: #131517;\n\n    }\n    & h2 {\n        font-size: 28px;\n        font-weight: normal;\n        letter-spacing: -.008em;\n        line-height: 1.24;\n        margin-bottom: 20px;\n        color: #797C80;\n    }\n    & ul {\n        padding-left: 0;\n        list-style: none;\n    }\n    & ol {\n        padding-left: 0;\n        list-style: none;\n    }\n    & li {\n        font-size: 21px;\n        line-height: 1,78;\n    }\n'], ['\n    padding: 30px 30px;\n    box-sizing: border-box;\n    position: relative;\n    font-family: \'proxima-nova\', \'helvetica\', \'arial\';\n    box-sizing: border-box;\n    font-size: 21px;\n    color: #131517;\n    font-weight: 300;\n    line-height: 1.54;\n    & h1 {\n        font-size: 48px;\n        font-weight: bold;\n        letter-spacing: -.024em;\n        line-height: 1.18;\n        margin-bottom: 20px;\n        color: #131517;\n\n    }\n    & h2 {\n        font-size: 28px;\n        font-weight: normal;\n        letter-spacing: -.008em;\n        line-height: 1.24;\n        margin-bottom: 20px;\n        color: #797C80;\n    }\n    & ul {\n        padding-left: 0;\n        list-style: none;\n    }\n    & ol {\n        padding-left: 0;\n        list-style: none;\n    }\n    & li {\n        font-size: 21px;\n        line-height: 1,78;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    cursor: text;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    max-width: 700px;\n'], ['\n    cursor: text;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    max-width: 700px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var EditorContainer = exports.EditorContainer = _styledComponents2.default.div(_templateObject2);