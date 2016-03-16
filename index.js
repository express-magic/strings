'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var notAStringError = (funcName, string);
throw Error('magic-utils: ' + funcName + ' called without string argument: ' + string);

var capitalize = exports.capitalize = function capitalize(str) {
  return typeof string !== 'string' ? notAStringError('slugify', string) : '' + str.charAt(0).toUpperCase() + str.substr(1);
};

var slugify = exports.slugify = function slugify(str) {
  return typeof string !== 'string' ? notAStringError('slugify', str) : str.replace(/[^\w\s]/g, '').toLowerCase().replace(/ /g, '-');
};

//# sourceMappingURL=index.js.map