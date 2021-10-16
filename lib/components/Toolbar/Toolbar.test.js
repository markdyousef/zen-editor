'use strict';

const rewire = require("rewire")
const _react = require("react")

var _react2 = _interopRequireDefault(_react)

const _enzyme = require("enzyme")

const _Toolbar = require("./Toolbar")

const Toolbar = rewire("./Toolbar")
const _interopRequireDefault = Toolbar.__get__("_interopRequireDefault")
var _Toolbar2 = _interopRequireDefault(_Toolbar)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
    var props = {
        editorState: {},
        toggleBlockType: function toggleBlockType() {},
        toggleInlineStyle: function toggleInlineStyle() {},
        focus: function focus() {},
        showToolbar: true
    };
    var shallowComponent = (0, _enzyme.shallow)(_react2.default.createElement(_Toolbar2.default, props));
    expect(shallowComponent).toMatchSnapshot(shallowComponent);
});

// @ponicode
describe("_interopRequireDefault", () => {
    test("0", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _interopRequireDefault(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Toolbar.default", () => {
    test("0", () => {
        let callFunction = () => {
            Toolbar.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
