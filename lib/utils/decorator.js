'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _draftJs = require('draft-js');

var _Decorators = require('../components/Decorators');

var _strategies = require('./strategies');

exports.default = new _draftJs.CompositeDecorator([{
    strategy: _strategies.linkStrategy,
    component: _Decorators.Link
}, {
    strategy: _strategies.handleStrategy,
    component: _Decorators.HandleSpan
}, {
    strategy: _strategies.hashtagStrategy,
    component: _Decorators.HashtagSpan
}]);