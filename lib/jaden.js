(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jaden", [], factory);
	else if(typeof exports === 'object')
		exports["jaden"] = factory();
	else
		root["jaden"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = exports.simplify = undefined;

var _simplify = __webpack_require__(1);

var _simplify2 = _interopRequireDefault(_simplify);

var _normalize = __webpack_require__(2);

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.simplify = _simplify2.default;
exports.normalize = _normalize2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (normalizedObject) {
  return normalizedObject;
};

;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getConfigFor(simplifiedObject, configs) {
  var configIndex = configs.find(function (config) {
    return config.type === simplifiedObject._type;
  });

  return configIndex === undefined ? undefined : configs[configIndex];
}

function stripAttributes(simplifiedObject) {
  var strippedObject = JSON.parse(JSON.stringify(simplifiedObject));

  delete strippedObject['_type'];
  delete strippedObject['id'];
  return strippedObject;
}

var normalize = function normalize(simplifiedObject, configs) {
  var normalizedObject = {};
  var typeConfig = getConfigFor(simplifiedObject, configs);

  typeConfig.relationships.forEach(function (relationship) {
    if (simplifiedObject[relationship.name] === undefined) {
      return;
    }

    normalizedObject.data.relationships[relationship.name] = {
      data: {
        type: relationship.type,
        id: simplifiedObject[relationship.name]
      }
    };

    normalizedObject.attributes = stripAttributes(simplifiedObject);

    normalizedObject.included.add({
      type: relationship.type,
      id: simplifiedObject[relationship.name],
      attributes: stripAttributes(simplifiedObject)
    });
  });

  return normalizedObject;
};

exports.default = normalize;

/***/ })
/******/ ]);
});
//# sourceMappingURL=jaden.js.map