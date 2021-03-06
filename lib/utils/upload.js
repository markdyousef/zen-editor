'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _draftJs = require('draft-js');

var _index = require('./index');

exports.default = function (onChange, file, editorState) {
    return new Promise(function (resolve, reject) {
        if (file.type.indexOf('image/') === 0) {
            var src = URL.createObjectURL(file);
            var data = {
                url: src,
                type: 'image',
                display: 'medium',
                name: file.name
            };
            onChange((0, _index.insertDataBlock)(editorState, data));
            return resolve(file);
        }
        return reject('file has to be an image');
    });
};