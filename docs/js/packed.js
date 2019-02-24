var main =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: emojify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojify", function() { return emojify; });
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);


var translate = __webpack_require__(/*! moji-translate */ "./node_modules/moji-translate/emoji-translate.js");

function emojify() {
  var textArea = document.querySelector("#text_input");
  var inputText = textArea.value;
  var words = inputText.split(" ");
  var lastTriple = 1000;

  for (var i in words) {
    var word = words[i];
    var emoji = translate.getEmojiForWord(cleanWord(word));

    if (emoji) {
      if (Math.random() > 0.95 && lastTriple > 3) {
        emoji = emoji + emoji + emoji;
        lastTriple = 0;
      } else {
        lastTriple++;
      }

      words[i] = word + " " + emoji + " ";
    }
  }

  var textOutput = document.querySelector("#text_output");
  textOutput.value = words.join(" ");
  textOutput.hidden = false;
  M.textareaAutoResize(textOutput);
}

function cleanWord(word) {
  return word.trim().replace("?", "").replace("!", "").replace(".", "");
}

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/shim */ "./node_modules/core-js/shim.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/fn/regexp/escape */ "./node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "./node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $re = __webpack_require__(/*! ./_replacer */ "./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var scale = __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ./modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ./modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ./modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ./modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ./modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ./modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ./modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ./modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ./modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ./modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ./modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ./modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ./modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ./modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ./modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ./modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ./modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ./modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ./modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ./modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ./modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ./modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ./modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ./modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ./modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ./modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ./modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ./modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ./modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ./modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ./modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ./modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ./modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ./modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ./modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ./modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ./modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ./modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ./modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ./modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ./modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ./modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ./modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ./modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ./modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ./modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ./modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ./modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ./modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ./modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ./modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ./modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ./modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ./modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ./modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ./modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ./modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ./modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ./modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ./modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ./modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ./modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ./modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ./modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ./modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ./modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ./modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ./modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ./modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ./modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ./modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ./modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ./modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ./modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ./modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ./modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ./modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ./modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ./modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ./modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ./modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ./modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ./modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ./modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ./modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ./modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ./modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ./modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ./modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ./modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ./modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ./modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ./modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ./modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ./modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ./modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ./modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ./modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ./modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ./modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ./modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ./modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ./modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ./modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ./modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__(/*! ./modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! ./modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__(/*! ./modules/es7.array.flatten */ "./node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__(/*! ./modules/es7.string.at */ "./node_modules/core-js/modules/es7.string.at.js");
__webpack_require__(/*! ./modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__(/*! ./modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__(/*! ./modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__(/*! ./modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__(/*! ./modules/es7.string.match-all */ "./node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ./modules/es7.symbol.observable */ "./node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! ./modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
__webpack_require__(/*! ./modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__(/*! ./modules/es7.object.define-getter */ "./node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__(/*! ./modules/es7.object.define-setter */ "./node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__(/*! ./modules/es7.map.to-json */ "./node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__(/*! ./modules/es7.set.to-json */ "./node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__(/*! ./modules/es7.map.of */ "./node_modules/core-js/modules/es7.map.of.js");
__webpack_require__(/*! ./modules/es7.set.of */ "./node_modules/core-js/modules/es7.set.of.js");
__webpack_require__(/*! ./modules/es7.weak-map.of */ "./node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__(/*! ./modules/es7.weak-set.of */ "./node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__(/*! ./modules/es7.map.from */ "./node_modules/core-js/modules/es7.map.from.js");
__webpack_require__(/*! ./modules/es7.set.from */ "./node_modules/core-js/modules/es7.set.from.js");
__webpack_require__(/*! ./modules/es7.weak-map.from */ "./node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__(/*! ./modules/es7.weak-set.from */ "./node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__(/*! ./modules/es7.global */ "./node_modules/core-js/modules/es7.global.js");
__webpack_require__(/*! ./modules/es7.system.global */ "./node_modules/core-js/modules/es7.system.global.js");
__webpack_require__(/*! ./modules/es7.error.is-error */ "./node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__(/*! ./modules/es7.math.clamp */ "./node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "./node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__(/*! ./modules/es7.math.degrees */ "./node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__(/*! ./modules/es7.math.fscale */ "./node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__(/*! ./modules/es7.math.iaddh */ "./node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__(/*! ./modules/es7.math.isubh */ "./node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__(/*! ./modules/es7.math.imulh */ "./node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "./node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__(/*! ./modules/es7.math.radians */ "./node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__(/*! ./modules/es7.math.scale */ "./node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__(/*! ./modules/es7.math.umulh */ "./node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__(/*! ./modules/es7.math.signbit */ "./node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__(/*! ./modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ./modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__(/*! ./modules/es7.asap */ "./node_modules/core-js/modules/es7.asap.js");
__webpack_require__(/*! ./modules/es7.observable */ "./node_modules/core-js/modules/es7.observable.js");
__webpack_require__(/*! ./modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ./modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ./modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ./modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/emojilib/emojis.json":
/*!*******************************************!*\
  !*** ./node_modules/emojilib/emojis.json ***!
  \*******************************************/
/*! exports provided: 100, 1234, grinning, grimacing, grin, joy, rofl, partying, smiley, smile, sweat_smile, laughing, innocent, wink, blush, slightly_smiling_face, upside_down_face, relaxed, yum, relieved, heart_eyes, smiling_face_with_three_hearts, kissing_heart, kissing, kissing_smiling_eyes, kissing_closed_eyes, stuck_out_tongue_winking_eye, zany, raised_eyebrow, monocle, stuck_out_tongue_closed_eyes, stuck_out_tongue, money_mouth_face, nerd_face, sunglasses, star_struck, clown_face, cowboy_hat_face, hugs, smirk, no_mouth, neutral_face, expressionless, unamused, roll_eyes, thinking, lying_face, hand_over_mouth, shushing, symbols_over_mouth, exploding_head, flushed, disappointed, worried, angry, rage, pensive, confused, slightly_frowning_face, frowning_face, persevere, confounded, tired_face, weary, pleading, triumph, open_mouth, scream, fearful, cold_sweat, hushed, frowning, anguished, cry, disappointed_relieved, drooling_face, sleepy, sweat, hot, cold, sob, dizzy_face, astonished, zipper_mouth_face, nauseated_face, sneezing_face, vomiting, mask, face_with_thermometer, face_with_head_bandage, woozy, sleeping, zzz, poop, smiling_imp, imp, japanese_ogre, japanese_goblin, skull, ghost, alien, robot, smiley_cat, smile_cat, joy_cat, heart_eyes_cat, smirk_cat, kissing_cat, scream_cat, crying_cat_face, pouting_cat, palms_up, raised_hands, clap, wave, call_me_hand, +1, -1, facepunch, fist, fist_left, fist_right, v, ok_hand, raised_hand, raised_back_of_hand, open_hands, muscle, pray, foot, leg, handshake, point_up, point_up_2, point_down, point_left, point_right, fu, raised_hand_with_fingers_splayed, love_you, metal, crossed_fingers, vulcan_salute, writing_hand, selfie, nail_care, lips, tooth, tongue, ear, nose, eye, eyes, brain, bust_in_silhouette, busts_in_silhouette, speaking_head, baby, child, boy, girl, adult, man, woman, blonde_woman, blonde_man, bearded_person, older_adult, older_man, older_woman, man_with_gua_pi_mao, woman_with_headscarf, woman_with_turban, man_with_turban, policewoman, policeman, construction_worker_woman, construction_worker_man, guardswoman, guardsman, female_detective, male_detective, woman_health_worker, man_health_worker, woman_farmer, man_farmer, woman_cook, man_cook, woman_student, man_student, woman_singer, man_singer, woman_teacher, man_teacher, woman_factory_worker, man_factory_worker, woman_technologist, man_technologist, woman_office_worker, man_office_worker, woman_mechanic, man_mechanic, woman_scientist, man_scientist, woman_artist, man_artist, woman_firefighter, man_firefighter, woman_pilot, man_pilot, woman_astronaut, man_astronaut, woman_judge, man_judge, woman_superhero, man_superhero, woman_supervillain, man_supervillain, mrs_claus, santa, sorceress, wizard, woman_elf, man_elf, woman_vampire, man_vampire, woman_zombie, man_zombie, woman_genie, man_genie, mermaid, merman, woman_fairy, man_fairy, angel, pregnant_woman, breastfeeding, princess, prince, bride_with_veil, man_in_tuxedo, running_woman, running_man, walking_woman, walking_man, dancer, man_dancing, dancing_women, dancing_men, couple, two_men_holding_hands, two_women_holding_hands, bowing_woman, bowing_man, man_facepalming, woman_facepalming, woman_shrugging, man_shrugging, tipping_hand_woman, tipping_hand_man, no_good_woman, no_good_man, ok_woman, ok_man, raising_hand_woman, raising_hand_man, pouting_woman, pouting_man, frowning_woman, frowning_man, haircut_woman, haircut_man, massage_woman, massage_man, woman_in_steamy_room, man_in_steamy_room, couple_with_heart_woman_man, couple_with_heart_woman_woman, couple_with_heart_man_man, couplekiss_man_woman, couplekiss_woman_woman, couplekiss_man_man, family_man_woman_boy, family_man_woman_girl, family_man_woman_girl_boy, family_man_woman_boy_boy, family_man_woman_girl_girl, family_woman_woman_boy, family_woman_woman_girl, family_woman_woman_girl_boy, family_woman_woman_boy_boy, family_woman_woman_girl_girl, family_man_man_boy, family_man_man_girl, family_man_man_girl_boy, family_man_man_boy_boy, family_man_man_girl_girl, family_woman_boy, family_woman_girl, family_woman_girl_boy, family_woman_boy_boy, family_woman_girl_girl, family_man_boy, family_man_girl, family_man_girl_boy, family_man_boy_boy, family_man_girl_girl, yarn, thread, coat, labcoat, womans_clothes, tshirt, jeans, necktie, dress, bikini, kimono, lipstick, kiss, footprints, flat_shoe, high_heel, sandal, boot, mans_shoe, athletic_shoe, hiking_boot, socks, gloves, scarf, womans_hat, tophat, billed_hat, rescue_worker_helmet, mortar_board, crown, school_satchel, luggage, pouch, purse, handbag, briefcase, eyeglasses, dark_sunglasses, goggles, ring, closed_umbrella, dog, cat, mouse, hamster, rabbit, fox_face, bear, panda_face, koala, tiger, lion, cow, pig, pig_nose, frog, squid, octopus, shrimp, monkey_face, gorilla, see_no_evil, hear_no_evil, speak_no_evil, monkey, chicken, penguin, bird, baby_chick, hatching_chick, hatched_chick, duck, eagle, owl, bat, wolf, boar, horse, unicorn, honeybee, bug, butterfly, snail, beetle, ant, grasshopper, spider, scorpion, crab, snake, lizard, t-rex, sauropod, turtle, tropical_fish, fish, blowfish, dolphin, shark, whale, whale2, crocodile, leopard, zebra, tiger2, water_buffalo, ox, cow2, deer, dromedary_camel, camel, giraffe, elephant, rhinoceros, goat, ram, sheep, racehorse, pig2, rat, mouse2, rooster, turkey, dove, dog2, poodle, cat2, rabbit2, chipmunk, hedgehog, raccoon, llama, hippopotamus, kangaroo, badger, swan, peacock, parrot, lobster, mosquito, paw_prints, dragon, dragon_face, cactus, christmas_tree, evergreen_tree, deciduous_tree, palm_tree, seedling, herb, shamrock, four_leaf_clover, bamboo, tanabata_tree, leaves, fallen_leaf, maple_leaf, ear_of_rice, hibiscus, sunflower, rose, wilted_flower, tulip, blossom, cherry_blossom, bouquet, mushroom, chestnut, jack_o_lantern, shell, spider_web, earth_americas, earth_africa, earth_asia, full_moon, waning_gibbous_moon, last_quarter_moon, waning_crescent_moon, new_moon, waxing_crescent_moon, first_quarter_moon, waxing_gibbous_moon, new_moon_with_face, full_moon_with_face, first_quarter_moon_with_face, last_quarter_moon_with_face, sun_with_face, crescent_moon, star, star2, dizzy, sparkles, comet, sunny, sun_behind_small_cloud, partly_sunny, sun_behind_large_cloud, sun_behind_rain_cloud, cloud, cloud_with_rain, cloud_with_lightning_and_rain, cloud_with_lightning, zap, fire, boom, snowflake, cloud_with_snow, snowman, snowman_with_snow, wind_face, dash, tornado, fog, open_umbrella, umbrella, droplet, sweat_drops, ocean, green_apple, apple, pear, tangerine, lemon, banana, watermelon, grapes, strawberry, melon, cherries, peach, pineapple, coconut, kiwi_fruit, mango, avocado, broccoli, tomato, eggplant, cucumber, carrot, hot_pepper, potato, corn, leafy_greens, sweet_potato, peanuts, honey_pot, croissant, bread, baguette_bread, bagel, pretzel, cheese, egg, bacon, steak, pancakes, poultry_leg, meat_on_bone, bone, fried_shrimp, fried_egg, hamburger, fries, stuffed_flatbread, hotdog, pizza, sandwich, canned_food, spaghetti, taco, burrito, green_salad, shallow_pan_of_food, ramen, stew, fish_cake, fortune_cookie, sushi, bento, curry, rice_ball, rice, rice_cracker, oden, dango, shaved_ice, ice_cream, icecream, pie, cake, cupcake, moon_cake, birthday, custard, candy, lollipop, chocolate_bar, popcorn, dumpling, doughnut, cookie, milk_glass, beer, beers, clinking_glasses, wine_glass, tumbler_glass, cocktail, tropical_drink, champagne, sake, tea, cup_with_straw, coffee, baby_bottle, salt, spoon, fork_and_knife, plate_with_cutlery, bowl_with_spoon, takeout_box, chopsticks, soccer, basketball, football, baseball, softball, tennis, volleyball, rugby_football, flying_disc, 8ball, golf, golfing_woman, golfing_man, ping_pong, badminton, goal_net, ice_hockey, field_hockey, lacrosse, cricket, ski, skier, snowboarder, person_fencing, women_wrestling, men_wrestling, woman_cartwheeling, man_cartwheeling, woman_playing_handball, man_playing_handball, ice_skate, curling_stone, skateboard, sled, bow_and_arrow, fishing_pole_and_fish, boxing_glove, martial_arts_uniform, rowing_woman, rowing_man, climbing_woman, climbing_man, swimming_woman, swimming_man, woman_playing_water_polo, man_playing_water_polo, woman_in_lotus_position, man_in_lotus_position, surfing_woman, surfing_man, bath, basketball_woman, basketball_man, weight_lifting_woman, weight_lifting_man, biking_woman, biking_man, mountain_biking_woman, mountain_biking_man, horse_racing, business_suit_levitating, trophy, running_shirt_with_sash, medal_sports, medal_military, 1st_place_medal, 2nd_place_medal, 3rd_place_medal, reminder_ribbon, rosette, ticket, tickets, performing_arts, art, circus_tent, woman_juggling, man_juggling, microphone, headphones, musical_score, musical_keyboard, drum, saxophone, trumpet, guitar, violin, clapper, video_game, space_invader, dart, game_die, chess_pawn, slot_machine, jigsaw, bowling, red_car, taxi, blue_car, bus, trolleybus, racing_car, police_car, ambulance, fire_engine, minibus, truck, articulated_lorry, tractor, kick_scooter, motorcycle, bike, motor_scooter, rotating_light, oncoming_police_car, oncoming_bus, oncoming_automobile, oncoming_taxi, aerial_tramway, mountain_cableway, suspension_railway, railway_car, train, monorail, bullettrain_side, bullettrain_front, light_rail, mountain_railway, steam_locomotive, train2, metro, tram, station, flying_saucer, helicopter, small_airplane, airplane, flight_departure, flight_arrival, sailboat, motor_boat, speedboat, ferry, passenger_ship, rocket, artificial_satellite, seat, canoe, anchor, construction, fuelpump, busstop, vertical_traffic_light, traffic_light, checkered_flag, ship, ferris_wheel, roller_coaster, carousel_horse, building_construction, foggy, tokyo_tower, factory, fountain, rice_scene, mountain, mountain_snow, mount_fuji, volcano, japan, camping, tent, national_park, motorway, railway_track, sunrise, sunrise_over_mountains, desert, beach_umbrella, desert_island, city_sunrise, city_sunset, cityscape, night_with_stars, bridge_at_night, milky_way, stars, sparkler, fireworks, rainbow, houses, european_castle, japanese_castle, stadium, statue_of_liberty, house, house_with_garden, derelict_house, office, department_store, post_office, european_post_office, hospital, bank, hotel, convenience_store, school, love_hotel, wedding, classical_building, church, mosque, synagogue, kaaba, shinto_shrine, watch, iphone, calling, computer, keyboard, desktop_computer, printer, computer_mouse, trackball, joystick, clamp, minidisc, floppy_disk, cd, dvd, vhs, camera, camera_flash, video_camera, movie_camera, film_projector, film_strip, telephone_receiver, phone, pager, fax, tv, radio, studio_microphone, level_slider, control_knobs, compass, stopwatch, timer_clock, alarm_clock, mantelpiece_clock, hourglass_flowing_sand, hourglass, satellite, battery, electric_plug, bulb, flashlight, candle, fire_extinguisher, wastebasket, oil_drum, money_with_wings, dollar, yen, euro, pound, moneybag, credit_card, gem, balance_scale, toolbox, wrench, hammer, hammer_and_pick, hammer_and_wrench, pick, nut_and_bolt, gear, brick, chains, magnet, gun, bomb, firecracker, hocho, dagger, crossed_swords, shield, smoking, skull_and_crossbones, coffin, funeral_urn, amphora, crystal_ball, prayer_beads, nazar_amulet, barber, alembic, telescope, microscope, hole, pill, syringe, dna, microbe, petri_dish, test_tube, thermometer, broom, basket, toilet_paper, label, bookmark, toilet, shower, bathtub, soap, sponge, lotion_bottle, key, old_key, couch_and_lamp, sleeping_bed, bed, door, bellhop_bell, teddy_bear, framed_picture, world_map, parasol_on_ground, moyai, shopping, shopping_cart, balloon, flags, ribbon, gift, confetti_ball, tada, dolls, wind_chime, crossed_flags, izakaya_lantern, red_envelope, email, envelope_with_arrow, incoming_envelope, e-mail, love_letter, postbox, mailbox_closed, mailbox, mailbox_with_mail, mailbox_with_no_mail, package, postal_horn, inbox_tray, outbox_tray, scroll, page_with_curl, bookmark_tabs, receipt, bar_chart, chart_with_upwards_trend, chart_with_downwards_trend, page_facing_up, date, calendar, spiral_calendar, card_index, card_file_box, ballot_box, file_cabinet, clipboard, spiral_notepad, file_folder, open_file_folder, card_index_dividers, newspaper_roll, newspaper, notebook, closed_book, green_book, blue_book, orange_book, notebook_with_decorative_cover, ledger, books, open_book, safety_pin, link, paperclip, paperclips, scissors, triangular_ruler, straight_ruler, abacus, pushpin, round_pushpin, triangular_flag_on_post, white_flag, black_flag, rainbow_flag, closed_lock_with_key, lock, unlock, lock_with_ink_pen, pen, fountain_pen, black_nib, memo, pencil2, crayon, paintbrush, mag, mag_right, heart, orange_heart, yellow_heart, green_heart, blue_heart, purple_heart, black_heart, broken_heart, heavy_heart_exclamation, two_hearts, revolving_hearts, heartbeat, heartpulse, sparkling_heart, cupid, gift_heart, heart_decoration, peace_symbol, latin_cross, star_and_crescent, om, wheel_of_dharma, star_of_david, six_pointed_star, menorah, yin_yang, orthodox_cross, place_of_worship, ophiuchus, aries, taurus, gemini, cancer, leo, virgo, libra, scorpius, sagittarius, capricorn, aquarius, pisces, id, atom_symbol, u7a7a, u5272, radioactive, biohazard, mobile_phone_off, vibration_mode, u6709, u7121, u7533, u55b6, u6708, eight_pointed_black_star, vs, accept, white_flower, ideograph_advantage, secret, congratulations, u5408, u6e80, u7981, a, b, ab, cl, o2, sos, no_entry, name_badge, no_entry_sign, x, o, stop_sign, anger, hotsprings, no_pedestrians, do_not_litter, no_bicycles, non-potable_water, underage, no_mobile_phones, exclamation, grey_exclamation, question, grey_question, bangbang, interrobang, low_brightness, high_brightness, trident, fleur_de_lis, part_alternation_mark, warning, children_crossing, beginner, recycle, u6307, chart, sparkle, eight_spoked_asterisk, negative_squared_cross_mark, white_check_mark, diamond_shape_with_a_dot_inside, cyclone, loop, globe_with_meridians, m, atm, sa, passport_control, customs, baggage_claim, left_luggage, wheelchair, no_smoking, wc, parking, potable_water, mens, womens, baby_symbol, restroom, put_litter_in_its_place, cinema, signal_strength, koko, ng, ok, up, cool, new, free, zero, one, two, three, four, five, six, seven, eight, nine, keycap_ten, asterisk, eject_button, arrow_forward, pause_button, next_track_button, stop_button, record_button, play_or_pause_button, previous_track_button, fast_forward, rewind, twisted_rightwards_arrows, repeat, repeat_one, arrow_backward, arrow_up_small, arrow_down_small, arrow_double_up, arrow_double_down, arrow_right, arrow_left, arrow_up, arrow_down, arrow_upper_right, arrow_lower_right, arrow_lower_left, arrow_upper_left, arrow_up_down, left_right_arrow, arrows_counterclockwise, arrow_right_hook, leftwards_arrow_with_hook, arrow_heading_up, arrow_heading_down, hash, information_source, abc, abcd, capital_abcd, symbols, musical_note, notes, wavy_dash, curly_loop, heavy_check_mark, arrows_clockwise, heavy_plus_sign, heavy_minus_sign, heavy_division_sign, heavy_multiplication_x, infinity, heavy_dollar_sign, currency_exchange, copyright, registered, tm, end, back, on, top, soon, ballot_box_with_check, radio_button, white_circle, black_circle, red_circle, large_blue_circle, small_orange_diamond, small_blue_diamond, large_orange_diamond, large_blue_diamond, small_red_triangle, black_small_square, white_small_square, black_large_square, white_large_square, small_red_triangle_down, black_medium_square, white_medium_square, black_medium_small_square, white_medium_small_square, black_square_button, white_square_button, speaker, sound, loud_sound, mute, mega, loudspeaker, bell, no_bell, black_joker, mahjong, spades, clubs, hearts, diamonds, flower_playing_cards, thought_balloon, right_anger_bubble, speech_balloon, left_speech_bubble, clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8, clock9, clock10, clock11, clock12, clock130, clock230, clock330, clock430, clock530, clock630, clock730, clock830, clock930, clock1030, clock1130, clock1230, afghanistan, aland_islands, albania, algeria, american_samoa, andorra, angola, anguilla, antarctica, antigua_barbuda, argentina, armenia, aruba, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, caribbean_netherlands, bosnia_herzegovina, botswana, brazil, british_indian_ocean_territory, british_virgin_islands, brunei, bulgaria, burkina_faso, burundi, cape_verde, cambodia, cameroon, canada, canary_islands, cayman_islands, central_african_republic, chad, chile, cn, christmas_island, cocos_islands, colombia, comoros, congo_brazzaville, congo_kinshasa, cook_islands, costa_rica, croatia, cuba, curacao, cyprus, czech_republic, denmark, djibouti, dominica, dominican_republic, ecuador, egypt, el_salvador, equatorial_guinea, eritrea, estonia, ethiopia, eu, falkland_islands, faroe_islands, fiji, finland, fr, french_guiana, french_polynesia, french_southern_territories, gabon, gambia, georgia, de, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guam, guatemala, guernsey, guinea, guinea_bissau, guyana, haiti, honduras, hong_kong, hungary, iceland, india, indonesia, iran, iraq, ireland, isle_of_man, israel, it, cote_divoire, jamaica, jp, jersey, jordan, kazakhstan, kenya, kiribati, kosovo, kuwait, kyrgyzstan, laos, latvia, lebanon, lesotho, liberia, libya, liechtenstein, lithuania, luxembourg, macau, macedonia, madagascar, malawi, malaysia, maldives, mali, malta, marshall_islands, martinique, mauritania, mauritius, mayotte, mexico, micronesia, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar, namibia, nauru, nepal, netherlands, new_caledonia, new_zealand, nicaragua, niger, nigeria, niue, norfolk_island, northern_mariana_islands, north_korea, norway, oman, pakistan, palau, palestinian_territories, panama, papua_new_guinea, paraguay, peru, philippines, pitcairn_islands, poland, portugal, puerto_rico, qatar, reunion, romania, ru, rwanda, st_barthelemy, st_helena, st_kitts_nevis, st_lucia, st_pierre_miquelon, st_vincent_grenadines, samoa, san_marino, sao_tome_principe, saudi_arabia, senegal, serbia, seychelles, sierra_leone, singapore, sint_maarten, slovakia, slovenia, solomon_islands, somalia, south_africa, south_georgia_south_sandwich_islands, kr, south_sudan, es, sri_lanka, sudan, suriname, swaziland, sweden, switzerland, syria, taiwan, tajikistan, tanzania, thailand, timor_leste, togo, tokelau, tonga, trinidad_tobago, tunisia, tr, turkmenistan, turks_caicos_islands, tuvalu, uganda, ukraine, united_arab_emirates, uk, england, scotland, wales, us, us_virgin_islands, uruguay, uzbekistan, vanuatu, vatican_city, venezuela, vietnam, wallis_futuna, western_sahara, yemen, zambia, zimbabwe, united_nations, pirate_flag, default */
/***/ (function(module) {

module.exports = {"100":{"keywords":["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],"char":"💯","fitzpatrick_scale":false,"category":"symbols"},"1234":{"keywords":["numbers","blue-square"],"char":"🔢","fitzpatrick_scale":false,"category":"symbols"},"grinning":{"keywords":["face","smile","happy","joy",":D","grin"],"char":"😀","fitzpatrick_scale":false,"category":"people"},"grimacing":{"keywords":["face","grimace","teeth"],"char":"😬","fitzpatrick_scale":false,"category":"people"},"grin":{"keywords":["face","happy","smile","joy","kawaii"],"char":"😁","fitzpatrick_scale":false,"category":"people"},"joy":{"keywords":["face","cry","tears","weep","happy","happytears","haha"],"char":"😂","fitzpatrick_scale":false,"category":"people"},"rofl":{"keywords":["face","rolling","floor","laughing","lol","haha"],"char":"🤣","fitzpatrick_scale":false,"category":"people"},"partying":{"keywords":["face","celebration","woohoo"],"char":"🥳","fitzpatrick_scale":false,"category":"people"},"smiley":{"keywords":["face","happy","joy","haha",":D",":)","smile","funny"],"char":"😃","fitzpatrick_scale":false,"category":"people"},"smile":{"keywords":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"char":"😄","fitzpatrick_scale":false,"category":"people"},"sweat_smile":{"keywords":["face","hot","happy","laugh","sweat","smile","relief"],"char":"😅","fitzpatrick_scale":false,"category":"people"},"laughing":{"keywords":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"char":"😆","fitzpatrick_scale":false,"category":"people"},"innocent":{"keywords":["face","angel","heaven","halo"],"char":"😇","fitzpatrick_scale":false,"category":"people"},"wink":{"keywords":["face","happy","mischievous","secret",";)","smile","eye"],"char":"😉","fitzpatrick_scale":false,"category":"people"},"blush":{"keywords":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"char":"😊","fitzpatrick_scale":false,"category":"people"},"slightly_smiling_face":{"keywords":["face","smile"],"char":"🙂","fitzpatrick_scale":false,"category":"people"},"upside_down_face":{"keywords":["face","flipped","silly","smile"],"char":"🙃","fitzpatrick_scale":false,"category":"people"},"relaxed":{"keywords":["face","blush","massage","happiness"],"char":"☺️","fitzpatrick_scale":false,"category":"people"},"yum":{"keywords":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"char":"😋","fitzpatrick_scale":false,"category":"people"},"relieved":{"keywords":["face","relaxed","phew","massage","happiness"],"char":"😌","fitzpatrick_scale":false,"category":"people"},"heart_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","crush","heart"],"char":"😍","fitzpatrick_scale":false,"category":"people"},"smiling_face_with_three_hearts":{"keywords":["face","love","like","affection","valentines","infatuation","crush","hearts","adore"],"char":"🥰","fitzpatrick_scale":false,"category":"people"},"kissing_heart":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😘","fitzpatrick_scale":false,"category":"people"},"kissing":{"keywords":["love","like","face","3","valentines","infatuation","kiss"],"char":"😗","fitzpatrick_scale":false,"category":"people"},"kissing_smiling_eyes":{"keywords":["face","affection","valentines","infatuation","kiss"],"char":"😙","fitzpatrick_scale":false,"category":"people"},"kissing_closed_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😚","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_winking_eye":{"keywords":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"char":"😜","fitzpatrick_scale":false,"category":"people"},"zany":{"keywords":["face","goofy","crazy"],"char":"🤪","fitzpatrick_scale":false,"category":"people"},"raised_eyebrow":{"keywords":["face","distrust","scepticism","disapproval","disbelief","surprise"],"char":"🤨","fitzpatrick_scale":false,"category":"people"},"monocle":{"keywords":["face","stuffy","wealthy"],"char":"🧐","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_closed_eyes":{"keywords":["face","prank","playful","mischievous","smile","tongue"],"char":"😝","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue":{"keywords":["face","prank","childish","playful","mischievous","smile","tongue"],"char":"😛","fitzpatrick_scale":false,"category":"people"},"money_mouth_face":{"keywords":["face","rich","dollar","money"],"char":"🤑","fitzpatrick_scale":false,"category":"people"},"nerd_face":{"keywords":["face","nerdy","geek","dork"],"char":"🤓","fitzpatrick_scale":false,"category":"people"},"sunglasses":{"keywords":["face","cool","smile","summer","beach","sunglass"],"char":"😎","fitzpatrick_scale":false,"category":"people"},"star_struck":{"keywords":["face","smile","starry","eyes","grinning"],"char":"🤩","fitzpatrick_scale":false,"category":"people"},"clown_face":{"keywords":["face"],"char":"🤡","fitzpatrick_scale":false,"category":"people"},"cowboy_hat_face":{"keywords":["face","cowgirl","hat"],"char":"🤠","fitzpatrick_scale":false,"category":"people"},"hugs":{"keywords":["face","smile","hug"],"char":"🤗","fitzpatrick_scale":false,"category":"people"},"smirk":{"keywords":["face","smile","mean","prank","smug","sarcasm"],"char":"😏","fitzpatrick_scale":false,"category":"people"},"no_mouth":{"keywords":["face","hellokitty"],"char":"😶","fitzpatrick_scale":false,"category":"people"},"neutral_face":{"keywords":["indifference","meh",":|","neutral"],"char":"😐","fitzpatrick_scale":false,"category":"people"},"expressionless":{"keywords":["face","indifferent","-_-","meh","deadpan"],"char":"😑","fitzpatrick_scale":false,"category":"people"},"unamused":{"keywords":["indifference","bored","straight face","serious","sarcasm","unimpressed","skeptical","dubious","side_eye"],"char":"😒","fitzpatrick_scale":false,"category":"people"},"roll_eyes":{"keywords":["face","eyeroll","frustrated"],"char":"🙄","fitzpatrick_scale":false,"category":"people"},"thinking":{"keywords":["face","hmmm","think","consider"],"char":"🤔","fitzpatrick_scale":false,"category":"people"},"lying_face":{"keywords":["face","lie","pinocchio"],"char":"🤥","fitzpatrick_scale":false,"category":"people"},"hand_over_mouth":{"keywords":["face","whoops","shock","surprise"],"char":"🤭","fitzpatrick_scale":false,"category":"people"},"shushing":{"keywords":["face","quiet","shhh"],"char":"🤫","fitzpatrick_scale":false,"category":"people"},"symbols_over_mouth":{"keywords":["face","swearing","cursing","cussing","profanity","expletive"],"char":"🤬","fitzpatrick_scale":false,"category":"people"},"exploding_head":{"keywords":["face","shocked","mind","blown"],"char":"🤯","fitzpatrick_scale":false,"category":"people"},"flushed":{"keywords":["face","blush","shy","flattered"],"char":"😳","fitzpatrick_scale":false,"category":"people"},"disappointed":{"keywords":["face","sad","upset","depressed",":("],"char":"😞","fitzpatrick_scale":false,"category":"people"},"worried":{"keywords":["face","concern","nervous",":("],"char":"😟","fitzpatrick_scale":false,"category":"people"},"angry":{"keywords":["mad","face","annoyed","frustrated"],"char":"😠","fitzpatrick_scale":false,"category":"people"},"rage":{"keywords":["angry","mad","hate","despise"],"char":"😡","fitzpatrick_scale":false,"category":"people"},"pensive":{"keywords":["face","sad","depressed","upset"],"char":"😔","fitzpatrick_scale":false,"category":"people"},"confused":{"keywords":["face","indifference","huh","weird","hmmm",":/"],"char":"😕","fitzpatrick_scale":false,"category":"people"},"slightly_frowning_face":{"keywords":["face","frowning","disappointed","sad","upset"],"char":"🙁","fitzpatrick_scale":false,"category":"people"},"frowning_face":{"keywords":["face","sad","upset","frown"],"char":"☹","fitzpatrick_scale":false,"category":"people"},"persevere":{"keywords":["face","sick","no","upset","oops"],"char":"😣","fitzpatrick_scale":false,"category":"people"},"confounded":{"keywords":["face","confused","sick","unwell","oops",":S"],"char":"😖","fitzpatrick_scale":false,"category":"people"},"tired_face":{"keywords":["sick","whine","upset","frustrated"],"char":"😫","fitzpatrick_scale":false,"category":"people"},"weary":{"keywords":["face","tired","sleepy","sad","frustrated","upset"],"char":"😩","fitzpatrick_scale":false,"category":"people"},"pleading":{"keywords":["face","begging","mercy"],"char":"🥺","fitzpatrick_scale":false,"category":"people"},"triumph":{"keywords":["face","gas","phew","proud","pride"],"char":"😤","fitzpatrick_scale":false,"category":"people"},"open_mouth":{"keywords":["face","surprise","impressed","wow","whoa",":O"],"char":"😮","fitzpatrick_scale":false,"category":"people"},"scream":{"keywords":["face","munch","scared","omg"],"char":"😱","fitzpatrick_scale":false,"category":"people"},"fearful":{"keywords":["face","scared","terrified","nervous","oops","huh"],"char":"😨","fitzpatrick_scale":false,"category":"people"},"cold_sweat":{"keywords":["face","nervous","sweat"],"char":"😰","fitzpatrick_scale":false,"category":"people"},"hushed":{"keywords":["face","woo","shh"],"char":"😯","fitzpatrick_scale":false,"category":"people"},"frowning":{"keywords":["face","aw","what"],"char":"😦","fitzpatrick_scale":false,"category":"people"},"anguished":{"keywords":["face","stunned","nervous"],"char":"😧","fitzpatrick_scale":false,"category":"people"},"cry":{"keywords":["face","tears","sad","depressed","upset",":'("],"char":"😢","fitzpatrick_scale":false,"category":"people"},"disappointed_relieved":{"keywords":["face","phew","sweat","nervous"],"char":"😥","fitzpatrick_scale":false,"category":"people"},"drooling_face":{"keywords":["face"],"char":"🤤","fitzpatrick_scale":false,"category":"people"},"sleepy":{"keywords":["face","tired","rest","nap"],"char":"😪","fitzpatrick_scale":false,"category":"people"},"sweat":{"keywords":["face","hot","sad","tired","exercise"],"char":"😓","fitzpatrick_scale":false,"category":"people"},"hot":{"keywords":["face","feverish","heat","red","sweating"],"char":"🥵","fitzpatrick_scale":false,"category":"people"},"cold":{"keywords":["face","blue","freezing","frozen","frostbite","icicles"],"char":"🥶","fitzpatrick_scale":false,"category":"people"},"sob":{"keywords":["face","cry","tears","sad","upset","depressed"],"char":"😭","fitzpatrick_scale":false,"category":"people"},"dizzy_face":{"keywords":["spent","unconscious","xox","dizzy"],"char":"😵","fitzpatrick_scale":false,"category":"people"},"astonished":{"keywords":["face","xox","surprised","poisoned"],"char":"😲","fitzpatrick_scale":false,"category":"people"},"zipper_mouth_face":{"keywords":["face","sealed","zipper","secret"],"char":"🤐","fitzpatrick_scale":false,"category":"people"},"nauseated_face":{"keywords":["face","vomit","gross","green","sick","throw up","ill"],"char":"🤢","fitzpatrick_scale":false,"category":"people"},"sneezing_face":{"keywords":["face","gesundheit","sneeze","sick","allergy"],"char":"🤧","fitzpatrick_scale":false,"category":"people"},"vomiting":{"keywords":["face","sick"],"char":"🤮","fitzpatrick_scale":false,"category":"people"},"mask":{"keywords":["face","sick","ill","disease"],"char":"😷","fitzpatrick_scale":false,"category":"people"},"face_with_thermometer":{"keywords":["sick","temperature","thermometer","cold","fever"],"char":"🤒","fitzpatrick_scale":false,"category":"people"},"face_with_head_bandage":{"keywords":["injured","clumsy","bandage","hurt"],"char":"🤕","fitzpatrick_scale":false,"category":"people"},"woozy":{"keywords":["face","dizzy","intoxicated","tipsy","wavy"],"char":"🥴","fitzpatrick_scale":false,"category":"people"},"sleeping":{"keywords":["face","tired","sleepy","night","zzz"],"char":"😴","fitzpatrick_scale":false,"category":"people"},"zzz":{"keywords":["sleepy","tired","dream"],"char":"💤","fitzpatrick_scale":false,"category":"people"},"poop":{"keywords":["hankey","shitface","fail","turd","shit"],"char":"💩","fitzpatrick_scale":false,"category":"people"},"smiling_imp":{"keywords":["devil","horns"],"char":"😈","fitzpatrick_scale":false,"category":"people"},"imp":{"keywords":["devil","angry","horns"],"char":"👿","fitzpatrick_scale":false,"category":"people"},"japanese_ogre":{"keywords":["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],"char":"👹","fitzpatrick_scale":false,"category":"people"},"japanese_goblin":{"keywords":["red","evil","mask","monster","scary","creepy","japanese","goblin"],"char":"👺","fitzpatrick_scale":false,"category":"people"},"skull":{"keywords":["dead","skeleton","creepy","death"],"char":"💀","fitzpatrick_scale":false,"category":"people"},"ghost":{"keywords":["halloween","spooky","scary"],"char":"👻","fitzpatrick_scale":false,"category":"people"},"alien":{"keywords":["UFO","paul","weird","outer_space"],"char":"👽","fitzpatrick_scale":false,"category":"people"},"robot":{"keywords":["computer","machine","bot"],"char":"🤖","fitzpatrick_scale":false,"category":"people"},"smiley_cat":{"keywords":["animal","cats","happy","smile"],"char":"😺","fitzpatrick_scale":false,"category":"people"},"smile_cat":{"keywords":["animal","cats","smile"],"char":"😸","fitzpatrick_scale":false,"category":"people"},"joy_cat":{"keywords":["animal","cats","haha","happy","tears"],"char":"😹","fitzpatrick_scale":false,"category":"people"},"heart_eyes_cat":{"keywords":["animal","love","like","affection","cats","valentines","heart"],"char":"😻","fitzpatrick_scale":false,"category":"people"},"smirk_cat":{"keywords":["animal","cats","smirk"],"char":"😼","fitzpatrick_scale":false,"category":"people"},"kissing_cat":{"keywords":["animal","cats","kiss"],"char":"😽","fitzpatrick_scale":false,"category":"people"},"scream_cat":{"keywords":["animal","cats","munch","scared","scream"],"char":"🙀","fitzpatrick_scale":false,"category":"people"},"crying_cat_face":{"keywords":["animal","tears","weep","sad","cats","upset","cry"],"char":"😿","fitzpatrick_scale":false,"category":"people"},"pouting_cat":{"keywords":["animal","cats"],"char":"😾","fitzpatrick_scale":false,"category":"people"},"palms_up":{"keywords":["hands","gesture","cupped","prayer"],"char":"🤲","fitzpatrick_scale":true,"category":"people"},"raised_hands":{"keywords":["gesture","hooray","yea","celebration","hands"],"char":"🙌","fitzpatrick_scale":true,"category":"people"},"clap":{"keywords":["hands","praise","applause","congrats","yay"],"char":"👏","fitzpatrick_scale":true,"category":"people"},"wave":{"keywords":["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"char":"👋","fitzpatrick_scale":true,"category":"people"},"call_me_hand":{"keywords":["hands","gesture"],"char":"🤙","fitzpatrick_scale":true,"category":"people"},"+1":{"keywords":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"char":"👍","fitzpatrick_scale":true,"category":"people"},"-1":{"keywords":["thumbsdown","no","dislike","hand"],"char":"👎","fitzpatrick_scale":true,"category":"people"},"facepunch":{"keywords":["angry","violence","fist","hit","attack","hand"],"char":"👊","fitzpatrick_scale":true,"category":"people"},"fist":{"keywords":["fingers","hand","grasp"],"char":"✊","fitzpatrick_scale":true,"category":"people"},"fist_left":{"keywords":["hand","fistbump"],"char":"🤛","fitzpatrick_scale":true,"category":"people"},"fist_right":{"keywords":["hand","fistbump"],"char":"🤜","fitzpatrick_scale":true,"category":"people"},"v":{"keywords":["fingers","ohyeah","hand","peace","victory","two"],"char":"✌","fitzpatrick_scale":true,"category":"people"},"ok_hand":{"keywords":["fingers","limbs","perfect","ok","okay"],"char":"👌","fitzpatrick_scale":true,"category":"people"},"raised_hand":{"keywords":["fingers","stop","highfive","palm","ban"],"char":"✋","fitzpatrick_scale":true,"category":"people"},"raised_back_of_hand":{"keywords":["fingers","raised","backhand"],"char":"🤚","fitzpatrick_scale":true,"category":"people"},"open_hands":{"keywords":["fingers","butterfly","hands","open"],"char":"👐","fitzpatrick_scale":true,"category":"people"},"muscle":{"keywords":["arm","flex","hand","summer","strong","biceps"],"char":"💪","fitzpatrick_scale":true,"category":"people"},"pray":{"keywords":["please","hope","wish","namaste","highfive"],"char":"🙏","fitzpatrick_scale":true,"category":"people"},"foot":{"keywords":["kick","stomp"],"char":"🦶","fitzpatrick_scale":true,"category":"people"},"leg":{"keywords":["kick","limb"],"char":"🦵","fitzpatrick_scale":true,"category":"people"},"handshake":{"keywords":["agreement","shake"],"char":"🤝","fitzpatrick_scale":false,"category":"people"},"point_up":{"keywords":["hand","fingers","direction","up"],"char":"☝","fitzpatrick_scale":true,"category":"people"},"point_up_2":{"keywords":["fingers","hand","direction","up"],"char":"👆","fitzpatrick_scale":true,"category":"people"},"point_down":{"keywords":["fingers","hand","direction","down"],"char":"👇","fitzpatrick_scale":true,"category":"people"},"point_left":{"keywords":["direction","fingers","hand","left"],"char":"👈","fitzpatrick_scale":true,"category":"people"},"point_right":{"keywords":["fingers","hand","direction","right"],"char":"👉","fitzpatrick_scale":true,"category":"people"},"fu":{"keywords":["hand","fingers","rude","middle","flipping"],"char":"🖕","fitzpatrick_scale":true,"category":"people"},"raised_hand_with_fingers_splayed":{"keywords":["hand","fingers","palm"],"char":"🖐","fitzpatrick_scale":true,"category":"people"},"love_you":{"keywords":["hand","fingers","gesture"],"char":"🤟","fitzpatrick_scale":true,"category":"people"},"metal":{"keywords":["hand","fingers","evil_eye","sign_of_horns","rock_on"],"char":"🤘","fitzpatrick_scale":true,"category":"people"},"crossed_fingers":{"keywords":["good","lucky"],"char":"🤞","fitzpatrick_scale":true,"category":"people"},"vulcan_salute":{"keywords":["hand","fingers","spock","star trek"],"char":"🖖","fitzpatrick_scale":true,"category":"people"},"writing_hand":{"keywords":["lower_left_ballpoint_pen","stationery","write","compose"],"char":"✍","fitzpatrick_scale":true,"category":"people"},"selfie":{"keywords":["camera","phone"],"char":"🤳","fitzpatrick_scale":true,"category":"people"},"nail_care":{"keywords":["beauty","manicure","finger","fashion","nail"],"char":"💅","fitzpatrick_scale":true,"category":"people"},"lips":{"keywords":["mouth","kiss"],"char":"👄","fitzpatrick_scale":false,"category":"people"},"tooth":{"keywords":["teeth","dentist"],"char":"🦷","fitzpatrick_scale":false,"category":"people"},"tongue":{"keywords":["mouth","playful"],"char":"👅","fitzpatrick_scale":false,"category":"people"},"ear":{"keywords":["face","hear","sound","listen"],"char":"👂","fitzpatrick_scale":true,"category":"people"},"nose":{"keywords":["smell","sniff"],"char":"👃","fitzpatrick_scale":true,"category":"people"},"eye":{"keywords":["face","look","see","watch","stare"],"char":"👁","fitzpatrick_scale":false,"category":"people"},"eyes":{"keywords":["look","watch","stalk","peek","see"],"char":"👀","fitzpatrick_scale":false,"category":"people"},"brain":{"keywords":["smart","intelligent"],"char":"🧠","fitzpatrick_scale":false,"category":"people"},"bust_in_silhouette":{"keywords":["user","person","human"],"char":"👤","fitzpatrick_scale":false,"category":"people"},"busts_in_silhouette":{"keywords":["user","person","human","group","team"],"char":"👥","fitzpatrick_scale":false,"category":"people"},"speaking_head":{"keywords":["user","person","human","sing","say","talk"],"char":"🗣","fitzpatrick_scale":false,"category":"people"},"baby":{"keywords":["child","boy","girl","toddler"],"char":"👶","fitzpatrick_scale":true,"category":"people"},"child":{"keywords":["gender-neutral","young"],"char":"🧒","fitzpatrick_scale":true,"category":"people"},"boy":{"keywords":["man","male","guy","teenager"],"char":"👦","fitzpatrick_scale":true,"category":"people"},"girl":{"keywords":["female","woman","teenager"],"char":"👧","fitzpatrick_scale":true,"category":"people"},"adult":{"keywords":["gender-neutral","person"],"char":"🧑","fitzpatrick_scale":true,"category":"people"},"man":{"keywords":["mustache","father","dad","guy","classy","sir","moustache"],"char":"👨","fitzpatrick_scale":true,"category":"people"},"woman":{"keywords":["female","girls","lady"],"char":"👩","fitzpatrick_scale":true,"category":"people"},"blonde_woman":{"keywords":["woman","female","girl","blonde","person"],"char":"👱‍♀️","fitzpatrick_scale":true,"category":"people"},"blonde_man":{"keywords":["man","male","boy","blonde","guy","person"],"char":"👱","fitzpatrick_scale":true,"category":"people"},"bearded_person":{"keywords":["person","bewhiskered"],"char":"🧔","fitzpatrick_scale":true,"category":"people"},"older_adult":{"keywords":["human","elder","senior","gender-neutral"],"char":"🧓","fitzpatrick_scale":true,"category":"people"},"older_man":{"keywords":["human","male","men","old","elder","senior"],"char":"👴","fitzpatrick_scale":true,"category":"people"},"older_woman":{"keywords":["human","female","women","lady","old","elder","senior"],"char":"👵","fitzpatrick_scale":true,"category":"people"},"man_with_gua_pi_mao":{"keywords":["male","boy","chinese"],"char":"👲","fitzpatrick_scale":true,"category":"people"},"woman_with_headscarf":{"keywords":["female","hijab","mantilla","tichel"],"char":"🧕","fitzpatrick_scale":true,"category":"people"},"woman_with_turban":{"keywords":["female","indian","hinduism","arabs","woman"],"char":"👳‍♀️","fitzpatrick_scale":true,"category":"people"},"man_with_turban":{"keywords":["male","indian","hinduism","arabs"],"char":"👳","fitzpatrick_scale":true,"category":"people"},"policewoman":{"keywords":["woman","police","law","legal","enforcement","arrest","911","female"],"char":"👮‍♀️","fitzpatrick_scale":true,"category":"people"},"policeman":{"keywords":["man","police","law","legal","enforcement","arrest","911"],"char":"👮","fitzpatrick_scale":true,"category":"people"},"construction_worker_woman":{"keywords":["female","human","wip","build","construction","worker","labor","woman"],"char":"👷‍♀️","fitzpatrick_scale":true,"category":"people"},"construction_worker_man":{"keywords":["male","human","wip","guy","build","construction","worker","labor"],"char":"👷","fitzpatrick_scale":true,"category":"people"},"guardswoman":{"keywords":["uk","gb","british","female","royal","woman"],"char":"💂‍♀️","fitzpatrick_scale":true,"category":"people"},"guardsman":{"keywords":["uk","gb","british","male","guy","royal"],"char":"💂","fitzpatrick_scale":true,"category":"people"},"female_detective":{"keywords":["human","spy","detective","female","woman"],"char":"🕵️‍♀️","fitzpatrick_scale":true,"category":"people"},"male_detective":{"keywords":["human","spy","detective"],"char":"🕵","fitzpatrick_scale":true,"category":"people"},"woman_health_worker":{"keywords":["doctor","nurse","therapist","healthcare","woman","human"],"char":"👩‍⚕️","fitzpatrick_scale":true,"category":"people"},"man_health_worker":{"keywords":["doctor","nurse","therapist","healthcare","man","human"],"char":"👨‍⚕️","fitzpatrick_scale":true,"category":"people"},"woman_farmer":{"keywords":["rancher","gardener","woman","human"],"char":"👩‍🌾","fitzpatrick_scale":true,"category":"people"},"man_farmer":{"keywords":["rancher","gardener","man","human"],"char":"👨‍🌾","fitzpatrick_scale":true,"category":"people"},"woman_cook":{"keywords":["chef","woman","human"],"char":"👩‍🍳","fitzpatrick_scale":true,"category":"people"},"man_cook":{"keywords":["chef","man","human"],"char":"👨‍🍳","fitzpatrick_scale":true,"category":"people"},"woman_student":{"keywords":["graduate","woman","human"],"char":"👩‍🎓","fitzpatrick_scale":true,"category":"people"},"man_student":{"keywords":["graduate","man","human"],"char":"👨‍🎓","fitzpatrick_scale":true,"category":"people"},"woman_singer":{"keywords":["rockstar","entertainer","woman","human"],"char":"👩‍🎤","fitzpatrick_scale":true,"category":"people"},"man_singer":{"keywords":["rockstar","entertainer","man","human"],"char":"👨‍🎤","fitzpatrick_scale":true,"category":"people"},"woman_teacher":{"keywords":["instructor","professor","woman","human"],"char":"👩‍🏫","fitzpatrick_scale":true,"category":"people"},"man_teacher":{"keywords":["instructor","professor","man","human"],"char":"👨‍🏫","fitzpatrick_scale":true,"category":"people"},"woman_factory_worker":{"keywords":["assembly","industrial","woman","human"],"char":"👩‍🏭","fitzpatrick_scale":true,"category":"people"},"man_factory_worker":{"keywords":["assembly","industrial","man","human"],"char":"👨‍🏭","fitzpatrick_scale":true,"category":"people"},"woman_technologist":{"keywords":["coder","developer","engineer","programmer","software","woman","human","laptop","computer"],"char":"👩‍💻","fitzpatrick_scale":true,"category":"people"},"man_technologist":{"keywords":["coder","developer","engineer","programmer","software","man","human","laptop","computer"],"char":"👨‍💻","fitzpatrick_scale":true,"category":"people"},"woman_office_worker":{"keywords":["business","manager","woman","human"],"char":"👩‍💼","fitzpatrick_scale":true,"category":"people"},"man_office_worker":{"keywords":["business","manager","man","human"],"char":"👨‍💼","fitzpatrick_scale":true,"category":"people"},"woman_mechanic":{"keywords":["plumber","woman","human","wrench"],"char":"👩‍🔧","fitzpatrick_scale":true,"category":"people"},"man_mechanic":{"keywords":["plumber","man","human","wrench"],"char":"👨‍🔧","fitzpatrick_scale":true,"category":"people"},"woman_scientist":{"keywords":["biologist","chemist","engineer","physicist","woman","human"],"char":"👩‍🔬","fitzpatrick_scale":true,"category":"people"},"man_scientist":{"keywords":["biologist","chemist","engineer","physicist","man","human"],"char":"👨‍🔬","fitzpatrick_scale":true,"category":"people"},"woman_artist":{"keywords":["painter","woman","human"],"char":"👩‍🎨","fitzpatrick_scale":true,"category":"people"},"man_artist":{"keywords":["painter","man","human"],"char":"👨‍🎨","fitzpatrick_scale":true,"category":"people"},"woman_firefighter":{"keywords":["fireman","woman","human"],"char":"👩‍🚒","fitzpatrick_scale":true,"category":"people"},"man_firefighter":{"keywords":["fireman","man","human"],"char":"👨‍🚒","fitzpatrick_scale":true,"category":"people"},"woman_pilot":{"keywords":["aviator","plane","woman","human"],"char":"👩‍✈️","fitzpatrick_scale":true,"category":"people"},"man_pilot":{"keywords":["aviator","plane","man","human"],"char":"👨‍✈️","fitzpatrick_scale":true,"category":"people"},"woman_astronaut":{"keywords":["space","rocket","woman","human"],"char":"👩‍🚀","fitzpatrick_scale":true,"category":"people"},"man_astronaut":{"keywords":["space","rocket","man","human"],"char":"👨‍🚀","fitzpatrick_scale":true,"category":"people"},"woman_judge":{"keywords":["justice","court","woman","human"],"char":"👩‍⚖️","fitzpatrick_scale":true,"category":"people"},"man_judge":{"keywords":["justice","court","man","human"],"char":"👨‍⚖️","fitzpatrick_scale":true,"category":"people"},"woman_superhero":{"keywords":["woman","female","good","heroine","superpowers"],"char":"🦸‍♀️","fitzpatrick_scale":true,"category":"people"},"man_superhero":{"keywords":["man","male","good","hero","superpowers"],"char":"🦸‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_supervillain":{"keywords":["woman","female","evil","bad","criminal","heroine","superpowers"],"char":"🦹‍♀️","fitzpatrick_scale":true,"category":"people"},"man_supervillain":{"keywords":["man","male","evil","bad","criminal","hero","superpowers"],"char":"🦹‍♂️","fitzpatrick_scale":true,"category":"people"},"mrs_claus":{"keywords":["woman","female","xmas","mother christmas"],"char":"🤶","fitzpatrick_scale":true,"category":"people"},"santa":{"keywords":["festival","man","male","xmas","father christmas"],"char":"🎅","fitzpatrick_scale":true,"category":"people"},"sorceress":{"keywords":["woman","female","mage","witch"],"char":"🧙‍♀️","fitzpatrick_scale":true,"category":"people"},"wizard":{"keywords":["man","male","mage","sorcerer"],"char":"🧙‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_elf":{"keywords":["woman","female"],"char":"🧝‍♀️","fitzpatrick_scale":true,"category":"people"},"man_elf":{"keywords":["man","male"],"char":"🧝‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_vampire":{"keywords":["woman","female"],"char":"🧛‍♀️","fitzpatrick_scale":true,"category":"people"},"man_vampire":{"keywords":["man","male","dracula"],"char":"🧛‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_zombie":{"keywords":["woman","female","undead","walking dead"],"char":"🧟‍♀️","fitzpatrick_scale":false,"category":"people"},"man_zombie":{"keywords":["man","male","dracula","undead","walking dead"],"char":"🧟‍♂️","fitzpatrick_scale":false,"category":"people"},"woman_genie":{"keywords":["woman","female"],"char":"🧞‍♀️","fitzpatrick_scale":false,"category":"people"},"man_genie":{"keywords":["man","male"],"char":"🧞‍♂️","fitzpatrick_scale":false,"category":"people"},"mermaid":{"keywords":["woman","female","merwoman","ariel"],"char":"🧜‍♀️","fitzpatrick_scale":true,"category":"people"},"merman":{"keywords":["man","male","triton"],"char":"🧜‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_fairy":{"keywords":["woman","female"],"char":"🧚‍♀️","fitzpatrick_scale":true,"category":"people"},"man_fairy":{"keywords":["man","male"],"char":"🧚‍♂️","fitzpatrick_scale":true,"category":"people"},"angel":{"keywords":["heaven","wings","halo"],"char":"👼","fitzpatrick_scale":true,"category":"people"},"pregnant_woman":{"keywords":["baby"],"char":"🤰","fitzpatrick_scale":true,"category":"people"},"breastfeeding":{"keywords":["nursing","baby"],"char":"🤱","fitzpatrick_scale":true,"category":"people"},"princess":{"keywords":["girl","woman","female","blond","crown","royal","queen"],"char":"👸","fitzpatrick_scale":true,"category":"people"},"prince":{"keywords":["boy","man","male","crown","royal","king"],"char":"🤴","fitzpatrick_scale":true,"category":"people"},"bride_with_veil":{"keywords":["couple","marriage","wedding","woman","bride"],"char":"👰","fitzpatrick_scale":true,"category":"people"},"man_in_tuxedo":{"keywords":["couple","marriage","wedding","groom"],"char":"🤵","fitzpatrick_scale":true,"category":"people"},"running_woman":{"keywords":["woman","walking","exercise","race","running","female"],"char":"🏃‍♀️","fitzpatrick_scale":true,"category":"people"},"running_man":{"keywords":["man","walking","exercise","race","running"],"char":"🏃","fitzpatrick_scale":true,"category":"people"},"walking_woman":{"keywords":["human","feet","steps","woman","female"],"char":"🚶‍♀️","fitzpatrick_scale":true,"category":"people"},"walking_man":{"keywords":["human","feet","steps"],"char":"🚶","fitzpatrick_scale":true,"category":"people"},"dancer":{"keywords":["female","girl","woman","fun"],"char":"💃","fitzpatrick_scale":true,"category":"people"},"man_dancing":{"keywords":["male","boy","fun","dancer"],"char":"🕺","fitzpatrick_scale":true,"category":"people"},"dancing_women":{"keywords":["female","bunny","women","girls"],"char":"👯","fitzpatrick_scale":false,"category":"people"},"dancing_men":{"keywords":["male","bunny","men","boys"],"char":"👯‍♂️","fitzpatrick_scale":false,"category":"people"},"couple":{"keywords":["pair","people","human","love","date","dating","like","affection","valentines","marriage"],"char":"👫","fitzpatrick_scale":false,"category":"people"},"two_men_holding_hands":{"keywords":["pair","couple","love","like","bromance","friendship","people","human"],"char":"👬","fitzpatrick_scale":false,"category":"people"},"two_women_holding_hands":{"keywords":["pair","friendship","couple","love","like","female","people","human"],"char":"👭","fitzpatrick_scale":false,"category":"people"},"bowing_woman":{"keywords":["woman","female","girl"],"char":"🙇‍♀️","fitzpatrick_scale":true,"category":"people"},"bowing_man":{"keywords":["man","male","boy"],"char":"🙇","fitzpatrick_scale":true,"category":"people"},"man_facepalming":{"keywords":["man","male","boy","disbelief"],"char":"🤦‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_facepalming":{"keywords":["woman","female","girl","disbelief"],"char":"🤦‍♀️","fitzpatrick_scale":true,"category":"people"},"woman_shrugging":{"keywords":["woman","female","girl","confused","indifferent","doubt"],"char":"🤷","fitzpatrick_scale":true,"category":"people"},"man_shrugging":{"keywords":["man","male","boy","confused","indifferent","doubt"],"char":"🤷‍♂️","fitzpatrick_scale":true,"category":"people"},"tipping_hand_woman":{"keywords":["female","girl","woman","human","information"],"char":"💁","fitzpatrick_scale":true,"category":"people"},"tipping_hand_man":{"keywords":["male","boy","man","human","information"],"char":"💁‍♂️","fitzpatrick_scale":true,"category":"people"},"no_good_woman":{"keywords":["female","girl","woman","nope"],"char":"🙅","fitzpatrick_scale":true,"category":"people"},"no_good_man":{"keywords":["male","boy","man","nope"],"char":"🙅‍♂️","fitzpatrick_scale":true,"category":"people"},"ok_woman":{"keywords":["women","girl","female","pink","human","woman"],"char":"🙆","fitzpatrick_scale":true,"category":"people"},"ok_man":{"keywords":["men","boy","male","blue","human","man"],"char":"🙆‍♂️","fitzpatrick_scale":true,"category":"people"},"raising_hand_woman":{"keywords":["female","girl","woman"],"char":"🙋","fitzpatrick_scale":true,"category":"people"},"raising_hand_man":{"keywords":["male","boy","man"],"char":"🙋‍♂️","fitzpatrick_scale":true,"category":"people"},"pouting_woman":{"keywords":["female","girl","woman"],"char":"🙎","fitzpatrick_scale":true,"category":"people"},"pouting_man":{"keywords":["male","boy","man"],"char":"🙎‍♂️","fitzpatrick_scale":true,"category":"people"},"frowning_woman":{"keywords":["female","girl","woman","sad","depressed","discouraged","unhappy"],"char":"🙍","fitzpatrick_scale":true,"category":"people"},"frowning_man":{"keywords":["male","boy","man","sad","depressed","discouraged","unhappy"],"char":"🙍‍♂️","fitzpatrick_scale":true,"category":"people"},"haircut_woman":{"keywords":["female","girl","woman"],"char":"💇","fitzpatrick_scale":true,"category":"people"},"haircut_man":{"keywords":["male","boy","man"],"char":"💇‍♂️","fitzpatrick_scale":true,"category":"people"},"massage_woman":{"keywords":["female","girl","woman","head"],"char":"💆","fitzpatrick_scale":true,"category":"people"},"massage_man":{"keywords":["male","boy","man","head"],"char":"💆‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_in_steamy_room":{"keywords":["female","woman","spa","steamroom","sauna"],"char":"🧖‍♀️","fitzpatrick_scale":true,"category":"people"},"man_in_steamy_room":{"keywords":["male","man","spa","steamroom","sauna"],"char":"🧖‍♂️","fitzpatrick_scale":true,"category":"people"},"couple_with_heart_woman_man":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"💑","fitzpatrick_scale":false,"category":"people"},"couple_with_heart_woman_woman":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"👩‍❤️‍👩","fitzpatrick_scale":false,"category":"people"},"couple_with_heart_man_man":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"👨‍❤️‍👨","fitzpatrick_scale":false,"category":"people"},"couplekiss_man_woman":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"💏","fitzpatrick_scale":false,"category":"people"},"couplekiss_woman_woman":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"👩‍❤️‍💋‍👩","fitzpatrick_scale":false,"category":"people"},"couplekiss_man_man":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"👨‍❤️‍💋‍👨","fitzpatrick_scale":false,"category":"people"},"family_man_woman_boy":{"keywords":["home","parents","child","mom","dad","father","mother","people","human"],"char":"👪","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl":{"keywords":["home","parents","people","human","child"],"char":"👨‍👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_woman_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_man_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_boy":{"keywords":["home","parent","people","human","child"],"char":"👩‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_girl":{"keywords":["home","parent","people","human","child"],"char":"👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_girl_boy":{"keywords":["home","parent","people","human","children"],"char":"👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_boy_boy":{"keywords":["home","parent","people","human","children"],"char":"👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_girl_girl":{"keywords":["home","parent","people","human","children"],"char":"👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_boy":{"keywords":["home","parent","people","human","child"],"char":"👨‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_girl":{"keywords":["home","parent","people","human","child"],"char":"👨‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_girl_boy":{"keywords":["home","parent","people","human","children"],"char":"👨‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_boy_boy":{"keywords":["home","parent","people","human","children"],"char":"👨‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_girl_girl":{"keywords":["home","parent","people","human","children"],"char":"👨‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"yarn":{"keywords":["ball","crochet","knit"],"char":"🧶","fitzpatrick_scale":false,"category":"people"},"thread":{"keywords":["needle","sewing","spool","string"],"char":"🧵","fitzpatrick_scale":false,"category":"people"},"coat":{"keywords":["jacket"],"char":"🧥","fitzpatrick_scale":false,"category":"people"},"labcoat":{"keywords":["doctor","experiment","scientist","chemist"],"char":"🥼","fitzpatrick_scale":false,"category":"people"},"womans_clothes":{"keywords":["fashion","shopping_bags","female"],"char":"👚","fitzpatrick_scale":false,"category":"people"},"tshirt":{"keywords":["fashion","cloth","casual","shirt","tee"],"char":"👕","fitzpatrick_scale":false,"category":"people"},"jeans":{"keywords":["fashion","shopping"],"char":"👖","fitzpatrick_scale":false,"category":"people"},"necktie":{"keywords":["shirt","suitup","formal","fashion","cloth","business"],"char":"👔","fitzpatrick_scale":false,"category":"people"},"dress":{"keywords":["clothes","fashion","shopping"],"char":"👗","fitzpatrick_scale":false,"category":"people"},"bikini":{"keywords":["swimming","female","woman","girl","fashion","beach","summer"],"char":"👙","fitzpatrick_scale":false,"category":"people"},"kimono":{"keywords":["dress","fashion","women","female","japanese"],"char":"👘","fitzpatrick_scale":false,"category":"people"},"lipstick":{"keywords":["female","girl","fashion","woman"],"char":"💄","fitzpatrick_scale":false,"category":"people"},"kiss":{"keywords":["face","lips","love","like","affection","valentines"],"char":"💋","fitzpatrick_scale":false,"category":"people"},"footprints":{"keywords":["feet","tracking","walking","beach"],"char":"👣","fitzpatrick_scale":false,"category":"people"},"flat_shoe":{"keywords":["ballet","slip-on","slipper"],"char":"🥿","fitzpatrick_scale":false,"category":"people"},"high_heel":{"keywords":["fashion","shoes","female","pumps","stiletto"],"char":"👠","fitzpatrick_scale":false,"category":"people"},"sandal":{"keywords":["shoes","fashion","flip flops"],"char":"👡","fitzpatrick_scale":false,"category":"people"},"boot":{"keywords":["shoes","fashion"],"char":"👢","fitzpatrick_scale":false,"category":"people"},"mans_shoe":{"keywords":["fashion","male"],"char":"👞","fitzpatrick_scale":false,"category":"people"},"athletic_shoe":{"keywords":["shoes","sports","sneakers"],"char":"👟","fitzpatrick_scale":false,"category":"people"},"hiking_boot":{"keywords":["backpacking","camping","hiking"],"char":"🥾","fitzpatrick_scale":false,"category":"people"},"socks":{"keywords":["stockings","clothes"],"char":"🧦","fitzpatrick_scale":false,"category":"people"},"gloves":{"keywords":["hands","winter","clothes"],"char":"🧤","fitzpatrick_scale":false,"category":"people"},"scarf":{"keywords":["neck","winter","clothes"],"char":"🧣","fitzpatrick_scale":false,"category":"people"},"womans_hat":{"keywords":["fashion","accessories","female","lady","spring"],"char":"👒","fitzpatrick_scale":false,"category":"people"},"tophat":{"keywords":["magic","gentleman","classy","circus"],"char":"🎩","fitzpatrick_scale":false,"category":"people"},"billed_hat":{"keywords":["cap","baseball"],"char":"🧢","fitzpatrick_scale":false,"category":"people"},"rescue_worker_helmet":{"keywords":["construction","build"],"char":"⛑","fitzpatrick_scale":false,"category":"people"},"mortar_board":{"keywords":["school","college","degree","university","graduation","cap","hat","legal","learn","education"],"char":"🎓","fitzpatrick_scale":false,"category":"people"},"crown":{"keywords":["king","kod","leader","royalty","lord"],"char":"👑","fitzpatrick_scale":false,"category":"people"},"school_satchel":{"keywords":["student","education","bag","backpack"],"char":"🎒","fitzpatrick_scale":false,"category":"people"},"luggage":{"keywords":["packing","travel"],"char":"🧳","fitzpatrick_scale":false,"category":"people"},"pouch":{"keywords":["bag","accessories","shopping"],"char":"👝","fitzpatrick_scale":false,"category":"people"},"purse":{"keywords":["fashion","accessories","money","sales","shopping"],"char":"👛","fitzpatrick_scale":false,"category":"people"},"handbag":{"keywords":["fashion","accessory","accessories","shopping"],"char":"👜","fitzpatrick_scale":false,"category":"people"},"briefcase":{"keywords":["business","documents","work","law","legal","job","career"],"char":"💼","fitzpatrick_scale":false,"category":"people"},"eyeglasses":{"keywords":["fashion","accessories","eyesight","nerdy","dork","geek"],"char":"👓","fitzpatrick_scale":false,"category":"people"},"dark_sunglasses":{"keywords":["face","cool","accessories"],"char":"🕶","fitzpatrick_scale":false,"category":"people"},"goggles":{"keywords":["eyes","protection","safety"],"char":"🥽","fitzpatrick_scale":false,"category":"people"},"ring":{"keywords":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"char":"💍","fitzpatrick_scale":false,"category":"people"},"closed_umbrella":{"keywords":["weather","rain","drizzle"],"char":"🌂","fitzpatrick_scale":false,"category":"people"},"dog":{"keywords":["animal","friend","nature","woof","puppy","pet","faithful"],"char":"🐶","fitzpatrick_scale":false,"category":"animals_and_nature"},"cat":{"keywords":["animal","meow","nature","pet","kitten"],"char":"🐱","fitzpatrick_scale":false,"category":"animals_and_nature"},"mouse":{"keywords":["animal","nature","cheese_wedge","rodent"],"char":"🐭","fitzpatrick_scale":false,"category":"animals_and_nature"},"hamster":{"keywords":["animal","nature"],"char":"🐹","fitzpatrick_scale":false,"category":"animals_and_nature"},"rabbit":{"keywords":["animal","nature","pet","spring","magic","bunny"],"char":"🐰","fitzpatrick_scale":false,"category":"animals_and_nature"},"fox_face":{"keywords":["animal","nature","face"],"char":"🦊","fitzpatrick_scale":false,"category":"animals_and_nature"},"bear":{"keywords":["animal","nature","wild"],"char":"🐻","fitzpatrick_scale":false,"category":"animals_and_nature"},"panda_face":{"keywords":["animal","nature","panda"],"char":"🐼","fitzpatrick_scale":false,"category":"animals_and_nature"},"koala":{"keywords":["animal","nature"],"char":"🐨","fitzpatrick_scale":false,"category":"animals_and_nature"},"tiger":{"keywords":["animal","cat","danger","wild","nature","roar"],"char":"🐯","fitzpatrick_scale":false,"category":"animals_and_nature"},"lion":{"keywords":["animal","nature"],"char":"🦁","fitzpatrick_scale":false,"category":"animals_and_nature"},"cow":{"keywords":["beef","ox","animal","nature","moo","milk"],"char":"🐮","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig":{"keywords":["animal","oink","nature"],"char":"🐷","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig_nose":{"keywords":["animal","oink"],"char":"🐽","fitzpatrick_scale":false,"category":"animals_and_nature"},"frog":{"keywords":["animal","nature","croak","toad"],"char":"🐸","fitzpatrick_scale":false,"category":"animals_and_nature"},"squid":{"keywords":["animal","nature","ocean","sea"],"char":"🦑","fitzpatrick_scale":false,"category":"animals_and_nature"},"octopus":{"keywords":["animal","creature","ocean","sea","nature","beach"],"char":"🐙","fitzpatrick_scale":false,"category":"animals_and_nature"},"shrimp":{"keywords":["animal","ocean","nature","seafood"],"char":"🦐","fitzpatrick_scale":false,"category":"animals_and_nature"},"monkey_face":{"keywords":["animal","nature","circus"],"char":"🐵","fitzpatrick_scale":false,"category":"animals_and_nature"},"gorilla":{"keywords":["animal","nature","circus"],"char":"🦍","fitzpatrick_scale":false,"category":"animals_and_nature"},"see_no_evil":{"keywords":["monkey","animal","nature","haha"],"char":"🙈","fitzpatrick_scale":false,"category":"animals_and_nature"},"hear_no_evil":{"keywords":["animal","monkey","nature"],"char":"🙉","fitzpatrick_scale":false,"category":"animals_and_nature"},"speak_no_evil":{"keywords":["monkey","animal","nature","omg"],"char":"🙊","fitzpatrick_scale":false,"category":"animals_and_nature"},"monkey":{"keywords":["animal","nature","banana","circus"],"char":"🐒","fitzpatrick_scale":false,"category":"animals_and_nature"},"chicken":{"keywords":["animal","cluck","nature","bird"],"char":"🐔","fitzpatrick_scale":false,"category":"animals_and_nature"},"penguin":{"keywords":["animal","nature"],"char":"🐧","fitzpatrick_scale":false,"category":"animals_and_nature"},"bird":{"keywords":["animal","nature","fly","tweet","spring"],"char":"🐦","fitzpatrick_scale":false,"category":"animals_and_nature"},"baby_chick":{"keywords":["animal","chicken","bird"],"char":"🐤","fitzpatrick_scale":false,"category":"animals_and_nature"},"hatching_chick":{"keywords":["animal","chicken","egg","born","baby","bird"],"char":"🐣","fitzpatrick_scale":false,"category":"animals_and_nature"},"hatched_chick":{"keywords":["animal","chicken","baby","bird"],"char":"🐥","fitzpatrick_scale":false,"category":"animals_and_nature"},"duck":{"keywords":["animal","nature","bird","mallard"],"char":"🦆","fitzpatrick_scale":false,"category":"animals_and_nature"},"eagle":{"keywords":["animal","nature","bird"],"char":"🦅","fitzpatrick_scale":false,"category":"animals_and_nature"},"owl":{"keywords":["animal","nature","bird","hoot"],"char":"🦉","fitzpatrick_scale":false,"category":"animals_and_nature"},"bat":{"keywords":["animal","nature","blind","vampire"],"char":"🦇","fitzpatrick_scale":false,"category":"animals_and_nature"},"wolf":{"keywords":["animal","nature","wild"],"char":"🐺","fitzpatrick_scale":false,"category":"animals_and_nature"},"boar":{"keywords":["animal","nature"],"char":"🐗","fitzpatrick_scale":false,"category":"animals_and_nature"},"horse":{"keywords":["animal","brown","nature"],"char":"🐴","fitzpatrick_scale":false,"category":"animals_and_nature"},"unicorn":{"keywords":["animal","nature","mystical"],"char":"🦄","fitzpatrick_scale":false,"category":"animals_and_nature"},"honeybee":{"keywords":["animal","insect","nature","bug","spring","honey"],"char":"🐝","fitzpatrick_scale":false,"category":"animals_and_nature"},"bug":{"keywords":["animal","insect","nature","worm"],"char":"🐛","fitzpatrick_scale":false,"category":"animals_and_nature"},"butterfly":{"keywords":["animal","insect","nature","caterpillar"],"char":"🦋","fitzpatrick_scale":false,"category":"animals_and_nature"},"snail":{"keywords":["slow","animal","shell"],"char":"🐌","fitzpatrick_scale":false,"category":"animals_and_nature"},"beetle":{"keywords":["animal","insect","nature","ladybug"],"char":"🐞","fitzpatrick_scale":false,"category":"animals_and_nature"},"ant":{"keywords":["animal","insect","nature","bug"],"char":"🐜","fitzpatrick_scale":false,"category":"animals_and_nature"},"grasshopper":{"keywords":["animal","cricket","chirp"],"char":"🦗","fitzpatrick_scale":false,"category":"animals_and_nature"},"spider":{"keywords":["animal","arachnid"],"char":"🕷","fitzpatrick_scale":false,"category":"animals_and_nature"},"scorpion":{"keywords":["animal","arachnid"],"char":"🦂","fitzpatrick_scale":false,"category":"animals_and_nature"},"crab":{"keywords":["animal","crustacean"],"char":"🦀","fitzpatrick_scale":false,"category":"animals_and_nature"},"snake":{"keywords":["animal","evil","nature","hiss","python"],"char":"🐍","fitzpatrick_scale":false,"category":"animals_and_nature"},"lizard":{"keywords":["animal","nature","reptile"],"char":"🦎","fitzpatrick_scale":false,"category":"animals_and_nature"},"t-rex":{"keywords":["animal","nature","dinosaur","tyrannosaurus","extinct"],"char":"🦖","fitzpatrick_scale":false,"category":"animals_and_nature"},"sauropod":{"keywords":["animal","nature","dinosaur","brachiosaurus","brontosaurus","diplodocus","extinct"],"char":"🦕","fitzpatrick_scale":false,"category":"animals_and_nature"},"turtle":{"keywords":["animal","slow","nature","tortoise"],"char":"🐢","fitzpatrick_scale":false,"category":"animals_and_nature"},"tropical_fish":{"keywords":["animal","swim","ocean","beach","nemo"],"char":"🐠","fitzpatrick_scale":false,"category":"animals_and_nature"},"fish":{"keywords":["animal","food","nature"],"char":"🐟","fitzpatrick_scale":false,"category":"animals_and_nature"},"blowfish":{"keywords":["animal","nature","food","sea","ocean"],"char":"🐡","fitzpatrick_scale":false,"category":"animals_and_nature"},"dolphin":{"keywords":["animal","nature","fish","sea","ocean","flipper","fins","beach"],"char":"🐬","fitzpatrick_scale":false,"category":"animals_and_nature"},"shark":{"keywords":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"char":"🦈","fitzpatrick_scale":false,"category":"animals_and_nature"},"whale":{"keywords":["animal","nature","sea","ocean"],"char":"🐳","fitzpatrick_scale":false,"category":"animals_and_nature"},"whale2":{"keywords":["animal","nature","sea","ocean"],"char":"🐋","fitzpatrick_scale":false,"category":"animals_and_nature"},"crocodile":{"keywords":["animal","nature","reptile","lizard","alligator"],"char":"🐊","fitzpatrick_scale":false,"category":"animals_and_nature"},"leopard":{"keywords":["animal","nature"],"char":"🐆","fitzpatrick_scale":false,"category":"animals_and_nature"},"zebra":{"keywords":["animal","nature","stripes","safari"],"char":"🦓","fitzpatrick_scale":false,"category":"animals_and_nature"},"tiger2":{"keywords":["animal","nature","roar"],"char":"🐅","fitzpatrick_scale":false,"category":"animals_and_nature"},"water_buffalo":{"keywords":["animal","nature","ox","cow"],"char":"🐃","fitzpatrick_scale":false,"category":"animals_and_nature"},"ox":{"keywords":["animal","cow","beef"],"char":"🐂","fitzpatrick_scale":false,"category":"animals_and_nature"},"cow2":{"keywords":["beef","ox","animal","nature","moo","milk"],"char":"🐄","fitzpatrick_scale":false,"category":"animals_and_nature"},"deer":{"keywords":["animal","nature","horns","venison"],"char":"🦌","fitzpatrick_scale":false,"category":"animals_and_nature"},"dromedary_camel":{"keywords":["animal","hot","desert","hump"],"char":"🐪","fitzpatrick_scale":false,"category":"animals_and_nature"},"camel":{"keywords":["animal","nature","hot","desert","hump"],"char":"🐫","fitzpatrick_scale":false,"category":"animals_and_nature"},"giraffe":{"keywords":["animal","nature","spots","safari"],"char":"🦒","fitzpatrick_scale":false,"category":"animals_and_nature"},"elephant":{"keywords":["animal","nature","nose","th","circus"],"char":"🐘","fitzpatrick_scale":false,"category":"animals_and_nature"},"rhinoceros":{"keywords":["animal","nature","horn"],"char":"🦏","fitzpatrick_scale":false,"category":"animals_and_nature"},"goat":{"keywords":["animal","nature"],"char":"🐐","fitzpatrick_scale":false,"category":"animals_and_nature"},"ram":{"keywords":["animal","sheep","nature"],"char":"🐏","fitzpatrick_scale":false,"category":"animals_and_nature"},"sheep":{"keywords":["animal","nature","wool","shipit"],"char":"🐑","fitzpatrick_scale":false,"category":"animals_and_nature"},"racehorse":{"keywords":["animal","gamble","luck"],"char":"🐎","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig2":{"keywords":["animal","nature"],"char":"🐖","fitzpatrick_scale":false,"category":"animals_and_nature"},"rat":{"keywords":["animal","mouse","rodent"],"char":"🐀","fitzpatrick_scale":false,"category":"animals_and_nature"},"mouse2":{"keywords":["animal","nature","rodent"],"char":"🐁","fitzpatrick_scale":false,"category":"animals_and_nature"},"rooster":{"keywords":["animal","nature","chicken"],"char":"🐓","fitzpatrick_scale":false,"category":"animals_and_nature"},"turkey":{"keywords":["animal","bird"],"char":"🦃","fitzpatrick_scale":false,"category":"animals_and_nature"},"dove":{"keywords":["animal","bird"],"char":"🕊","fitzpatrick_scale":false,"category":"animals_and_nature"},"dog2":{"keywords":["animal","nature","friend","doge","pet","faithful"],"char":"🐕","fitzpatrick_scale":false,"category":"animals_and_nature"},"poodle":{"keywords":["dog","animal","101","nature","pet"],"char":"🐩","fitzpatrick_scale":false,"category":"animals_and_nature"},"cat2":{"keywords":["animal","meow","pet","cats"],"char":"🐈","fitzpatrick_scale":false,"category":"animals_and_nature"},"rabbit2":{"keywords":["animal","nature","pet","magic","spring"],"char":"🐇","fitzpatrick_scale":false,"category":"animals_and_nature"},"chipmunk":{"keywords":["animal","nature","rodent","squirrel"],"char":"🐿","fitzpatrick_scale":false,"category":"animals_and_nature"},"hedgehog":{"keywords":["animal","nature","spiny"],"char":"🦔","fitzpatrick_scale":false,"category":"animals_and_nature"},"raccoon":{"keywords":["animal","nature"],"char":"🦝","fitzpatrick_scale":false,"category":"animals_and_nature"},"llama":{"keywords":["animal","nature","alpaca"],"char":"🦙","fitzpatrick_scale":false,"category":"animals_and_nature"},"hippopotamus":{"keywords":["animal","nature"],"char":"🦛","fitzpatrick_scale":false,"category":"animals_and_nature"},"kangaroo":{"keywords":["animal","nature","australia","joey","hop","marsupial"],"char":"🦘","fitzpatrick_scale":false,"category":"animals_and_nature"},"badger":{"keywords":["animal","nature","honey"],"char":"🦡","fitzpatrick_scale":false,"category":"animals_and_nature"},"swan":{"keywords":["animal","nature","bird"],"char":"🦢","fitzpatrick_scale":false,"category":"animals_and_nature"},"peacock":{"keywords":["animal","nature","peahen","bird"],"char":"🦚","fitzpatrick_scale":false,"category":"animals_and_nature"},"parrot":{"keywords":["animal","nature","bird","pirate","talk"],"char":"🦜","fitzpatrick_scale":false,"category":"animals_and_nature"},"lobster":{"keywords":["animal","nature","bisque","claws","seafood"],"char":"🦞","fitzpatrick_scale":false,"category":"animals_and_nature"},"mosquito":{"keywords":["animal","nature","insect","malaria"],"char":"🦟","fitzpatrick_scale":false,"category":"animals_and_nature"},"paw_prints":{"keywords":["animal","tracking","footprints","dog","cat","pet","feet"],"char":"🐾","fitzpatrick_scale":false,"category":"animals_and_nature"},"dragon":{"keywords":["animal","myth","nature","chinese","green"],"char":"🐉","fitzpatrick_scale":false,"category":"animals_and_nature"},"dragon_face":{"keywords":["animal","myth","nature","chinese","green"],"char":"🐲","fitzpatrick_scale":false,"category":"animals_and_nature"},"cactus":{"keywords":["vegetable","plant","nature"],"char":"🌵","fitzpatrick_scale":false,"category":"animals_and_nature"},"christmas_tree":{"keywords":["festival","vacation","december","xmas","celebration"],"char":"🎄","fitzpatrick_scale":false,"category":"animals_and_nature"},"evergreen_tree":{"keywords":["plant","nature"],"char":"🌲","fitzpatrick_scale":false,"category":"animals_and_nature"},"deciduous_tree":{"keywords":["plant","nature"],"char":"🌳","fitzpatrick_scale":false,"category":"animals_and_nature"},"palm_tree":{"keywords":["plant","vegetable","nature","summer","beach","mojito","tropical"],"char":"🌴","fitzpatrick_scale":false,"category":"animals_and_nature"},"seedling":{"keywords":["plant","nature","grass","lawn","spring"],"char":"🌱","fitzpatrick_scale":false,"category":"animals_and_nature"},"herb":{"keywords":["vegetable","plant","medicine","weed","grass","lawn"],"char":"🌿","fitzpatrick_scale":false,"category":"animals_and_nature"},"shamrock":{"keywords":["vegetable","plant","nature","irish","clover"],"char":"☘","fitzpatrick_scale":false,"category":"animals_and_nature"},"four_leaf_clover":{"keywords":["vegetable","plant","nature","lucky","irish"],"char":"🍀","fitzpatrick_scale":false,"category":"animals_and_nature"},"bamboo":{"keywords":["plant","nature","vegetable","panda","pine_decoration"],"char":"🎍","fitzpatrick_scale":false,"category":"animals_and_nature"},"tanabata_tree":{"keywords":["plant","nature","branch","summer"],"char":"🎋","fitzpatrick_scale":false,"category":"animals_and_nature"},"leaves":{"keywords":["nature","plant","tree","vegetable","grass","lawn","spring"],"char":"🍃","fitzpatrick_scale":false,"category":"animals_and_nature"},"fallen_leaf":{"keywords":["nature","plant","vegetable","leaves"],"char":"🍂","fitzpatrick_scale":false,"category":"animals_and_nature"},"maple_leaf":{"keywords":["nature","plant","vegetable","ca","fall"],"char":"🍁","fitzpatrick_scale":false,"category":"animals_and_nature"},"ear_of_rice":{"keywords":["nature","plant"],"char":"🌾","fitzpatrick_scale":false,"category":"animals_and_nature"},"hibiscus":{"keywords":["plant","vegetable","flowers","beach"],"char":"🌺","fitzpatrick_scale":false,"category":"animals_and_nature"},"sunflower":{"keywords":["nature","plant","fall"],"char":"🌻","fitzpatrick_scale":false,"category":"animals_and_nature"},"rose":{"keywords":["flowers","valentines","love","spring"],"char":"🌹","fitzpatrick_scale":false,"category":"animals_and_nature"},"wilted_flower":{"keywords":["plant","nature","flower"],"char":"🥀","fitzpatrick_scale":false,"category":"animals_and_nature"},"tulip":{"keywords":["flowers","plant","nature","summer","spring"],"char":"🌷","fitzpatrick_scale":false,"category":"animals_and_nature"},"blossom":{"keywords":["nature","flowers","yellow"],"char":"🌼","fitzpatrick_scale":false,"category":"animals_and_nature"},"cherry_blossom":{"keywords":["nature","plant","spring","flower"],"char":"🌸","fitzpatrick_scale":false,"category":"animals_and_nature"},"bouquet":{"keywords":["flowers","nature","spring"],"char":"💐","fitzpatrick_scale":false,"category":"animals_and_nature"},"mushroom":{"keywords":["plant","vegetable"],"char":"🍄","fitzpatrick_scale":false,"category":"animals_and_nature"},"chestnut":{"keywords":["food","squirrel"],"char":"🌰","fitzpatrick_scale":false,"category":"animals_and_nature"},"jack_o_lantern":{"keywords":["halloween","light","pumpkin","creepy","fall"],"char":"🎃","fitzpatrick_scale":false,"category":"animals_and_nature"},"shell":{"keywords":["nature","sea","beach"],"char":"🐚","fitzpatrick_scale":false,"category":"animals_and_nature"},"spider_web":{"keywords":["animal","insect","arachnid","silk"],"char":"🕸","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_americas":{"keywords":["globe","world","USA","international"],"char":"🌎","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_africa":{"keywords":["globe","world","international"],"char":"🌍","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_asia":{"keywords":["globe","world","east","international"],"char":"🌏","fitzpatrick_scale":false,"category":"animals_and_nature"},"full_moon":{"keywords":["nature","yellow","twilight","planet","space","night","evening","sleep"],"char":"🌕","fitzpatrick_scale":false,"category":"animals_and_nature"},"waning_gibbous_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],"char":"🌖","fitzpatrick_scale":false,"category":"animals_and_nature"},"last_quarter_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌗","fitzpatrick_scale":false,"category":"animals_and_nature"},"waning_crescent_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌘","fitzpatrick_scale":false,"category":"animals_and_nature"},"new_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌑","fitzpatrick_scale":false,"category":"animals_and_nature"},"waxing_crescent_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌒","fitzpatrick_scale":false,"category":"animals_and_nature"},"first_quarter_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌓","fitzpatrick_scale":false,"category":"animals_and_nature"},"waxing_gibbous_moon":{"keywords":["nature","night","sky","gray","twilight","planet","space","evening","sleep"],"char":"🌔","fitzpatrick_scale":false,"category":"animals_and_nature"},"new_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌚","fitzpatrick_scale":false,"category":"animals_and_nature"},"full_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌝","fitzpatrick_scale":false,"category":"animals_and_nature"},"first_quarter_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌛","fitzpatrick_scale":false,"category":"animals_and_nature"},"last_quarter_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌜","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_with_face":{"keywords":["nature","morning","sky"],"char":"🌞","fitzpatrick_scale":false,"category":"animals_and_nature"},"crescent_moon":{"keywords":["night","sleep","sky","evening","magic"],"char":"🌙","fitzpatrick_scale":false,"category":"animals_and_nature"},"star":{"keywords":["night","yellow"],"char":"⭐","fitzpatrick_scale":false,"category":"animals_and_nature"},"star2":{"keywords":["night","sparkle","awesome","good","magic"],"char":"🌟","fitzpatrick_scale":false,"category":"animals_and_nature"},"dizzy":{"keywords":["star","sparkle","shoot","magic"],"char":"💫","fitzpatrick_scale":false,"category":"animals_and_nature"},"sparkles":{"keywords":["stars","shine","shiny","cool","awesome","good","magic"],"char":"✨","fitzpatrick_scale":false,"category":"animals_and_nature"},"comet":{"keywords":["space"],"char":"☄","fitzpatrick_scale":false,"category":"animals_and_nature"},"sunny":{"keywords":["weather","nature","brightness","summer","beach","spring"],"char":"☀️","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_small_cloud":{"keywords":["weather"],"char":"🌤","fitzpatrick_scale":false,"category":"animals_and_nature"},"partly_sunny":{"keywords":["weather","nature","cloudy","morning","fall","spring"],"char":"⛅","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_large_cloud":{"keywords":["weather"],"char":"🌥","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_rain_cloud":{"keywords":["weather"],"char":"🌦","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud":{"keywords":["weather","sky"],"char":"☁️","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_rain":{"keywords":["weather"],"char":"🌧","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_lightning_and_rain":{"keywords":["weather","lightning"],"char":"⛈","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_lightning":{"keywords":["weather","thunder"],"char":"🌩","fitzpatrick_scale":false,"category":"animals_and_nature"},"zap":{"keywords":["thunder","weather","lightning bolt","fast"],"char":"⚡","fitzpatrick_scale":false,"category":"animals_and_nature"},"fire":{"keywords":["hot","cook","flame"],"char":"🔥","fitzpatrick_scale":false,"category":"animals_and_nature"},"boom":{"keywords":["bomb","explode","explosion","collision","blown"],"char":"💥","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowflake":{"keywords":["winter","season","cold","weather","christmas","xmas"],"char":"❄️","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_snow":{"keywords":["weather"],"char":"🌨","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowman":{"keywords":["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],"char":"⛄","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowman_with_snow":{"keywords":["winter","season","cold","weather","christmas","xmas","frozen"],"char":"☃","fitzpatrick_scale":false,"category":"animals_and_nature"},"wind_face":{"keywords":["gust","air"],"char":"🌬","fitzpatrick_scale":false,"category":"animals_and_nature"},"dash":{"keywords":["wind","air","fast","shoo","fart","smoke","puff"],"char":"💨","fitzpatrick_scale":false,"category":"animals_and_nature"},"tornado":{"keywords":["weather","cyclone","twister"],"char":"🌪","fitzpatrick_scale":false,"category":"animals_and_nature"},"fog":{"keywords":["weather"],"char":"🌫","fitzpatrick_scale":false,"category":"animals_and_nature"},"open_umbrella":{"keywords":["weather","spring"],"char":"☂","fitzpatrick_scale":false,"category":"animals_and_nature"},"umbrella":{"keywords":["rainy","weather","spring"],"char":"☔","fitzpatrick_scale":false,"category":"animals_and_nature"},"droplet":{"keywords":["water","drip","faucet","spring"],"char":"💧","fitzpatrick_scale":false,"category":"animals_and_nature"},"sweat_drops":{"keywords":["water","drip","oops"],"char":"💦","fitzpatrick_scale":false,"category":"animals_and_nature"},"ocean":{"keywords":["sea","water","wave","nature","tsunami","disaster"],"char":"🌊","fitzpatrick_scale":false,"category":"animals_and_nature"},"green_apple":{"keywords":["fruit","nature"],"char":"🍏","fitzpatrick_scale":false,"category":"food_and_drink"},"apple":{"keywords":["fruit","mac","school"],"char":"🍎","fitzpatrick_scale":false,"category":"food_and_drink"},"pear":{"keywords":["fruit","nature","food"],"char":"🍐","fitzpatrick_scale":false,"category":"food_and_drink"},"tangerine":{"keywords":["food","fruit","nature","orange"],"char":"🍊","fitzpatrick_scale":false,"category":"food_and_drink"},"lemon":{"keywords":["fruit","nature"],"char":"🍋","fitzpatrick_scale":false,"category":"food_and_drink"},"banana":{"keywords":["fruit","food","monkey"],"char":"🍌","fitzpatrick_scale":false,"category":"food_and_drink"},"watermelon":{"keywords":["fruit","food","picnic","summer"],"char":"🍉","fitzpatrick_scale":false,"category":"food_and_drink"},"grapes":{"keywords":["fruit","food","wine"],"char":"🍇","fitzpatrick_scale":false,"category":"food_and_drink"},"strawberry":{"keywords":["fruit","food","nature"],"char":"🍓","fitzpatrick_scale":false,"category":"food_and_drink"},"melon":{"keywords":["fruit","nature","food"],"char":"🍈","fitzpatrick_scale":false,"category":"food_and_drink"},"cherries":{"keywords":["food","fruit"],"char":"🍒","fitzpatrick_scale":false,"category":"food_and_drink"},"peach":{"keywords":["fruit","nature","food"],"char":"🍑","fitzpatrick_scale":false,"category":"food_and_drink"},"pineapple":{"keywords":["fruit","nature","food"],"char":"🍍","fitzpatrick_scale":false,"category":"food_and_drink"},"coconut":{"keywords":["fruit","nature","food","palm"],"char":"🥥","fitzpatrick_scale":false,"category":"food_and_drink"},"kiwi_fruit":{"keywords":["fruit","food"],"char":"🥝","fitzpatrick_scale":false,"category":"food_and_drink"},"mango":{"keywords":["fruit","food","tropical"],"char":"🥭","fitzpatrick_scale":false,"category":"food_and_drink"},"avocado":{"keywords":["fruit","food"],"char":"🥑","fitzpatrick_scale":false,"category":"food_and_drink"},"broccoli":{"keywords":["fruit","food","vegetable"],"char":"🥦","fitzpatrick_scale":false,"category":"food_and_drink"},"tomato":{"keywords":["fruit","vegetable","nature","food"],"char":"🍅","fitzpatrick_scale":false,"category":"food_and_drink"},"eggplant":{"keywords":["vegetable","nature","food","aubergine"],"char":"🍆","fitzpatrick_scale":false,"category":"food_and_drink"},"cucumber":{"keywords":["fruit","food","pickle"],"char":"🥒","fitzpatrick_scale":false,"category":"food_and_drink"},"carrot":{"keywords":["vegetable","food","orange"],"char":"🥕","fitzpatrick_scale":false,"category":"food_and_drink"},"hot_pepper":{"keywords":["food","spicy","chilli","chili"],"char":"🌶","fitzpatrick_scale":false,"category":"food_and_drink"},"potato":{"keywords":["food","tuber","vegatable","starch"],"char":"🥔","fitzpatrick_scale":false,"category":"food_and_drink"},"corn":{"keywords":["food","vegetable","plant"],"char":"🌽","fitzpatrick_scale":false,"category":"food_and_drink"},"leafy_greens":{"keywords":["food","vegetable","plant","bok choy","cabbage","kale","lettuce"],"char":"🥬","fitzpatrick_scale":false,"category":"food_and_drink"},"sweet_potato":{"keywords":["food","nature"],"char":"🍠","fitzpatrick_scale":false,"category":"food_and_drink"},"peanuts":{"keywords":["food","nut"],"char":"🥜","fitzpatrick_scale":false,"category":"food_and_drink"},"honey_pot":{"keywords":["bees","sweet","kitchen"],"char":"🍯","fitzpatrick_scale":false,"category":"food_and_drink"},"croissant":{"keywords":["food","bread","french"],"char":"🥐","fitzpatrick_scale":false,"category":"food_and_drink"},"bread":{"keywords":["food","wheat","breakfast","toast"],"char":"🍞","fitzpatrick_scale":false,"category":"food_and_drink"},"baguette_bread":{"keywords":["food","bread","french"],"char":"🥖","fitzpatrick_scale":false,"category":"food_and_drink"},"bagel":{"keywords":["food","bread","bakery","schmear"],"char":"🥯","fitzpatrick_scale":false,"category":"food_and_drink"},"pretzel":{"keywords":["food","bread","twisted"],"char":"🥨","fitzpatrick_scale":false,"category":"food_and_drink"},"cheese":{"keywords":["food","chadder"],"char":"🧀","fitzpatrick_scale":false,"category":"food_and_drink"},"egg":{"keywords":["food","chicken","breakfast"],"char":"🥚","fitzpatrick_scale":false,"category":"food_and_drink"},"bacon":{"keywords":["food","breakfast","pork","pig","meat"],"char":"🥓","fitzpatrick_scale":false,"category":"food_and_drink"},"steak":{"keywords":["food","cow","meat","cut","chop","lambchop","porkchop"],"char":"🥩","fitzpatrick_scale":false,"category":"food_and_drink"},"pancakes":{"keywords":["food","breakfast","flapjacks","hotcakes"],"char":"🥞","fitzpatrick_scale":false,"category":"food_and_drink"},"poultry_leg":{"keywords":["food","meat","drumstick","bird","chicken","turkey"],"char":"🍗","fitzpatrick_scale":false,"category":"food_and_drink"},"meat_on_bone":{"keywords":["good","food","drumstick"],"char":"🍖","fitzpatrick_scale":false,"category":"food_and_drink"},"bone":{"keywords":["skeleton"],"char":"🦴","fitzpatrick_scale":false,"category":"food_and_drink"},"fried_shrimp":{"keywords":["food","animal","appetizer","summer"],"char":"🍤","fitzpatrick_scale":false,"category":"food_and_drink"},"fried_egg":{"keywords":["food","breakfast","kitchen","egg"],"char":"🍳","fitzpatrick_scale":false,"category":"food_and_drink"},"hamburger":{"keywords":["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],"char":"🍔","fitzpatrick_scale":false,"category":"food_and_drink"},"fries":{"keywords":["chips","snack","fast food"],"char":"🍟","fitzpatrick_scale":false,"category":"food_and_drink"},"stuffed_flatbread":{"keywords":["food","flatbread","stuffed","gyro"],"char":"🥙","fitzpatrick_scale":false,"category":"food_and_drink"},"hotdog":{"keywords":["food","frankfurter"],"char":"🌭","fitzpatrick_scale":false,"category":"food_and_drink"},"pizza":{"keywords":["food","party"],"char":"🍕","fitzpatrick_scale":false,"category":"food_and_drink"},"sandwich":{"keywords":["food","lunch","bread"],"char":"🥪","fitzpatrick_scale":false,"category":"food_and_drink"},"canned_food":{"keywords":["food","soup"],"char":"🥫","fitzpatrick_scale":false,"category":"food_and_drink"},"spaghetti":{"keywords":["food","italian","noodle"],"char":"🍝","fitzpatrick_scale":false,"category":"food_and_drink"},"taco":{"keywords":["food","mexican"],"char":"🌮","fitzpatrick_scale":false,"category":"food_and_drink"},"burrito":{"keywords":["food","mexican"],"char":"🌯","fitzpatrick_scale":false,"category":"food_and_drink"},"green_salad":{"keywords":["food","healthy","lettuce"],"char":"🥗","fitzpatrick_scale":false,"category":"food_and_drink"},"shallow_pan_of_food":{"keywords":["food","cooking","casserole","paella"],"char":"🥘","fitzpatrick_scale":false,"category":"food_and_drink"},"ramen":{"keywords":["food","japanese","noodle","chopsticks"],"char":"🍜","fitzpatrick_scale":false,"category":"food_and_drink"},"stew":{"keywords":["food","meat","soup"],"char":"🍲","fitzpatrick_scale":false,"category":"food_and_drink"},"fish_cake":{"keywords":["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],"char":"🍥","fitzpatrick_scale":false,"category":"food_and_drink"},"fortune_cookie":{"keywords":["food","prophecy"],"char":"🥠","fitzpatrick_scale":false,"category":"food_and_drink"},"sushi":{"keywords":["food","fish","japanese","rice"],"char":"🍣","fitzpatrick_scale":false,"category":"food_and_drink"},"bento":{"keywords":["food","japanese","box"],"char":"🍱","fitzpatrick_scale":false,"category":"food_and_drink"},"curry":{"keywords":["food","spicy","hot","indian"],"char":"🍛","fitzpatrick_scale":false,"category":"food_and_drink"},"rice_ball":{"keywords":["food","japanese"],"char":"🍙","fitzpatrick_scale":false,"category":"food_and_drink"},"rice":{"keywords":["food","china","asian"],"char":"🍚","fitzpatrick_scale":false,"category":"food_and_drink"},"rice_cracker":{"keywords":["food","japanese"],"char":"🍘","fitzpatrick_scale":false,"category":"food_and_drink"},"oden":{"keywords":["food","japanese"],"char":"🍢","fitzpatrick_scale":false,"category":"food_and_drink"},"dango":{"keywords":["food","dessert","sweet","japanese","barbecue","meat"],"char":"🍡","fitzpatrick_scale":false,"category":"food_and_drink"},"shaved_ice":{"keywords":["hot","dessert","summer"],"char":"🍧","fitzpatrick_scale":false,"category":"food_and_drink"},"ice_cream":{"keywords":["food","hot","dessert"],"char":"🍨","fitzpatrick_scale":false,"category":"food_and_drink"},"icecream":{"keywords":["food","hot","dessert","summer"],"char":"🍦","fitzpatrick_scale":false,"category":"food_and_drink"},"pie":{"keywords":["food","dessert","pastry"],"char":"🥧","fitzpatrick_scale":false,"category":"food_and_drink"},"cake":{"keywords":["food","dessert"],"char":"🍰","fitzpatrick_scale":false,"category":"food_and_drink"},"cupcake":{"keywords":["food","dessert","bakery","sweet"],"char":"🧁","fitzpatrick_scale":false,"category":"food_and_drink"},"moon_cake":{"keywords":["food","autumn"],"char":"🥮","fitzpatrick_scale":false,"category":"food_and_drink"},"birthday":{"keywords":["food","dessert","cake"],"char":"🎂","fitzpatrick_scale":false,"category":"food_and_drink"},"custard":{"keywords":["dessert","food"],"char":"🍮","fitzpatrick_scale":false,"category":"food_and_drink"},"candy":{"keywords":["snack","dessert","sweet","lolly"],"char":"🍬","fitzpatrick_scale":false,"category":"food_and_drink"},"lollipop":{"keywords":["food","snack","candy","sweet"],"char":"🍭","fitzpatrick_scale":false,"category":"food_and_drink"},"chocolate_bar":{"keywords":["food","snack","dessert","sweet"],"char":"🍫","fitzpatrick_scale":false,"category":"food_and_drink"},"popcorn":{"keywords":["food","movie theater","films","snack"],"char":"🍿","fitzpatrick_scale":false,"category":"food_and_drink"},"dumpling":{"keywords":["food","empanada","pierogi","potsticker"],"char":"🥟","fitzpatrick_scale":false,"category":"food_and_drink"},"doughnut":{"keywords":["food","dessert","snack","sweet","donut"],"char":"🍩","fitzpatrick_scale":false,"category":"food_and_drink"},"cookie":{"keywords":["food","snack","oreo","chocolate","sweet","dessert"],"char":"🍪","fitzpatrick_scale":false,"category":"food_and_drink"},"milk_glass":{"keywords":["beverage","drink","cow"],"char":"🥛","fitzpatrick_scale":false,"category":"food_and_drink"},"beer":{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍺","fitzpatrick_scale":false,"category":"food_and_drink"},"beers":{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍻","fitzpatrick_scale":false,"category":"food_and_drink"},"clinking_glasses":{"keywords":["beverage","drink","party","alcohol","celebrate","cheers","wine","champagne","toast"],"char":"🥂","fitzpatrick_scale":false,"category":"food_and_drink"},"wine_glass":{"keywords":["drink","beverage","drunk","alcohol","booze"],"char":"🍷","fitzpatrick_scale":false,"category":"food_and_drink"},"tumbler_glass":{"keywords":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],"char":"🥃","fitzpatrick_scale":false,"category":"food_and_drink"},"cocktail":{"keywords":["drink","drunk","alcohol","beverage","booze","mojito"],"char":"🍸","fitzpatrick_scale":false,"category":"food_and_drink"},"tropical_drink":{"keywords":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"char":"🍹","fitzpatrick_scale":false,"category":"food_and_drink"},"champagne":{"keywords":["drink","wine","bottle","celebration"],"char":"🍾","fitzpatrick_scale":false,"category":"food_and_drink"},"sake":{"keywords":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"char":"🍶","fitzpatrick_scale":false,"category":"food_and_drink"},"tea":{"keywords":["drink","bowl","breakfast","green","british"],"char":"🍵","fitzpatrick_scale":false,"category":"food_and_drink"},"cup_with_straw":{"keywords":["drink","soda"],"char":"🥤","fitzpatrick_scale":false,"category":"food_and_drink"},"coffee":{"keywords":["beverage","caffeine","latte","espresso"],"char":"☕","fitzpatrick_scale":false,"category":"food_and_drink"},"baby_bottle":{"keywords":["food","container","milk"],"char":"🍼","fitzpatrick_scale":false,"category":"food_and_drink"},"salt":{"keywords":["condiment","shaker"],"char":"🧂","fitzpatrick_scale":false,"category":"food_and_drink"},"spoon":{"keywords":["cutlery","kitchen","tableware"],"char":"🥄","fitzpatrick_scale":false,"category":"food_and_drink"},"fork_and_knife":{"keywords":["cutlery","kitchen"],"char":"🍴","fitzpatrick_scale":false,"category":"food_and_drink"},"plate_with_cutlery":{"keywords":["food","eat","meal","lunch","dinner","restaurant"],"char":"🍽","fitzpatrick_scale":false,"category":"food_and_drink"},"bowl_with_spoon":{"keywords":["food","breakfast","cereal","oatmeal","porridge"],"char":"🥣","fitzpatrick_scale":false,"category":"food_and_drink"},"takeout_box":{"keywords":["food","leftovers"],"char":"🥡","fitzpatrick_scale":false,"category":"food_and_drink"},"chopsticks":{"keywords":["food"],"char":"🥢","fitzpatrick_scale":false,"category":"food_and_drink"},"soccer":{"keywords":["sports","football"],"char":"⚽","fitzpatrick_scale":false,"category":"activity"},"basketball":{"keywords":["sports","balls","NBA"],"char":"🏀","fitzpatrick_scale":false,"category":"activity"},"football":{"keywords":["sports","balls","NFL"],"char":"🏈","fitzpatrick_scale":false,"category":"activity"},"baseball":{"keywords":["sports","balls"],"char":"⚾","fitzpatrick_scale":false,"category":"activity"},"softball":{"keywords":["sports","balls"],"char":"🥎","fitzpatrick_scale":false,"category":"activity"},"tennis":{"keywords":["sports","balls","green"],"char":"🎾","fitzpatrick_scale":false,"category":"activity"},"volleyball":{"keywords":["sports","balls"],"char":"🏐","fitzpatrick_scale":false,"category":"activity"},"rugby_football":{"keywords":["sports","team"],"char":"🏉","fitzpatrick_scale":false,"category":"activity"},"flying_disc":{"keywords":["sports","frisbee","ultimate"],"char":"🥏","fitzpatrick_scale":false,"category":"activity"},"8ball":{"keywords":["pool","hobby","game","luck","magic"],"char":"🎱","fitzpatrick_scale":false,"category":"activity"},"golf":{"keywords":["sports","business","flag","hole","summer"],"char":"⛳","fitzpatrick_scale":false,"category":"activity"},"golfing_woman":{"keywords":["sports","business","woman","female"],"char":"🏌️‍♀️","fitzpatrick_scale":false,"category":"activity"},"golfing_man":{"keywords":["sports","business"],"char":"🏌","fitzpatrick_scale":true,"category":"activity"},"ping_pong":{"keywords":["sports","pingpong"],"char":"🏓","fitzpatrick_scale":false,"category":"activity"},"badminton":{"keywords":["sports"],"char":"🏸","fitzpatrick_scale":false,"category":"activity"},"goal_net":{"keywords":["sports"],"char":"🥅","fitzpatrick_scale":false,"category":"activity"},"ice_hockey":{"keywords":["sports"],"char":"🏒","fitzpatrick_scale":false,"category":"activity"},"field_hockey":{"keywords":["sports"],"char":"🏑","fitzpatrick_scale":false,"category":"activity"},"lacrosse":{"keywords":["sports","ball","stick"],"char":"🥍","fitzpatrick_scale":false,"category":"activity"},"cricket":{"keywords":["sports"],"char":"🏏","fitzpatrick_scale":false,"category":"activity"},"ski":{"keywords":["sports","winter","cold","snow"],"char":"🎿","fitzpatrick_scale":false,"category":"activity"},"skier":{"keywords":["sports","winter","snow"],"char":"⛷","fitzpatrick_scale":false,"category":"activity"},"snowboarder":{"keywords":["sports","winter"],"char":"🏂","fitzpatrick_scale":true,"category":"activity"},"person_fencing":{"keywords":["sports","fencing","sword"],"char":"🤺","fitzpatrick_scale":false,"category":"activity"},"women_wrestling":{"keywords":["sports","wrestlers"],"char":"🤼‍♀️","fitzpatrick_scale":false,"category":"activity"},"men_wrestling":{"keywords":["sports","wrestlers"],"char":"🤼‍♂️","fitzpatrick_scale":false,"category":"activity"},"woman_cartwheeling":{"keywords":["gymnastics"],"char":"🤸‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_cartwheeling":{"keywords":["gymnastics"],"char":"🤸‍♂️","fitzpatrick_scale":true,"category":"activity"},"woman_playing_handball":{"keywords":["sports"],"char":"🤾‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_playing_handball":{"keywords":["sports"],"char":"🤾‍♂️","fitzpatrick_scale":true,"category":"activity"},"ice_skate":{"keywords":["sports"],"char":"⛸","fitzpatrick_scale":false,"category":"activity"},"curling_stone":{"keywords":["sports"],"char":"🥌","fitzpatrick_scale":false,"category":"activity"},"skateboard":{"keywords":["board"],"char":"🛹","fitzpatrick_scale":false,"category":"activity"},"sled":{"keywords":["sleigh","luge","toboggan"],"char":"🛷","fitzpatrick_scale":false,"category":"activity"},"bow_and_arrow":{"keywords":["sports"],"char":"🏹","fitzpatrick_scale":false,"category":"activity"},"fishing_pole_and_fish":{"keywords":["food","hobby","summer"],"char":"🎣","fitzpatrick_scale":false,"category":"activity"},"boxing_glove":{"keywords":["sports","fighting"],"char":"🥊","fitzpatrick_scale":false,"category":"activity"},"martial_arts_uniform":{"keywords":["judo","karate","taekwondo"],"char":"🥋","fitzpatrick_scale":false,"category":"activity"},"rowing_woman":{"keywords":["sports","hobby","water","ship","woman","female"],"char":"🚣‍♀️","fitzpatrick_scale":true,"category":"activity"},"rowing_man":{"keywords":["sports","hobby","water","ship"],"char":"🚣","fitzpatrick_scale":true,"category":"activity"},"climbing_woman":{"keywords":["sports","hobby","woman","female","rock"],"char":"🧗‍♀️","fitzpatrick_scale":true,"category":"activity"},"climbing_man":{"keywords":["sports","hobby","man","male","rock"],"char":"🧗‍♂️","fitzpatrick_scale":true,"category":"activity"},"swimming_woman":{"keywords":["sports","exercise","human","athlete","water","summer","woman","female"],"char":"🏊‍♀️","fitzpatrick_scale":true,"category":"activity"},"swimming_man":{"keywords":["sports","exercise","human","athlete","water","summer"],"char":"🏊","fitzpatrick_scale":true,"category":"activity"},"woman_playing_water_polo":{"keywords":["sports","pool"],"char":"🤽‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_playing_water_polo":{"keywords":["sports","pool"],"char":"🤽‍♂️","fitzpatrick_scale":true,"category":"activity"},"woman_in_lotus_position":{"keywords":["woman","female","meditation","yoga","serenity","zen","mindfulness"],"char":"🧘‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_in_lotus_position":{"keywords":["man","male","meditation","yoga","serenity","zen","mindfulness"],"char":"🧘‍♂️","fitzpatrick_scale":true,"category":"activity"},"surfing_woman":{"keywords":["sports","ocean","sea","summer","beach","woman","female"],"char":"🏄‍♀️","fitzpatrick_scale":true,"category":"activity"},"surfing_man":{"keywords":["sports","ocean","sea","summer","beach"],"char":"🏄","fitzpatrick_scale":true,"category":"activity"},"bath":{"keywords":["clean","shower","bathroom"],"char":"🛀","fitzpatrick_scale":true,"category":"activity"},"basketball_woman":{"keywords":["sports","human","woman","female"],"char":"⛹️‍♀️","fitzpatrick_scale":true,"category":"activity"},"basketball_man":{"keywords":["sports","human"],"char":"⛹","fitzpatrick_scale":true,"category":"activity"},"weight_lifting_woman":{"keywords":["sports","training","exercise","woman","female"],"char":"🏋️‍♀️","fitzpatrick_scale":true,"category":"activity"},"weight_lifting_man":{"keywords":["sports","training","exercise"],"char":"🏋","fitzpatrick_scale":true,"category":"activity"},"biking_woman":{"keywords":["sports","bike","exercise","hipster","woman","female"],"char":"🚴‍♀️","fitzpatrick_scale":true,"category":"activity"},"biking_man":{"keywords":["sports","bike","exercise","hipster"],"char":"🚴","fitzpatrick_scale":true,"category":"activity"},"mountain_biking_woman":{"keywords":["transportation","sports","human","race","bike","woman","female"],"char":"🚵‍♀️","fitzpatrick_scale":true,"category":"activity"},"mountain_biking_man":{"keywords":["transportation","sports","human","race","bike"],"char":"🚵","fitzpatrick_scale":true,"category":"activity"},"horse_racing":{"keywords":["animal","betting","competition","gambling","luck"],"char":"🏇","fitzpatrick_scale":true,"category":"activity"},"business_suit_levitating":{"keywords":["suit","business","levitate","hover","jump"],"char":"🕴","fitzpatrick_scale":true,"category":"activity"},"trophy":{"keywords":["win","award","contest","place","ftw","ceremony"],"char":"🏆","fitzpatrick_scale":false,"category":"activity"},"running_shirt_with_sash":{"keywords":["play","pageant"],"char":"🎽","fitzpatrick_scale":false,"category":"activity"},"medal_sports":{"keywords":["award","winning"],"char":"🏅","fitzpatrick_scale":false,"category":"activity"},"medal_military":{"keywords":["award","winning","army"],"char":"🎖","fitzpatrick_scale":false,"category":"activity"},"1st_place_medal":{"keywords":["award","winning","first"],"char":"🥇","fitzpatrick_scale":false,"category":"activity"},"2nd_place_medal":{"keywords":["award","second"],"char":"🥈","fitzpatrick_scale":false,"category":"activity"},"3rd_place_medal":{"keywords":["award","third"],"char":"🥉","fitzpatrick_scale":false,"category":"activity"},"reminder_ribbon":{"keywords":["sports","cause","support","awareness"],"char":"🎗","fitzpatrick_scale":false,"category":"activity"},"rosette":{"keywords":["flower","decoration","military"],"char":"🏵","fitzpatrick_scale":false,"category":"activity"},"ticket":{"keywords":["event","concert","pass"],"char":"🎫","fitzpatrick_scale":false,"category":"activity"},"tickets":{"keywords":["sports","concert","entrance"],"char":"🎟","fitzpatrick_scale":false,"category":"activity"},"performing_arts":{"keywords":["acting","theater","drama"],"char":"🎭","fitzpatrick_scale":false,"category":"activity"},"art":{"keywords":["design","paint","draw","colors"],"char":"🎨","fitzpatrick_scale":false,"category":"activity"},"circus_tent":{"keywords":["festival","carnival","party"],"char":"🎪","fitzpatrick_scale":false,"category":"activity"},"woman_juggling":{"keywords":["juggle","balance","skill","multitask"],"char":"🤹‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_juggling":{"keywords":["juggle","balance","skill","multitask"],"char":"🤹‍♂️","fitzpatrick_scale":true,"category":"activity"},"microphone":{"keywords":["sound","music","PA","sing","talkshow"],"char":"🎤","fitzpatrick_scale":false,"category":"activity"},"headphones":{"keywords":["music","score","gadgets"],"char":"🎧","fitzpatrick_scale":false,"category":"activity"},"musical_score":{"keywords":["treble","clef","compose"],"char":"🎼","fitzpatrick_scale":false,"category":"activity"},"musical_keyboard":{"keywords":["piano","instrument","compose"],"char":"🎹","fitzpatrick_scale":false,"category":"activity"},"drum":{"keywords":["music","instrument","drumsticks","snare"],"char":"🥁","fitzpatrick_scale":false,"category":"activity"},"saxophone":{"keywords":["music","instrument","jazz","blues"],"char":"🎷","fitzpatrick_scale":false,"category":"activity"},"trumpet":{"keywords":["music","brass"],"char":"🎺","fitzpatrick_scale":false,"category":"activity"},"guitar":{"keywords":["music","instrument"],"char":"🎸","fitzpatrick_scale":false,"category":"activity"},"violin":{"keywords":["music","instrument","orchestra","symphony"],"char":"🎻","fitzpatrick_scale":false,"category":"activity"},"clapper":{"keywords":["movie","film","record"],"char":"🎬","fitzpatrick_scale":false,"category":"activity"},"video_game":{"keywords":["play","console","PS4","controller"],"char":"🎮","fitzpatrick_scale":false,"category":"activity"},"space_invader":{"keywords":["game","arcade","play"],"char":"👾","fitzpatrick_scale":false,"category":"activity"},"dart":{"keywords":["game","play","bar","target","bullseye"],"char":"🎯","fitzpatrick_scale":false,"category":"activity"},"game_die":{"keywords":["dice","random","tabletop","play","luck"],"char":"🎲","fitzpatrick_scale":false,"category":"activity"},"chess_pawn":{"keywords":["expendable"],"char":"♟","fitzpatrick_scale":false,"category":"activity"},"slot_machine":{"keywords":["bet","gamble","vegas","fruit machine","luck","casino"],"char":"🎰","fitzpatrick_scale":false,"category":"activity"},"jigsaw":{"keywords":["interlocking","puzzle","piece"],"char":"🧩","fitzpatrick_scale":false,"category":"activity"},"bowling":{"keywords":["sports","fun","play"],"char":"🎳","fitzpatrick_scale":false,"category":"activity"},"red_car":{"keywords":["red","transportation","vehicle"],"char":"🚗","fitzpatrick_scale":false,"category":"travel_and_places"},"taxi":{"keywords":["uber","vehicle","cars","transportation"],"char":"🚕","fitzpatrick_scale":false,"category":"travel_and_places"},"blue_car":{"keywords":["transportation","vehicle"],"char":"🚙","fitzpatrick_scale":false,"category":"travel_and_places"},"bus":{"keywords":["car","vehicle","transportation"],"char":"🚌","fitzpatrick_scale":false,"category":"travel_and_places"},"trolleybus":{"keywords":["bart","transportation","vehicle"],"char":"🚎","fitzpatrick_scale":false,"category":"travel_and_places"},"racing_car":{"keywords":["sports","race","fast","formula","f1"],"char":"🏎","fitzpatrick_scale":false,"category":"travel_and_places"},"police_car":{"keywords":["vehicle","cars","transportation","law","legal","enforcement"],"char":"🚓","fitzpatrick_scale":false,"category":"travel_and_places"},"ambulance":{"keywords":["health","911","hospital"],"char":"🚑","fitzpatrick_scale":false,"category":"travel_and_places"},"fire_engine":{"keywords":["transportation","cars","vehicle"],"char":"🚒","fitzpatrick_scale":false,"category":"travel_and_places"},"minibus":{"keywords":["vehicle","car","transportation"],"char":"🚐","fitzpatrick_scale":false,"category":"travel_and_places"},"truck":{"keywords":["cars","transportation"],"char":"🚚","fitzpatrick_scale":false,"category":"travel_and_places"},"articulated_lorry":{"keywords":["vehicle","cars","transportation","express"],"char":"🚛","fitzpatrick_scale":false,"category":"travel_and_places"},"tractor":{"keywords":["vehicle","car","farming","agriculture"],"char":"🚜","fitzpatrick_scale":false,"category":"travel_and_places"},"kick_scooter":{"keywords":["vehicle","kick","razor"],"char":"🛴","fitzpatrick_scale":false,"category":"travel_and_places"},"motorcycle":{"keywords":["race","sports","fast"],"char":"🏍","fitzpatrick_scale":false,"category":"travel_and_places"},"bike":{"keywords":["sports","bicycle","exercise","hipster"],"char":"🚲","fitzpatrick_scale":false,"category":"travel_and_places"},"motor_scooter":{"keywords":["vehicle","vespa","sasha"],"char":"🛵","fitzpatrick_scale":false,"category":"travel_and_places"},"rotating_light":{"keywords":["police","ambulance","911","emergency","alert","error","pinged","law","legal"],"char":"🚨","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_police_car":{"keywords":["vehicle","law","legal","enforcement","911"],"char":"🚔","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_bus":{"keywords":["vehicle","transportation"],"char":"🚍","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_automobile":{"keywords":["car","vehicle","transportation"],"char":"🚘","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_taxi":{"keywords":["vehicle","cars","uber"],"char":"🚖","fitzpatrick_scale":false,"category":"travel_and_places"},"aerial_tramway":{"keywords":["transportation","vehicle","ski"],"char":"🚡","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_cableway":{"keywords":["transportation","vehicle","ski"],"char":"🚠","fitzpatrick_scale":false,"category":"travel_and_places"},"suspension_railway":{"keywords":["vehicle","transportation"],"char":"🚟","fitzpatrick_scale":false,"category":"travel_and_places"},"railway_car":{"keywords":["transportation","vehicle"],"char":"🚃","fitzpatrick_scale":false,"category":"travel_and_places"},"train":{"keywords":["transportation","vehicle","carriage","public","travel"],"char":"🚋","fitzpatrick_scale":false,"category":"travel_and_places"},"monorail":{"keywords":["transportation","vehicle"],"char":"🚝","fitzpatrick_scale":false,"category":"travel_and_places"},"bullettrain_side":{"keywords":["transportation","vehicle"],"char":"🚄","fitzpatrick_scale":false,"category":"travel_and_places"},"bullettrain_front":{"keywords":["transportation","vehicle","speed","fast","public","travel"],"char":"🚅","fitzpatrick_scale":false,"category":"travel_and_places"},"light_rail":{"keywords":["transportation","vehicle"],"char":"🚈","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_railway":{"keywords":["transportation","vehicle"],"char":"🚞","fitzpatrick_scale":false,"category":"travel_and_places"},"steam_locomotive":{"keywords":["transportation","vehicle","train"],"char":"🚂","fitzpatrick_scale":false,"category":"travel_and_places"},"train2":{"keywords":["transportation","vehicle"],"char":"🚆","fitzpatrick_scale":false,"category":"travel_and_places"},"metro":{"keywords":["transportation","blue-square","mrt","underground","tube"],"char":"🚇","fitzpatrick_scale":false,"category":"travel_and_places"},"tram":{"keywords":["transportation","vehicle"],"char":"🚊","fitzpatrick_scale":false,"category":"travel_and_places"},"station":{"keywords":["transportation","vehicle","public"],"char":"🚉","fitzpatrick_scale":false,"category":"travel_and_places"},"flying_saucer":{"keywords":["transportation","vehicle","ufo"],"char":"🛸","fitzpatrick_scale":false,"category":"travel_and_places"},"helicopter":{"keywords":["transportation","vehicle","fly"],"char":"🚁","fitzpatrick_scale":false,"category":"travel_and_places"},"small_airplane":{"keywords":["flight","transportation","fly","vehicle"],"char":"🛩","fitzpatrick_scale":false,"category":"travel_and_places"},"airplane":{"keywords":["vehicle","transportation","flight","fly"],"char":"✈️","fitzpatrick_scale":false,"category":"travel_and_places"},"flight_departure":{"keywords":["airport","flight","landing"],"char":"🛫","fitzpatrick_scale":false,"category":"travel_and_places"},"flight_arrival":{"keywords":["airport","flight","boarding"],"char":"🛬","fitzpatrick_scale":false,"category":"travel_and_places"},"sailboat":{"keywords":["ship","summer","transportation","water","sailing"],"char":"⛵","fitzpatrick_scale":false,"category":"travel_and_places"},"motor_boat":{"keywords":["ship"],"char":"🛥","fitzpatrick_scale":false,"category":"travel_and_places"},"speedboat":{"keywords":["ship","transportation","vehicle","summer"],"char":"🚤","fitzpatrick_scale":false,"category":"travel_and_places"},"ferry":{"keywords":["boat","ship","yacht"],"char":"⛴","fitzpatrick_scale":false,"category":"travel_and_places"},"passenger_ship":{"keywords":["yacht","cruise","ferry"],"char":"🛳","fitzpatrick_scale":false,"category":"travel_and_places"},"rocket":{"keywords":["launch","ship","staffmode","NASA","outer space","outer_space","fly"],"char":"🚀","fitzpatrick_scale":false,"category":"travel_and_places"},"artificial_satellite":{"keywords":["communication","gps","orbit","spaceflight","NASA","ISS"],"char":"🛰","fitzpatrick_scale":false,"category":"travel_and_places"},"seat":{"keywords":["sit","airplane","transport","bus","flight","fly"],"char":"💺","fitzpatrick_scale":false,"category":"travel_and_places"},"canoe":{"keywords":["boat","paddle","water","ship"],"char":"🛶","fitzpatrick_scale":false,"category":"travel_and_places"},"anchor":{"keywords":["ship","ferry","sea","boat"],"char":"⚓","fitzpatrick_scale":false,"category":"travel_and_places"},"construction":{"keywords":["wip","progress","caution","warning"],"char":"🚧","fitzpatrick_scale":false,"category":"travel_and_places"},"fuelpump":{"keywords":["gas station","petroleum"],"char":"⛽","fitzpatrick_scale":false,"category":"travel_and_places"},"busstop":{"keywords":["transportation","wait"],"char":"🚏","fitzpatrick_scale":false,"category":"travel_and_places"},"vertical_traffic_light":{"keywords":["transportation","driving"],"char":"🚦","fitzpatrick_scale":false,"category":"travel_and_places"},"traffic_light":{"keywords":["transportation","signal"],"char":"🚥","fitzpatrick_scale":false,"category":"travel_and_places"},"checkered_flag":{"keywords":["contest","finishline","race","gokart"],"char":"🏁","fitzpatrick_scale":false,"category":"travel_and_places"},"ship":{"keywords":["transportation","titanic","deploy"],"char":"🚢","fitzpatrick_scale":false,"category":"travel_and_places"},"ferris_wheel":{"keywords":["photo","carnival","londoneye"],"char":"🎡","fitzpatrick_scale":false,"category":"travel_and_places"},"roller_coaster":{"keywords":["carnival","playground","photo","fun"],"char":"🎢","fitzpatrick_scale":false,"category":"travel_and_places"},"carousel_horse":{"keywords":["photo","carnival"],"char":"🎠","fitzpatrick_scale":false,"category":"travel_and_places"},"building_construction":{"keywords":["wip","working","progress"],"char":"🏗","fitzpatrick_scale":false,"category":"travel_and_places"},"foggy":{"keywords":["photo","mountain"],"char":"🌁","fitzpatrick_scale":false,"category":"travel_and_places"},"tokyo_tower":{"keywords":["photo","japanese"],"char":"🗼","fitzpatrick_scale":false,"category":"travel_and_places"},"factory":{"keywords":["building","industry","pollution","smoke"],"char":"🏭","fitzpatrick_scale":false,"category":"travel_and_places"},"fountain":{"keywords":["photo","summer","water","fresh"],"char":"⛲","fitzpatrick_scale":false,"category":"travel_and_places"},"rice_scene":{"keywords":["photo","japan","asia","tsukimi"],"char":"🎑","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain":{"keywords":["photo","nature","environment"],"char":"⛰","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_snow":{"keywords":["photo","nature","environment","winter","cold"],"char":"🏔","fitzpatrick_scale":false,"category":"travel_and_places"},"mount_fuji":{"keywords":["photo","mountain","nature","japanese"],"char":"🗻","fitzpatrick_scale":false,"category":"travel_and_places"},"volcano":{"keywords":["photo","nature","disaster"],"char":"🌋","fitzpatrick_scale":false,"category":"travel_and_places"},"japan":{"keywords":["nation","country","japanese","asia"],"char":"🗾","fitzpatrick_scale":false,"category":"travel_and_places"},"camping":{"keywords":["photo","outdoors","tent"],"char":"🏕","fitzpatrick_scale":false,"category":"travel_and_places"},"tent":{"keywords":["photo","camping","outdoors"],"char":"⛺","fitzpatrick_scale":false,"category":"travel_and_places"},"national_park":{"keywords":["photo","environment","nature"],"char":"🏞","fitzpatrick_scale":false,"category":"travel_and_places"},"motorway":{"keywords":["road","cupertino","interstate","highway"],"char":"🛣","fitzpatrick_scale":false,"category":"travel_and_places"},"railway_track":{"keywords":["train","transportation"],"char":"🛤","fitzpatrick_scale":false,"category":"travel_and_places"},"sunrise":{"keywords":["morning","view","vacation","photo"],"char":"🌅","fitzpatrick_scale":false,"category":"travel_and_places"},"sunrise_over_mountains":{"keywords":["view","vacation","photo"],"char":"🌄","fitzpatrick_scale":false,"category":"travel_and_places"},"desert":{"keywords":["photo","warm","saharah"],"char":"🏜","fitzpatrick_scale":false,"category":"travel_and_places"},"beach_umbrella":{"keywords":["weather","summer","sunny","sand","mojito"],"char":"🏖","fitzpatrick_scale":false,"category":"travel_and_places"},"desert_island":{"keywords":["photo","tropical","mojito"],"char":"🏝","fitzpatrick_scale":false,"category":"travel_and_places"},"city_sunrise":{"keywords":["photo","good morning","dawn"],"char":"🌇","fitzpatrick_scale":false,"category":"travel_and_places"},"city_sunset":{"keywords":["photo","evening","sky","buildings"],"char":"🌆","fitzpatrick_scale":false,"category":"travel_and_places"},"cityscape":{"keywords":["photo","night life","urban"],"char":"🏙","fitzpatrick_scale":false,"category":"travel_and_places"},"night_with_stars":{"keywords":["evening","city","downtown"],"char":"🌃","fitzpatrick_scale":false,"category":"travel_and_places"},"bridge_at_night":{"keywords":["photo","sanfrancisco"],"char":"🌉","fitzpatrick_scale":false,"category":"travel_and_places"},"milky_way":{"keywords":["photo","space","stars"],"char":"🌌","fitzpatrick_scale":false,"category":"travel_and_places"},"stars":{"keywords":["night","photo"],"char":"🌠","fitzpatrick_scale":false,"category":"travel_and_places"},"sparkler":{"keywords":["stars","night","shine"],"char":"🎇","fitzpatrick_scale":false,"category":"travel_and_places"},"fireworks":{"keywords":["photo","festival","carnival","congratulations"],"char":"🎆","fitzpatrick_scale":false,"category":"travel_and_places"},"rainbow":{"keywords":["nature","happy","unicorn_face","photo","sky","spring"],"char":"🌈","fitzpatrick_scale":false,"category":"travel_and_places"},"houses":{"keywords":["buildings","photo"],"char":"🏘","fitzpatrick_scale":false,"category":"travel_and_places"},"european_castle":{"keywords":["building","royalty","history"],"char":"🏰","fitzpatrick_scale":false,"category":"travel_and_places"},"japanese_castle":{"keywords":["photo","building"],"char":"🏯","fitzpatrick_scale":false,"category":"travel_and_places"},"stadium":{"keywords":["photo","place","sports","concert","venue"],"char":"🏟","fitzpatrick_scale":false,"category":"travel_and_places"},"statue_of_liberty":{"keywords":["american","newyork"],"char":"🗽","fitzpatrick_scale":false,"category":"travel_and_places"},"house":{"keywords":["building","home"],"char":"🏠","fitzpatrick_scale":false,"category":"travel_and_places"},"house_with_garden":{"keywords":["home","plant","nature"],"char":"🏡","fitzpatrick_scale":false,"category":"travel_and_places"},"derelict_house":{"keywords":["abandon","evict","broken","building"],"char":"🏚","fitzpatrick_scale":false,"category":"travel_and_places"},"office":{"keywords":["building","bureau","work"],"char":"🏢","fitzpatrick_scale":false,"category":"travel_and_places"},"department_store":{"keywords":["building","shopping","mall"],"char":"🏬","fitzpatrick_scale":false,"category":"travel_and_places"},"post_office":{"keywords":["building","envelope","communication"],"char":"🏣","fitzpatrick_scale":false,"category":"travel_and_places"},"european_post_office":{"keywords":["building","email"],"char":"🏤","fitzpatrick_scale":false,"category":"travel_and_places"},"hospital":{"keywords":["building","health","surgery","doctor"],"char":"🏥","fitzpatrick_scale":false,"category":"travel_and_places"},"bank":{"keywords":["building","money","sales","cash","business","enterprise"],"char":"🏦","fitzpatrick_scale":false,"category":"travel_and_places"},"hotel":{"keywords":["building","accomodation","checkin"],"char":"🏨","fitzpatrick_scale":false,"category":"travel_and_places"},"convenience_store":{"keywords":["building","shopping","groceries"],"char":"🏪","fitzpatrick_scale":false,"category":"travel_and_places"},"school":{"keywords":["building","student","education","learn","teach"],"char":"🏫","fitzpatrick_scale":false,"category":"travel_and_places"},"love_hotel":{"keywords":["like","affection","dating"],"char":"🏩","fitzpatrick_scale":false,"category":"travel_and_places"},"wedding":{"keywords":["love","like","affection","couple","marriage","bride","groom"],"char":"💒","fitzpatrick_scale":false,"category":"travel_and_places"},"classical_building":{"keywords":["art","culture","history"],"char":"🏛","fitzpatrick_scale":false,"category":"travel_and_places"},"church":{"keywords":["building","religion","christ"],"char":"⛪","fitzpatrick_scale":false,"category":"travel_and_places"},"mosque":{"keywords":["islam","worship","minaret"],"char":"🕌","fitzpatrick_scale":false,"category":"travel_and_places"},"synagogue":{"keywords":["judaism","worship","temple","jewish"],"char":"🕍","fitzpatrick_scale":false,"category":"travel_and_places"},"kaaba":{"keywords":["mecca","mosque","islam"],"char":"🕋","fitzpatrick_scale":false,"category":"travel_and_places"},"shinto_shrine":{"keywords":["temple","japan","kyoto"],"char":"⛩","fitzpatrick_scale":false,"category":"travel_and_places"},"watch":{"keywords":["time","accessories"],"char":"⌚","fitzpatrick_scale":false,"category":"objects"},"iphone":{"keywords":["technology","apple","gadgets","dial"],"char":"📱","fitzpatrick_scale":false,"category":"objects"},"calling":{"keywords":["iphone","incoming"],"char":"📲","fitzpatrick_scale":false,"category":"objects"},"computer":{"keywords":["technology","laptop","screen","display","monitor"],"char":"💻","fitzpatrick_scale":false,"category":"objects"},"keyboard":{"keywords":["technology","computer","type","input","text"],"char":"⌨","fitzpatrick_scale":false,"category":"objects"},"desktop_computer":{"keywords":["technology","computing","screen"],"char":"🖥","fitzpatrick_scale":false,"category":"objects"},"printer":{"keywords":["paper","ink"],"char":"🖨","fitzpatrick_scale":false,"category":"objects"},"computer_mouse":{"keywords":["click"],"char":"🖱","fitzpatrick_scale":false,"category":"objects"},"trackball":{"keywords":["technology","trackpad"],"char":"🖲","fitzpatrick_scale":false,"category":"objects"},"joystick":{"keywords":["game","play"],"char":"🕹","fitzpatrick_scale":false,"category":"objects"},"clamp":{"keywords":["tool"],"char":"🗜","fitzpatrick_scale":false,"category":"objects"},"minidisc":{"keywords":["technology","record","data","disk","90s"],"char":"💽","fitzpatrick_scale":false,"category":"objects"},"floppy_disk":{"keywords":["oldschool","technology","save","90s","80s"],"char":"💾","fitzpatrick_scale":false,"category":"objects"},"cd":{"keywords":["technology","dvd","disk","disc","90s"],"char":"💿","fitzpatrick_scale":false,"category":"objects"},"dvd":{"keywords":["cd","disk","disc"],"char":"📀","fitzpatrick_scale":false,"category":"objects"},"vhs":{"keywords":["record","video","oldschool","90s","80s"],"char":"📼","fitzpatrick_scale":false,"category":"objects"},"camera":{"keywords":["gadgets","photography"],"char":"📷","fitzpatrick_scale":false,"category":"objects"},"camera_flash":{"keywords":["photography","gadgets"],"char":"📸","fitzpatrick_scale":false,"category":"objects"},"video_camera":{"keywords":["film","record"],"char":"📹","fitzpatrick_scale":false,"category":"objects"},"movie_camera":{"keywords":["film","record"],"char":"🎥","fitzpatrick_scale":false,"category":"objects"},"film_projector":{"keywords":["video","tape","record","movie"],"char":"📽","fitzpatrick_scale":false,"category":"objects"},"film_strip":{"keywords":["movie"],"char":"🎞","fitzpatrick_scale":false,"category":"objects"},"telephone_receiver":{"keywords":["technology","communication","dial"],"char":"📞","fitzpatrick_scale":false,"category":"objects"},"phone":{"keywords":["technology","communication","dial","telephone"],"char":"☎️","fitzpatrick_scale":false,"category":"objects"},"pager":{"keywords":["bbcall","oldschool","90s"],"char":"📟","fitzpatrick_scale":false,"category":"objects"},"fax":{"keywords":["communication","technology"],"char":"📠","fitzpatrick_scale":false,"category":"objects"},"tv":{"keywords":["technology","program","oldschool","show","television"],"char":"📺","fitzpatrick_scale":false,"category":"objects"},"radio":{"keywords":["communication","music","podcast","program"],"char":"📻","fitzpatrick_scale":false,"category":"objects"},"studio_microphone":{"keywords":["sing","recording","artist","talkshow"],"char":"🎙","fitzpatrick_scale":false,"category":"objects"},"level_slider":{"keywords":["scale"],"char":"🎚","fitzpatrick_scale":false,"category":"objects"},"control_knobs":{"keywords":["dial"],"char":"🎛","fitzpatrick_scale":false,"category":"objects"},"compass":{"keywords":["magnetic","navigation","orienteering"],"char":"🧭","fitzpatrick_scale":false,"category":"objects"},"stopwatch":{"keywords":["time","deadline"],"char":"⏱","fitzpatrick_scale":false,"category":"objects"},"timer_clock":{"keywords":["alarm"],"char":"⏲","fitzpatrick_scale":false,"category":"objects"},"alarm_clock":{"keywords":["time","wake"],"char":"⏰","fitzpatrick_scale":false,"category":"objects"},"mantelpiece_clock":{"keywords":["time"],"char":"🕰","fitzpatrick_scale":false,"category":"objects"},"hourglass_flowing_sand":{"keywords":["oldschool","time","countdown"],"char":"⏳","fitzpatrick_scale":false,"category":"objects"},"hourglass":{"keywords":["time","clock","oldschool","limit","exam","quiz","test"],"char":"⌛","fitzpatrick_scale":false,"category":"objects"},"satellite":{"keywords":["communication","future","radio","space"],"char":"📡","fitzpatrick_scale":false,"category":"objects"},"battery":{"keywords":["power","energy","sustain"],"char":"🔋","fitzpatrick_scale":false,"category":"objects"},"electric_plug":{"keywords":["charger","power"],"char":"🔌","fitzpatrick_scale":false,"category":"objects"},"bulb":{"keywords":["light","electricity","idea"],"char":"💡","fitzpatrick_scale":false,"category":"objects"},"flashlight":{"keywords":["dark","camping","sight","night"],"char":"🔦","fitzpatrick_scale":false,"category":"objects"},"candle":{"keywords":["fire","wax"],"char":"🕯","fitzpatrick_scale":false,"category":"objects"},"fire_extinguisher":{"keywords":["quench"],"char":"🧯","fitzpatrick_scale":false,"category":"objects"},"wastebasket":{"keywords":["bin","trash","rubbish","garbage","toss"],"char":"🗑","fitzpatrick_scale":false,"category":"objects"},"oil_drum":{"keywords":["barrell"],"char":"🛢","fitzpatrick_scale":false,"category":"objects"},"money_with_wings":{"keywords":["dollar","bills","payment","sale"],"char":"💸","fitzpatrick_scale":false,"category":"objects"},"dollar":{"keywords":["money","sales","bill","currency"],"char":"💵","fitzpatrick_scale":false,"category":"objects"},"yen":{"keywords":["money","sales","japanese","dollar","currency"],"char":"💴","fitzpatrick_scale":false,"category":"objects"},"euro":{"keywords":["money","sales","dollar","currency"],"char":"💶","fitzpatrick_scale":false,"category":"objects"},"pound":{"keywords":["british","sterling","money","sales","bills","uk","england","currency"],"char":"💷","fitzpatrick_scale":false,"category":"objects"},"moneybag":{"keywords":["dollar","payment","coins","sale"],"char":"💰","fitzpatrick_scale":false,"category":"objects"},"credit_card":{"keywords":["money","sales","dollar","bill","payment","shopping"],"char":"💳","fitzpatrick_scale":false,"category":"objects"},"gem":{"keywords":["blue","ruby","diamond","jewelry"],"char":"💎","fitzpatrick_scale":false,"category":"objects"},"balance_scale":{"keywords":["law","fairness","weight"],"char":"⚖","fitzpatrick_scale":false,"category":"objects"},"toolbox":{"keywords":["tools","diy","fix","maintainer","mechanic"],"char":"🧰","fitzpatrick_scale":false,"category":"objects"},"wrench":{"keywords":["tools","diy","ikea","fix","maintainer"],"char":"🔧","fitzpatrick_scale":false,"category":"objects"},"hammer":{"keywords":["tools","build","create"],"char":"🔨","fitzpatrick_scale":false,"category":"objects"},"hammer_and_pick":{"keywords":["tools","build","create"],"char":"⚒","fitzpatrick_scale":false,"category":"objects"},"hammer_and_wrench":{"keywords":["tools","build","create"],"char":"🛠","fitzpatrick_scale":false,"category":"objects"},"pick":{"keywords":["tools","dig"],"char":"⛏","fitzpatrick_scale":false,"category":"objects"},"nut_and_bolt":{"keywords":["handy","tools","fix"],"char":"🔩","fitzpatrick_scale":false,"category":"objects"},"gear":{"keywords":["cog"],"char":"⚙","fitzpatrick_scale":false,"category":"objects"},"brick":{"keywords":["bricks"],"char":"🧱","fitzpatrick_scale":false,"category":"objects"},"chains":{"keywords":["lock","arrest"],"char":"⛓","fitzpatrick_scale":false,"category":"objects"},"magnet":{"keywords":["attraction","magnetic"],"char":"🧲","fitzpatrick_scale":false,"category":"objects"},"gun":{"keywords":["violence","weapon","pistol","revolver"],"char":"🔫","fitzpatrick_scale":false,"category":"objects"},"bomb":{"keywords":["boom","explode","explosion","terrorism"],"char":"💣","fitzpatrick_scale":false,"category":"objects"},"firecracker":{"keywords":["dynamite","boom","explode","explosion","explosive"],"char":"🧨","fitzpatrick_scale":false,"category":"objects"},"hocho":{"keywords":["knife","blade","cutlery","kitchen","weapon"],"char":"🔪","fitzpatrick_scale":false,"category":"objects"},"dagger":{"keywords":["weapon"],"char":"🗡","fitzpatrick_scale":false,"category":"objects"},"crossed_swords":{"keywords":["weapon"],"char":"⚔","fitzpatrick_scale":false,"category":"objects"},"shield":{"keywords":["protection","security"],"char":"🛡","fitzpatrick_scale":false,"category":"objects"},"smoking":{"keywords":["kills","tobacco","cigarette","joint","smoke"],"char":"🚬","fitzpatrick_scale":false,"category":"objects"},"skull_and_crossbones":{"keywords":["poison","danger","deadly","scary","death","pirate","evil"],"char":"☠","fitzpatrick_scale":false,"category":"objects"},"coffin":{"keywords":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"char":"⚰","fitzpatrick_scale":false,"category":"objects"},"funeral_urn":{"keywords":["dead","die","death","rip","ashes"],"char":"⚱","fitzpatrick_scale":false,"category":"objects"},"amphora":{"keywords":["vase","jar"],"char":"🏺","fitzpatrick_scale":false,"category":"objects"},"crystal_ball":{"keywords":["disco","party","magic","circus","fortune_teller"],"char":"🔮","fitzpatrick_scale":false,"category":"objects"},"prayer_beads":{"keywords":["dhikr","religious"],"char":"📿","fitzpatrick_scale":false,"category":"objects"},"nazar_amulet":{"keywords":["bead","charm"],"char":"🧿","fitzpatrick_scale":false,"category":"objects"},"barber":{"keywords":["hair","salon","style"],"char":"💈","fitzpatrick_scale":false,"category":"objects"},"alembic":{"keywords":["distilling","science","experiment","chemistry"],"char":"⚗","fitzpatrick_scale":false,"category":"objects"},"telescope":{"keywords":["stars","space","zoom","science","astronomy"],"char":"🔭","fitzpatrick_scale":false,"category":"objects"},"microscope":{"keywords":["laboratory","experiment","zoomin","science","study"],"char":"🔬","fitzpatrick_scale":false,"category":"objects"},"hole":{"keywords":["embarrassing"],"char":"🕳","fitzpatrick_scale":false,"category":"objects"},"pill":{"keywords":["health","medicine","doctor","pharmacy","drug"],"char":"💊","fitzpatrick_scale":false,"category":"objects"},"syringe":{"keywords":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"char":"💉","fitzpatrick_scale":false,"category":"objects"},"dna":{"keywords":["biologist","genetics","life"],"char":"🧬","fitzpatrick_scale":false,"category":"objects"},"microbe":{"keywords":["amoeba","bacteria","germs"],"char":"🦠","fitzpatrick_scale":false,"category":"objects"},"petri_dish":{"keywords":["bacteria","biology","culture","lab"],"char":"🧫","fitzpatrick_scale":false,"category":"objects"},"test_tube":{"keywords":["chemistry","experiment","lab","science"],"char":"🧪","fitzpatrick_scale":false,"category":"objects"},"thermometer":{"keywords":["weather","temperature","hot","cold"],"char":"🌡","fitzpatrick_scale":false,"category":"objects"},"broom":{"keywords":["cleaning","sweeping","witch"],"char":"🧹","fitzpatrick_scale":false,"category":"objects"},"basket":{"keywords":["laundry"],"char":"🧺","fitzpatrick_scale":false,"category":"objects"},"toilet_paper":{"keywords":["roll"],"char":"🧻","fitzpatrick_scale":false,"category":"objects"},"label":{"keywords":["sale","tag"],"char":"🏷","fitzpatrick_scale":false,"category":"objects"},"bookmark":{"keywords":["favorite","label","save"],"char":"🔖","fitzpatrick_scale":false,"category":"objects"},"toilet":{"keywords":["restroom","wc","washroom","bathroom","potty"],"char":"🚽","fitzpatrick_scale":false,"category":"objects"},"shower":{"keywords":["clean","water","bathroom"],"char":"🚿","fitzpatrick_scale":false,"category":"objects"},"bathtub":{"keywords":["clean","shower","bathroom"],"char":"🛁","fitzpatrick_scale":false,"category":"objects"},"soap":{"keywords":["bar","bathing","cleaning","lather"],"char":"🧼","fitzpatrick_scale":false,"category":"objects"},"sponge":{"keywords":["absorbing","cleaning","porous"],"char":"🧽","fitzpatrick_scale":false,"category":"objects"},"lotion_bottle":{"keywords":["moisturizer","sunscreen"],"char":"🧴","fitzpatrick_scale":false,"category":"objects"},"key":{"keywords":["lock","door","password"],"char":"🔑","fitzpatrick_scale":false,"category":"objects"},"old_key":{"keywords":["lock","door","password"],"char":"🗝","fitzpatrick_scale":false,"category":"objects"},"couch_and_lamp":{"keywords":["read","chill"],"char":"🛋","fitzpatrick_scale":false,"category":"objects"},"sleeping_bed":{"keywords":["bed","rest"],"char":"🛌","fitzpatrick_scale":true,"category":"objects"},"bed":{"keywords":["sleep","rest"],"char":"🛏","fitzpatrick_scale":false,"category":"objects"},"door":{"keywords":["house","entry","exit"],"char":"🚪","fitzpatrick_scale":false,"category":"objects"},"bellhop_bell":{"keywords":["service"],"char":"🛎","fitzpatrick_scale":false,"category":"objects"},"teddy_bear":{"keywords":["plush","stuffed"],"char":"🧸","fitzpatrick_scale":false,"category":"objects"},"framed_picture":{"keywords":["photography"],"char":"🖼","fitzpatrick_scale":false,"category":"objects"},"world_map":{"keywords":["location","direction"],"char":"🗺","fitzpatrick_scale":false,"category":"objects"},"parasol_on_ground":{"keywords":["weather","summer"],"char":"⛱","fitzpatrick_scale":false,"category":"objects"},"moyai":{"keywords":["rock","easter island","moai"],"char":"🗿","fitzpatrick_scale":false,"category":"objects"},"shopping":{"keywords":["mall","buy","purchase"],"char":"🛍","fitzpatrick_scale":false,"category":"objects"},"shopping_cart":{"keywords":["trolley"],"char":"🛒","fitzpatrick_scale":false,"category":"objects"},"balloon":{"keywords":["party","celebration","birthday","circus"],"char":"🎈","fitzpatrick_scale":false,"category":"objects"},"flags":{"keywords":["fish","japanese","koinobori","carp","banner"],"char":"🎏","fitzpatrick_scale":false,"category":"objects"},"ribbon":{"keywords":["decoration","pink","girl","bowtie"],"char":"🎀","fitzpatrick_scale":false,"category":"objects"},"gift":{"keywords":["present","birthday","christmas","xmas"],"char":"🎁","fitzpatrick_scale":false,"category":"objects"},"confetti_ball":{"keywords":["festival","party","birthday","circus"],"char":"🎊","fitzpatrick_scale":false,"category":"objects"},"tada":{"keywords":["party","congratulations","birthday","magic","circus","celebration"],"char":"🎉","fitzpatrick_scale":false,"category":"objects"},"dolls":{"keywords":["japanese","toy","kimono"],"char":"🎎","fitzpatrick_scale":false,"category":"objects"},"wind_chime":{"keywords":["nature","ding","spring","bell"],"char":"🎐","fitzpatrick_scale":false,"category":"objects"},"crossed_flags":{"keywords":["japanese","nation","country","border"],"char":"🎌","fitzpatrick_scale":false,"category":"objects"},"izakaya_lantern":{"keywords":["light","paper","halloween","spooky"],"char":"🏮","fitzpatrick_scale":false,"category":"objects"},"red_envelope":{"keywords":["gift"],"char":"🧧","fitzpatrick_scale":false,"category":"objects"},"email":{"keywords":["letter","postal","inbox","communication"],"char":"✉️","fitzpatrick_scale":false,"category":"objects"},"envelope_with_arrow":{"keywords":["email","communication"],"char":"📩","fitzpatrick_scale":false,"category":"objects"},"incoming_envelope":{"keywords":["email","inbox"],"char":"📨","fitzpatrick_scale":false,"category":"objects"},"e-mail":{"keywords":["communication","inbox"],"char":"📧","fitzpatrick_scale":false,"category":"objects"},"love_letter":{"keywords":["email","like","affection","envelope","valentines"],"char":"💌","fitzpatrick_scale":false,"category":"objects"},"postbox":{"keywords":["email","letter","envelope"],"char":"📮","fitzpatrick_scale":false,"category":"objects"},"mailbox_closed":{"keywords":["email","communication","inbox"],"char":"📪","fitzpatrick_scale":false,"category":"objects"},"mailbox":{"keywords":["email","inbox","communication"],"char":"📫","fitzpatrick_scale":false,"category":"objects"},"mailbox_with_mail":{"keywords":["email","inbox","communication"],"char":"📬","fitzpatrick_scale":false,"category":"objects"},"mailbox_with_no_mail":{"keywords":["email","inbox"],"char":"📭","fitzpatrick_scale":false,"category":"objects"},"package":{"keywords":["mail","gift","cardboard","box","moving"],"char":"📦","fitzpatrick_scale":false,"category":"objects"},"postal_horn":{"keywords":["instrument","music"],"char":"📯","fitzpatrick_scale":false,"category":"objects"},"inbox_tray":{"keywords":["email","documents"],"char":"📥","fitzpatrick_scale":false,"category":"objects"},"outbox_tray":{"keywords":["inbox","email"],"char":"📤","fitzpatrick_scale":false,"category":"objects"},"scroll":{"keywords":["documents","ancient","history","paper"],"char":"📜","fitzpatrick_scale":false,"category":"objects"},"page_with_curl":{"keywords":["documents","office","paper"],"char":"📃","fitzpatrick_scale":false,"category":"objects"},"bookmark_tabs":{"keywords":["favorite","save","order","tidy"],"char":"📑","fitzpatrick_scale":false,"category":"objects"},"receipt":{"keywords":["accounting","expenses"],"char":"🧾","fitzpatrick_scale":false,"category":"objects"},"bar_chart":{"keywords":["graph","presentation","stats"],"char":"📊","fitzpatrick_scale":false,"category":"objects"},"chart_with_upwards_trend":{"keywords":["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"char":"📈","fitzpatrick_scale":false,"category":"objects"},"chart_with_downwards_trend":{"keywords":["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"char":"📉","fitzpatrick_scale":false,"category":"objects"},"page_facing_up":{"keywords":["documents","office","paper","information"],"char":"📄","fitzpatrick_scale":false,"category":"objects"},"date":{"keywords":["calendar","schedule"],"char":"📅","fitzpatrick_scale":false,"category":"objects"},"calendar":{"keywords":["schedule","date","planning"],"char":"📆","fitzpatrick_scale":false,"category":"objects"},"spiral_calendar":{"keywords":["date","schedule","planning"],"char":"🗓","fitzpatrick_scale":false,"category":"objects"},"card_index":{"keywords":["business","stationery"],"char":"📇","fitzpatrick_scale":false,"category":"objects"},"card_file_box":{"keywords":["business","stationery"],"char":"🗃","fitzpatrick_scale":false,"category":"objects"},"ballot_box":{"keywords":["election","vote"],"char":"🗳","fitzpatrick_scale":false,"category":"objects"},"file_cabinet":{"keywords":["filing","organizing"],"char":"🗄","fitzpatrick_scale":false,"category":"objects"},"clipboard":{"keywords":["stationery","documents"],"char":"📋","fitzpatrick_scale":false,"category":"objects"},"spiral_notepad":{"keywords":["memo","stationery"],"char":"🗒","fitzpatrick_scale":false,"category":"objects"},"file_folder":{"keywords":["documents","business","office"],"char":"📁","fitzpatrick_scale":false,"category":"objects"},"open_file_folder":{"keywords":["documents","load"],"char":"📂","fitzpatrick_scale":false,"category":"objects"},"card_index_dividers":{"keywords":["organizing","business","stationery"],"char":"🗂","fitzpatrick_scale":false,"category":"objects"},"newspaper_roll":{"keywords":["press","headline"],"char":"🗞","fitzpatrick_scale":false,"category":"objects"},"newspaper":{"keywords":["press","headline"],"char":"📰","fitzpatrick_scale":false,"category":"objects"},"notebook":{"keywords":["stationery","record","notes","paper","study"],"char":"📓","fitzpatrick_scale":false,"category":"objects"},"closed_book":{"keywords":["read","library","knowledge","textbook","learn"],"char":"📕","fitzpatrick_scale":false,"category":"objects"},"green_book":{"keywords":["read","library","knowledge","study"],"char":"📗","fitzpatrick_scale":false,"category":"objects"},"blue_book":{"keywords":["read","library","knowledge","learn","study"],"char":"📘","fitzpatrick_scale":false,"category":"objects"},"orange_book":{"keywords":["read","library","knowledge","textbook","study"],"char":"📙","fitzpatrick_scale":false,"category":"objects"},"notebook_with_decorative_cover":{"keywords":["classroom","notes","record","paper","study"],"char":"📔","fitzpatrick_scale":false,"category":"objects"},"ledger":{"keywords":["notes","paper"],"char":"📒","fitzpatrick_scale":false,"category":"objects"},"books":{"keywords":["literature","library","study"],"char":"📚","fitzpatrick_scale":false,"category":"objects"},"open_book":{"keywords":["book","read","library","knowledge","literature","learn","study"],"char":"📖","fitzpatrick_scale":false,"category":"objects"},"safety_pin":{"keywords":["diaper"],"char":"🧷","fitzpatrick_scale":false,"category":"objects"},"link":{"keywords":["rings","url"],"char":"🔗","fitzpatrick_scale":false,"category":"objects"},"paperclip":{"keywords":["documents","stationery"],"char":"📎","fitzpatrick_scale":false,"category":"objects"},"paperclips":{"keywords":["documents","stationery"],"char":"🖇","fitzpatrick_scale":false,"category":"objects"},"scissors":{"keywords":["stationery","cut"],"char":"✂️","fitzpatrick_scale":false,"category":"objects"},"triangular_ruler":{"keywords":["stationery","math","architect","sketch"],"char":"📐","fitzpatrick_scale":false,"category":"objects"},"straight_ruler":{"keywords":["stationery","calculate","length","math","school","drawing","architect","sketch"],"char":"📏","fitzpatrick_scale":false,"category":"objects"},"abacus":{"keywords":["calculation"],"char":"🧮","fitzpatrick_scale":false,"category":"objects"},"pushpin":{"keywords":["stationery","mark","here"],"char":"📌","fitzpatrick_scale":false,"category":"objects"},"round_pushpin":{"keywords":["stationery","location","map","here"],"char":"📍","fitzpatrick_scale":false,"category":"objects"},"triangular_flag_on_post":{"keywords":["mark","milestone","place"],"char":"🚩","fitzpatrick_scale":false,"category":"objects"},"white_flag":{"keywords":["losing","loser","lost","surrender","give up","fail"],"char":"🏳","fitzpatrick_scale":false,"category":"objects"},"black_flag":{"keywords":["pirate"],"char":"🏴","fitzpatrick_scale":false,"category":"objects"},"rainbow_flag":{"keywords":["flag","rainbow","pride","gay","lgbt","glbt","queer","homosexual","lesbian","bisexual","transgender"],"char":"🏳️‍🌈","fitzpatrick_scale":false,"category":"objects"},"closed_lock_with_key":{"keywords":["security","privacy"],"char":"🔐","fitzpatrick_scale":false,"category":"objects"},"lock":{"keywords":["security","password","padlock"],"char":"🔒","fitzpatrick_scale":false,"category":"objects"},"unlock":{"keywords":["privacy","security"],"char":"🔓","fitzpatrick_scale":false,"category":"objects"},"lock_with_ink_pen":{"keywords":["security","secret"],"char":"🔏","fitzpatrick_scale":false,"category":"objects"},"pen":{"keywords":["stationery","writing","write"],"char":"🖊","fitzpatrick_scale":false,"category":"objects"},"fountain_pen":{"keywords":["stationery","writing","write"],"char":"🖋","fitzpatrick_scale":false,"category":"objects"},"black_nib":{"keywords":["pen","stationery","writing","write"],"char":"✒️","fitzpatrick_scale":false,"category":"objects"},"memo":{"keywords":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"char":"📝","fitzpatrick_scale":false,"category":"objects"},"pencil2":{"keywords":["stationery","write","paper","writing","school","study"],"char":"✏️","fitzpatrick_scale":false,"category":"objects"},"crayon":{"keywords":["drawing","creativity"],"char":"🖍","fitzpatrick_scale":false,"category":"objects"},"paintbrush":{"keywords":["drawing","creativity","art"],"char":"🖌","fitzpatrick_scale":false,"category":"objects"},"mag":{"keywords":["search","zoom","find","detective"],"char":"🔍","fitzpatrick_scale":false,"category":"objects"},"mag_right":{"keywords":["search","zoom","find","detective"],"char":"🔎","fitzpatrick_scale":false,"category":"objects"},"heart":{"keywords":["love","like","valentines"],"char":"❤️","fitzpatrick_scale":false,"category":"symbols"},"orange_heart":{"keywords":["love","like","affection","valentines"],"char":"🧡","fitzpatrick_scale":false,"category":"symbols"},"yellow_heart":{"keywords":["love","like","affection","valentines"],"char":"💛","fitzpatrick_scale":false,"category":"symbols"},"green_heart":{"keywords":["love","like","affection","valentines"],"char":"💚","fitzpatrick_scale":false,"category":"symbols"},"blue_heart":{"keywords":["love","like","affection","valentines"],"char":"💙","fitzpatrick_scale":false,"category":"symbols"},"purple_heart":{"keywords":["love","like","affection","valentines"],"char":"💜","fitzpatrick_scale":false,"category":"symbols"},"black_heart":{"keywords":["evil"],"char":"🖤","fitzpatrick_scale":false,"category":"symbols"},"broken_heart":{"keywords":["sad","sorry","break","heart","heartbreak"],"char":"💔","fitzpatrick_scale":false,"category":"symbols"},"heavy_heart_exclamation":{"keywords":["decoration","love"],"char":"❣","fitzpatrick_scale":false,"category":"symbols"},"two_hearts":{"keywords":["love","like","affection","valentines","heart"],"char":"💕","fitzpatrick_scale":false,"category":"symbols"},"revolving_hearts":{"keywords":["love","like","affection","valentines"],"char":"💞","fitzpatrick_scale":false,"category":"symbols"},"heartbeat":{"keywords":["love","like","affection","valentines","pink","heart"],"char":"💓","fitzpatrick_scale":false,"category":"symbols"},"heartpulse":{"keywords":["like","love","affection","valentines","pink"],"char":"💗","fitzpatrick_scale":false,"category":"symbols"},"sparkling_heart":{"keywords":["love","like","affection","valentines"],"char":"💖","fitzpatrick_scale":false,"category":"symbols"},"cupid":{"keywords":["love","like","heart","affection","valentines"],"char":"💘","fitzpatrick_scale":false,"category":"symbols"},"gift_heart":{"keywords":["love","valentines"],"char":"💝","fitzpatrick_scale":false,"category":"symbols"},"heart_decoration":{"keywords":["purple-square","love","like"],"char":"💟","fitzpatrick_scale":false,"category":"symbols"},"peace_symbol":{"keywords":["hippie"],"char":"☮","fitzpatrick_scale":false,"category":"symbols"},"latin_cross":{"keywords":["christianity"],"char":"✝","fitzpatrick_scale":false,"category":"symbols"},"star_and_crescent":{"keywords":["islam"],"char":"☪","fitzpatrick_scale":false,"category":"symbols"},"om":{"keywords":["hinduism","buddhism","sikhism","jainism"],"char":"🕉","fitzpatrick_scale":false,"category":"symbols"},"wheel_of_dharma":{"keywords":["hinduism","buddhism","sikhism","jainism"],"char":"☸","fitzpatrick_scale":false,"category":"symbols"},"star_of_david":{"keywords":["judaism"],"char":"✡","fitzpatrick_scale":false,"category":"symbols"},"six_pointed_star":{"keywords":["purple-square","religion","jewish","hexagram"],"char":"🔯","fitzpatrick_scale":false,"category":"symbols"},"menorah":{"keywords":["hanukkah","candles","jewish"],"char":"🕎","fitzpatrick_scale":false,"category":"symbols"},"yin_yang":{"keywords":["balance"],"char":"☯","fitzpatrick_scale":false,"category":"symbols"},"orthodox_cross":{"keywords":["suppedaneum","religion"],"char":"☦","fitzpatrick_scale":false,"category":"symbols"},"place_of_worship":{"keywords":["religion","church","temple","prayer"],"char":"🛐","fitzpatrick_scale":false,"category":"symbols"},"ophiuchus":{"keywords":["sign","purple-square","constellation","astrology"],"char":"⛎","fitzpatrick_scale":false,"category":"symbols"},"aries":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♈","fitzpatrick_scale":false,"category":"symbols"},"taurus":{"keywords":["purple-square","sign","zodiac","astrology"],"char":"♉","fitzpatrick_scale":false,"category":"symbols"},"gemini":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♊","fitzpatrick_scale":false,"category":"symbols"},"cancer":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♋","fitzpatrick_scale":false,"category":"symbols"},"leo":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♌","fitzpatrick_scale":false,"category":"symbols"},"virgo":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♍","fitzpatrick_scale":false,"category":"symbols"},"libra":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♎","fitzpatrick_scale":false,"category":"symbols"},"scorpius":{"keywords":["sign","zodiac","purple-square","astrology","scorpio"],"char":"♏","fitzpatrick_scale":false,"category":"symbols"},"sagittarius":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♐","fitzpatrick_scale":false,"category":"symbols"},"capricorn":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♑","fitzpatrick_scale":false,"category":"symbols"},"aquarius":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♒","fitzpatrick_scale":false,"category":"symbols"},"pisces":{"keywords":["purple-square","sign","zodiac","astrology"],"char":"♓","fitzpatrick_scale":false,"category":"symbols"},"id":{"keywords":["purple-square","words"],"char":"🆔","fitzpatrick_scale":false,"category":"symbols"},"atom_symbol":{"keywords":["science","physics","chemistry"],"char":"⚛","fitzpatrick_scale":false,"category":"symbols"},"u7a7a":{"keywords":["kanji","japanese","chinese","empty","sky","blue-square"],"char":"🈳","fitzpatrick_scale":false,"category":"symbols"},"u5272":{"keywords":["cut","divide","chinese","kanji","pink-square"],"char":"🈹","fitzpatrick_scale":false,"category":"symbols"},"radioactive":{"keywords":["nuclear","danger"],"char":"☢","fitzpatrick_scale":false,"category":"symbols"},"biohazard":{"keywords":["danger"],"char":"☣","fitzpatrick_scale":false,"category":"symbols"},"mobile_phone_off":{"keywords":["mute","orange-square","silence","quiet"],"char":"📴","fitzpatrick_scale":false,"category":"symbols"},"vibration_mode":{"keywords":["orange-square","phone"],"char":"📳","fitzpatrick_scale":false,"category":"symbols"},"u6709":{"keywords":["orange-square","chinese","have","kanji"],"char":"🈶","fitzpatrick_scale":false,"category":"symbols"},"u7121":{"keywords":["nothing","chinese","kanji","japanese","orange-square"],"char":"🈚","fitzpatrick_scale":false,"category":"symbols"},"u7533":{"keywords":["chinese","japanese","kanji","orange-square"],"char":"🈸","fitzpatrick_scale":false,"category":"symbols"},"u55b6":{"keywords":["japanese","opening hours","orange-square"],"char":"🈺","fitzpatrick_scale":false,"category":"symbols"},"u6708":{"keywords":["chinese","month","moon","japanese","orange-square","kanji"],"char":"🈷️","fitzpatrick_scale":false,"category":"symbols"},"eight_pointed_black_star":{"keywords":["orange-square","shape","polygon"],"char":"✴️","fitzpatrick_scale":false,"category":"symbols"},"vs":{"keywords":["words","orange-square"],"char":"🆚","fitzpatrick_scale":false,"category":"symbols"},"accept":{"keywords":["ok","good","chinese","kanji","agree","yes","orange-circle"],"char":"🉑","fitzpatrick_scale":false,"category":"symbols"},"white_flower":{"keywords":["japanese","spring"],"char":"💮","fitzpatrick_scale":false,"category":"symbols"},"ideograph_advantage":{"keywords":["chinese","kanji","obtain","get","circle"],"char":"🉐","fitzpatrick_scale":false,"category":"symbols"},"secret":{"keywords":["privacy","chinese","sshh","kanji","red-circle"],"char":"㊙️","fitzpatrick_scale":false,"category":"symbols"},"congratulations":{"keywords":["chinese","kanji","japanese","red-circle"],"char":"㊗️","fitzpatrick_scale":false,"category":"symbols"},"u5408":{"keywords":["japanese","chinese","join","kanji","red-square"],"char":"🈴","fitzpatrick_scale":false,"category":"symbols"},"u6e80":{"keywords":["full","chinese","japanese","red-square","kanji"],"char":"🈵","fitzpatrick_scale":false,"category":"symbols"},"u7981":{"keywords":["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],"char":"🈲","fitzpatrick_scale":false,"category":"symbols"},"a":{"keywords":["red-square","alphabet","letter"],"char":"🅰️","fitzpatrick_scale":false,"category":"symbols"},"b":{"keywords":["red-square","alphabet","letter"],"char":"🅱️","fitzpatrick_scale":false,"category":"symbols"},"ab":{"keywords":["red-square","alphabet"],"char":"🆎","fitzpatrick_scale":false,"category":"symbols"},"cl":{"keywords":["alphabet","words","red-square"],"char":"🆑","fitzpatrick_scale":false,"category":"symbols"},"o2":{"keywords":["alphabet","red-square","letter"],"char":"🅾️","fitzpatrick_scale":false,"category":"symbols"},"sos":{"keywords":["help","red-square","words","emergency","911"],"char":"🆘","fitzpatrick_scale":false,"category":"symbols"},"no_entry":{"keywords":["limit","security","privacy","bad","denied","stop","circle"],"char":"⛔","fitzpatrick_scale":false,"category":"symbols"},"name_badge":{"keywords":["fire","forbid"],"char":"📛","fitzpatrick_scale":false,"category":"symbols"},"no_entry_sign":{"keywords":["forbid","stop","limit","denied","disallow","circle"],"char":"🚫","fitzpatrick_scale":false,"category":"symbols"},"x":{"keywords":["no","delete","remove","cancel","red"],"char":"❌","fitzpatrick_scale":false,"category":"symbols"},"o":{"keywords":["circle","round"],"char":"⭕","fitzpatrick_scale":false,"category":"symbols"},"stop_sign":{"keywords":["stop"],"char":"🛑","fitzpatrick_scale":false,"category":"symbols"},"anger":{"keywords":["angry","mad"],"char":"💢","fitzpatrick_scale":false,"category":"symbols"},"hotsprings":{"keywords":["bath","warm","relax"],"char":"♨️","fitzpatrick_scale":false,"category":"symbols"},"no_pedestrians":{"keywords":["rules","crossing","walking","circle"],"char":"🚷","fitzpatrick_scale":false,"category":"symbols"},"do_not_litter":{"keywords":["trash","bin","garbage","circle"],"char":"🚯","fitzpatrick_scale":false,"category":"symbols"},"no_bicycles":{"keywords":["cyclist","prohibited","circle"],"char":"🚳","fitzpatrick_scale":false,"category":"symbols"},"non-potable_water":{"keywords":["drink","faucet","tap","circle"],"char":"🚱","fitzpatrick_scale":false,"category":"symbols"},"underage":{"keywords":["18","drink","pub","night","minor","circle"],"char":"🔞","fitzpatrick_scale":false,"category":"symbols"},"no_mobile_phones":{"keywords":["iphone","mute","circle"],"char":"📵","fitzpatrick_scale":false,"category":"symbols"},"exclamation":{"keywords":["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],"char":"❗","fitzpatrick_scale":false,"category":"symbols"},"grey_exclamation":{"keywords":["surprise","punctuation","gray","wow","warning"],"char":"❕","fitzpatrick_scale":false,"category":"symbols"},"question":{"keywords":["doubt","confused"],"char":"❓","fitzpatrick_scale":false,"category":"symbols"},"grey_question":{"keywords":["doubts","gray","huh","confused"],"char":"❔","fitzpatrick_scale":false,"category":"symbols"},"bangbang":{"keywords":["exclamation","surprise"],"char":"‼️","fitzpatrick_scale":false,"category":"symbols"},"interrobang":{"keywords":["wat","punctuation","surprise"],"char":"⁉️","fitzpatrick_scale":false,"category":"symbols"},"low_brightness":{"keywords":["sun","afternoon","warm","summer"],"char":"🔅","fitzpatrick_scale":false,"category":"symbols"},"high_brightness":{"keywords":["sun","light"],"char":"🔆","fitzpatrick_scale":false,"category":"symbols"},"trident":{"keywords":["weapon","spear"],"char":"🔱","fitzpatrick_scale":false,"category":"symbols"},"fleur_de_lis":{"keywords":["decorative","scout"],"char":"⚜","fitzpatrick_scale":false,"category":"symbols"},"part_alternation_mark":{"keywords":["graph","presentation","stats","business","economics","bad"],"char":"〽️","fitzpatrick_scale":false,"category":"symbols"},"warning":{"keywords":["exclamation","wip","alert","error","problem","issue"],"char":"⚠️","fitzpatrick_scale":false,"category":"symbols"},"children_crossing":{"keywords":["school","warning","danger","sign","driving","yellow-diamond"],"char":"🚸","fitzpatrick_scale":false,"category":"symbols"},"beginner":{"keywords":["badge","shield"],"char":"🔰","fitzpatrick_scale":false,"category":"symbols"},"recycle":{"keywords":["arrow","environment","garbage","trash"],"char":"♻️","fitzpatrick_scale":false,"category":"symbols"},"u6307":{"keywords":["chinese","point","green-square","kanji"],"char":"🈯","fitzpatrick_scale":false,"category":"symbols"},"chart":{"keywords":["green-square","graph","presentation","stats"],"char":"💹","fitzpatrick_scale":false,"category":"symbols"},"sparkle":{"keywords":["stars","green-square","awesome","good","fireworks"],"char":"❇️","fitzpatrick_scale":false,"category":"symbols"},"eight_spoked_asterisk":{"keywords":["star","sparkle","green-square"],"char":"✳️","fitzpatrick_scale":false,"category":"symbols"},"negative_squared_cross_mark":{"keywords":["x","green-square","no","deny"],"char":"❎","fitzpatrick_scale":false,"category":"symbols"},"white_check_mark":{"keywords":["green-square","ok","agree","vote","election","answer","tick"],"char":"✅","fitzpatrick_scale":false,"category":"symbols"},"diamond_shape_with_a_dot_inside":{"keywords":["jewel","blue","gem","crystal","fancy"],"char":"💠","fitzpatrick_scale":false,"category":"symbols"},"cyclone":{"keywords":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"char":"🌀","fitzpatrick_scale":false,"category":"symbols"},"loop":{"keywords":["tape","cassette"],"char":"➿","fitzpatrick_scale":false,"category":"symbols"},"globe_with_meridians":{"keywords":["earth","international","world","internet","interweb","i18n"],"char":"🌐","fitzpatrick_scale":false,"category":"symbols"},"m":{"keywords":["alphabet","blue-circle","letter"],"char":"Ⓜ️","fitzpatrick_scale":false,"category":"symbols"},"atm":{"keywords":["money","sales","cash","blue-square","payment","bank"],"char":"🏧","fitzpatrick_scale":false,"category":"symbols"},"sa":{"keywords":["japanese","blue-square","katakana"],"char":"🈂️","fitzpatrick_scale":false,"category":"symbols"},"passport_control":{"keywords":["custom","blue-square"],"char":"🛂","fitzpatrick_scale":false,"category":"symbols"},"customs":{"keywords":["passport","border","blue-square"],"char":"🛃","fitzpatrick_scale":false,"category":"symbols"},"baggage_claim":{"keywords":["blue-square","airport","transport"],"char":"🛄","fitzpatrick_scale":false,"category":"symbols"},"left_luggage":{"keywords":["blue-square","travel"],"char":"🛅","fitzpatrick_scale":false,"category":"symbols"},"wheelchair":{"keywords":["blue-square","disabled","a11y","accessibility"],"char":"♿","fitzpatrick_scale":false,"category":"symbols"},"no_smoking":{"keywords":["cigarette","blue-square","smell","smoke"],"char":"🚭","fitzpatrick_scale":false,"category":"symbols"},"wc":{"keywords":["toilet","restroom","blue-square"],"char":"🚾","fitzpatrick_scale":false,"category":"symbols"},"parking":{"keywords":["cars","blue-square","alphabet","letter"],"char":"🅿️","fitzpatrick_scale":false,"category":"symbols"},"potable_water":{"keywords":["blue-square","liquid","restroom","cleaning","faucet"],"char":"🚰","fitzpatrick_scale":false,"category":"symbols"},"mens":{"keywords":["toilet","restroom","wc","blue-square","gender","male"],"char":"🚹","fitzpatrick_scale":false,"category":"symbols"},"womens":{"keywords":["purple-square","woman","female","toilet","loo","restroom","gender"],"char":"🚺","fitzpatrick_scale":false,"category":"symbols"},"baby_symbol":{"keywords":["orange-square","child"],"char":"🚼","fitzpatrick_scale":false,"category":"symbols"},"restroom":{"keywords":["blue-square","toilet","refresh","wc","gender"],"char":"🚻","fitzpatrick_scale":false,"category":"symbols"},"put_litter_in_its_place":{"keywords":["blue-square","sign","human","info"],"char":"🚮","fitzpatrick_scale":false,"category":"symbols"},"cinema":{"keywords":["blue-square","record","film","movie","curtain","stage","theater"],"char":"🎦","fitzpatrick_scale":false,"category":"symbols"},"signal_strength":{"keywords":["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],"char":"📶","fitzpatrick_scale":false,"category":"symbols"},"koko":{"keywords":["blue-square","here","katakana","japanese","destination"],"char":"🈁","fitzpatrick_scale":false,"category":"symbols"},"ng":{"keywords":["blue-square","words","shape","icon"],"char":"🆖","fitzpatrick_scale":false,"category":"symbols"},"ok":{"keywords":["good","agree","yes","blue-square"],"char":"🆗","fitzpatrick_scale":false,"category":"symbols"},"up":{"keywords":["blue-square","above","high"],"char":"🆙","fitzpatrick_scale":false,"category":"symbols"},"cool":{"keywords":["words","blue-square"],"char":"🆒","fitzpatrick_scale":false,"category":"symbols"},"new":{"keywords":["blue-square","words","start"],"char":"🆕","fitzpatrick_scale":false,"category":"symbols"},"free":{"keywords":["blue-square","words"],"char":"🆓","fitzpatrick_scale":false,"category":"symbols"},"zero":{"keywords":["0","numbers","blue-square","null"],"char":"0️⃣","fitzpatrick_scale":false,"category":"symbols"},"one":{"keywords":["blue-square","numbers","1"],"char":"1️⃣","fitzpatrick_scale":false,"category":"symbols"},"two":{"keywords":["numbers","2","prime","blue-square"],"char":"2️⃣","fitzpatrick_scale":false,"category":"symbols"},"three":{"keywords":["3","numbers","prime","blue-square"],"char":"3️⃣","fitzpatrick_scale":false,"category":"symbols"},"four":{"keywords":["4","numbers","blue-square"],"char":"4️⃣","fitzpatrick_scale":false,"category":"symbols"},"five":{"keywords":["5","numbers","blue-square","prime"],"char":"5️⃣","fitzpatrick_scale":false,"category":"symbols"},"six":{"keywords":["6","numbers","blue-square"],"char":"6️⃣","fitzpatrick_scale":false,"category":"symbols"},"seven":{"keywords":["7","numbers","blue-square","prime"],"char":"7️⃣","fitzpatrick_scale":false,"category":"symbols"},"eight":{"keywords":["8","blue-square","numbers"],"char":"8️⃣","fitzpatrick_scale":false,"category":"symbols"},"nine":{"keywords":["blue-square","numbers","9"],"char":"9️⃣","fitzpatrick_scale":false,"category":"symbols"},"keycap_ten":{"keywords":["numbers","10","blue-square"],"char":"🔟","fitzpatrick_scale":false,"category":"symbols"},"asterisk":{"keywords":["star","keycap"],"char":"*⃣","fitzpatrick_scale":false,"category":"symbols"},"eject_button":{"keywords":["blue-square"],"char":"⏏️","fitzpatrick_scale":false,"category":"symbols"},"arrow_forward":{"keywords":["blue-square","right","direction","play"],"char":"▶️","fitzpatrick_scale":false,"category":"symbols"},"pause_button":{"keywords":["pause","blue-square"],"char":"⏸","fitzpatrick_scale":false,"category":"symbols"},"next_track_button":{"keywords":["forward","next","blue-square"],"char":"⏭","fitzpatrick_scale":false,"category":"symbols"},"stop_button":{"keywords":["blue-square"],"char":"⏹","fitzpatrick_scale":false,"category":"symbols"},"record_button":{"keywords":["blue-square"],"char":"⏺","fitzpatrick_scale":false,"category":"symbols"},"play_or_pause_button":{"keywords":["blue-square","play","pause"],"char":"⏯","fitzpatrick_scale":false,"category":"symbols"},"previous_track_button":{"keywords":["backward"],"char":"⏮","fitzpatrick_scale":false,"category":"symbols"},"fast_forward":{"keywords":["blue-square","play","speed","continue"],"char":"⏩","fitzpatrick_scale":false,"category":"symbols"},"rewind":{"keywords":["play","blue-square"],"char":"⏪","fitzpatrick_scale":false,"category":"symbols"},"twisted_rightwards_arrows":{"keywords":["blue-square","shuffle","music","random"],"char":"🔀","fitzpatrick_scale":false,"category":"symbols"},"repeat":{"keywords":["loop","record"],"char":"🔁","fitzpatrick_scale":false,"category":"symbols"},"repeat_one":{"keywords":["blue-square","loop"],"char":"🔂","fitzpatrick_scale":false,"category":"symbols"},"arrow_backward":{"keywords":["blue-square","left","direction"],"char":"◀️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up_small":{"keywords":["blue-square","triangle","direction","point","forward","top"],"char":"🔼","fitzpatrick_scale":false,"category":"symbols"},"arrow_down_small":{"keywords":["blue-square","direction","bottom"],"char":"🔽","fitzpatrick_scale":false,"category":"symbols"},"arrow_double_up":{"keywords":["blue-square","direction","top"],"char":"⏫","fitzpatrick_scale":false,"category":"symbols"},"arrow_double_down":{"keywords":["blue-square","direction","bottom"],"char":"⏬","fitzpatrick_scale":false,"category":"symbols"},"arrow_right":{"keywords":["blue-square","next"],"char":"➡️","fitzpatrick_scale":false,"category":"symbols"},"arrow_left":{"keywords":["blue-square","previous","back"],"char":"⬅️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up":{"keywords":["blue-square","continue","top","direction"],"char":"⬆️","fitzpatrick_scale":false,"category":"symbols"},"arrow_down":{"keywords":["blue-square","direction","bottom"],"char":"⬇️","fitzpatrick_scale":false,"category":"symbols"},"arrow_upper_right":{"keywords":["blue-square","point","direction","diagonal","northeast"],"char":"↗️","fitzpatrick_scale":false,"category":"symbols"},"arrow_lower_right":{"keywords":["blue-square","direction","diagonal","southeast"],"char":"↘️","fitzpatrick_scale":false,"category":"symbols"},"arrow_lower_left":{"keywords":["blue-square","direction","diagonal","southwest"],"char":"↙️","fitzpatrick_scale":false,"category":"symbols"},"arrow_upper_left":{"keywords":["blue-square","point","direction","diagonal","northwest"],"char":"↖️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up_down":{"keywords":["blue-square","direction","way","vertical"],"char":"↕️","fitzpatrick_scale":false,"category":"symbols"},"left_right_arrow":{"keywords":["shape","direction","horizontal","sideways"],"char":"↔️","fitzpatrick_scale":false,"category":"symbols"},"arrows_counterclockwise":{"keywords":["blue-square","sync","cycle"],"char":"🔄","fitzpatrick_scale":false,"category":"symbols"},"arrow_right_hook":{"keywords":["blue-square","return","rotate","direction"],"char":"↪️","fitzpatrick_scale":false,"category":"symbols"},"leftwards_arrow_with_hook":{"keywords":["back","return","blue-square","undo","enter"],"char":"↩️","fitzpatrick_scale":false,"category":"symbols"},"arrow_heading_up":{"keywords":["blue-square","direction","top"],"char":"⤴️","fitzpatrick_scale":false,"category":"symbols"},"arrow_heading_down":{"keywords":["blue-square","direction","bottom"],"char":"⤵️","fitzpatrick_scale":false,"category":"symbols"},"hash":{"keywords":["symbol","blue-square","twitter"],"char":"#️⃣","fitzpatrick_scale":false,"category":"symbols"},"information_source":{"keywords":["blue-square","alphabet","letter"],"char":"ℹ️","fitzpatrick_scale":false,"category":"symbols"},"abc":{"keywords":["blue-square","alphabet"],"char":"🔤","fitzpatrick_scale":false,"category":"symbols"},"abcd":{"keywords":["blue-square","alphabet"],"char":"🔡","fitzpatrick_scale":false,"category":"symbols"},"capital_abcd":{"keywords":["alphabet","words","blue-square"],"char":"🔠","fitzpatrick_scale":false,"category":"symbols"},"symbols":{"keywords":["blue-square","music","note","ampersand","percent","glyphs","characters"],"char":"🔣","fitzpatrick_scale":false,"category":"symbols"},"musical_note":{"keywords":["score","tone","sound"],"char":"🎵","fitzpatrick_scale":false,"category":"symbols"},"notes":{"keywords":["music","score"],"char":"🎶","fitzpatrick_scale":false,"category":"symbols"},"wavy_dash":{"keywords":["draw","line","moustache","mustache","squiggle","scribble"],"char":"〰️","fitzpatrick_scale":false,"category":"symbols"},"curly_loop":{"keywords":["scribble","draw","shape","squiggle"],"char":"➰","fitzpatrick_scale":false,"category":"symbols"},"heavy_check_mark":{"keywords":["ok","nike","answer","yes","tick"],"char":"✔️","fitzpatrick_scale":false,"category":"symbols"},"arrows_clockwise":{"keywords":["sync","cycle","round","repeat"],"char":"🔃","fitzpatrick_scale":false,"category":"symbols"},"heavy_plus_sign":{"keywords":["math","calculation","addition","more","increase"],"char":"➕","fitzpatrick_scale":false,"category":"symbols"},"heavy_minus_sign":{"keywords":["math","calculation","subtract","less"],"char":"➖","fitzpatrick_scale":false,"category":"symbols"},"heavy_division_sign":{"keywords":["divide","math","calculation"],"char":"➗","fitzpatrick_scale":false,"category":"symbols"},"heavy_multiplication_x":{"keywords":["math","calculation"],"char":"✖️","fitzpatrick_scale":false,"category":"symbols"},"infinity":{"keywords":["forever"],"char":"♾","fitzpatrick_scale":false,"category":"symbols"},"heavy_dollar_sign":{"keywords":["money","sales","payment","currency","buck"],"char":"💲","fitzpatrick_scale":false,"category":"symbols"},"currency_exchange":{"keywords":["money","sales","dollar","travel"],"char":"💱","fitzpatrick_scale":false,"category":"symbols"},"copyright":{"keywords":["ip","license","circle","law","legal"],"char":"©️","fitzpatrick_scale":false,"category":"symbols"},"registered":{"keywords":["alphabet","circle"],"char":"®️","fitzpatrick_scale":false,"category":"symbols"},"tm":{"keywords":["trademark","brand","law","legal"],"char":"™️","fitzpatrick_scale":false,"category":"symbols"},"end":{"keywords":["words","arrow"],"char":"🔚","fitzpatrick_scale":false,"category":"symbols"},"back":{"keywords":["arrow","words","return"],"char":"🔙","fitzpatrick_scale":false,"category":"symbols"},"on":{"keywords":["arrow","words"],"char":"🔛","fitzpatrick_scale":false,"category":"symbols"},"top":{"keywords":["words","blue-square"],"char":"🔝","fitzpatrick_scale":false,"category":"symbols"},"soon":{"keywords":["arrow","words"],"char":"🔜","fitzpatrick_scale":false,"category":"symbols"},"ballot_box_with_check":{"keywords":["ok","agree","confirm","black-square","vote","election","yes","tick"],"char":"☑️","fitzpatrick_scale":false,"category":"symbols"},"radio_button":{"keywords":["input","old","music","circle"],"char":"🔘","fitzpatrick_scale":false,"category":"symbols"},"white_circle":{"keywords":["shape","round"],"char":"⚪","fitzpatrick_scale":false,"category":"symbols"},"black_circle":{"keywords":["shape","button","round"],"char":"⚫","fitzpatrick_scale":false,"category":"symbols"},"red_circle":{"keywords":["shape","error","danger"],"char":"🔴","fitzpatrick_scale":false,"category":"symbols"},"large_blue_circle":{"keywords":["shape","icon","button"],"char":"🔵","fitzpatrick_scale":false,"category":"symbols"},"small_orange_diamond":{"keywords":["shape","jewel","gem"],"char":"🔸","fitzpatrick_scale":false,"category":"symbols"},"small_blue_diamond":{"keywords":["shape","jewel","gem"],"char":"🔹","fitzpatrick_scale":false,"category":"symbols"},"large_orange_diamond":{"keywords":["shape","jewel","gem"],"char":"🔶","fitzpatrick_scale":false,"category":"symbols"},"large_blue_diamond":{"keywords":["shape","jewel","gem"],"char":"🔷","fitzpatrick_scale":false,"category":"symbols"},"small_red_triangle":{"keywords":["shape","direction","up","top"],"char":"🔺","fitzpatrick_scale":false,"category":"symbols"},"black_small_square":{"keywords":["shape","icon"],"char":"▪️","fitzpatrick_scale":false,"category":"symbols"},"white_small_square":{"keywords":["shape","icon"],"char":"▫️","fitzpatrick_scale":false,"category":"symbols"},"black_large_square":{"keywords":["shape","icon","button"],"char":"⬛","fitzpatrick_scale":false,"category":"symbols"},"white_large_square":{"keywords":["shape","icon","stone","button"],"char":"⬜","fitzpatrick_scale":false,"category":"symbols"},"small_red_triangle_down":{"keywords":["shape","direction","bottom"],"char":"🔻","fitzpatrick_scale":false,"category":"symbols"},"black_medium_square":{"keywords":["shape","button","icon"],"char":"◼️","fitzpatrick_scale":false,"category":"symbols"},"white_medium_square":{"keywords":["shape","stone","icon"],"char":"◻️","fitzpatrick_scale":false,"category":"symbols"},"black_medium_small_square":{"keywords":["icon","shape","button"],"char":"◾","fitzpatrick_scale":false,"category":"symbols"},"white_medium_small_square":{"keywords":["shape","stone","icon","button"],"char":"◽","fitzpatrick_scale":false,"category":"symbols"},"black_square_button":{"keywords":["shape","input","frame"],"char":"🔲","fitzpatrick_scale":false,"category":"symbols"},"white_square_button":{"keywords":["shape","input"],"char":"🔳","fitzpatrick_scale":false,"category":"symbols"},"speaker":{"keywords":["sound","volume","silence","broadcast"],"char":"🔈","fitzpatrick_scale":false,"category":"symbols"},"sound":{"keywords":["volume","speaker","broadcast"],"char":"🔉","fitzpatrick_scale":false,"category":"symbols"},"loud_sound":{"keywords":["volume","noise","noisy","speaker","broadcast"],"char":"🔊","fitzpatrick_scale":false,"category":"symbols"},"mute":{"keywords":["sound","volume","silence","quiet"],"char":"🔇","fitzpatrick_scale":false,"category":"symbols"},"mega":{"keywords":["sound","speaker","volume"],"char":"📣","fitzpatrick_scale":false,"category":"symbols"},"loudspeaker":{"keywords":["volume","sound"],"char":"📢","fitzpatrick_scale":false,"category":"symbols"},"bell":{"keywords":["sound","notification","christmas","xmas","chime"],"char":"🔔","fitzpatrick_scale":false,"category":"symbols"},"no_bell":{"keywords":["sound","volume","mute","quiet","silent"],"char":"🔕","fitzpatrick_scale":false,"category":"symbols"},"black_joker":{"keywords":["poker","cards","game","play","magic"],"char":"🃏","fitzpatrick_scale":false,"category":"symbols"},"mahjong":{"keywords":["game","play","chinese","kanji"],"char":"🀄","fitzpatrick_scale":false,"category":"symbols"},"spades":{"keywords":["poker","cards","suits","magic"],"char":"♠️","fitzpatrick_scale":false,"category":"symbols"},"clubs":{"keywords":["poker","cards","magic","suits"],"char":"♣️","fitzpatrick_scale":false,"category":"symbols"},"hearts":{"keywords":["poker","cards","magic","suits"],"char":"♥️","fitzpatrick_scale":false,"category":"symbols"},"diamonds":{"keywords":["poker","cards","magic","suits"],"char":"♦️","fitzpatrick_scale":false,"category":"symbols"},"flower_playing_cards":{"keywords":["game","sunset","red"],"char":"🎴","fitzpatrick_scale":false,"category":"symbols"},"thought_balloon":{"keywords":["bubble","cloud","speech","thinking","dream"],"char":"💭","fitzpatrick_scale":false,"category":"symbols"},"right_anger_bubble":{"keywords":["caption","speech","thinking","mad"],"char":"🗯","fitzpatrick_scale":false,"category":"symbols"},"speech_balloon":{"keywords":["bubble","words","message","talk","chatting"],"char":"💬","fitzpatrick_scale":false,"category":"symbols"},"left_speech_bubble":{"keywords":["words","message","talk","chatting"],"char":"🗨","fitzpatrick_scale":false,"category":"symbols"},"clock1":{"keywords":["time","late","early","schedule"],"char":"🕐","fitzpatrick_scale":false,"category":"symbols"},"clock2":{"keywords":["time","late","early","schedule"],"char":"🕑","fitzpatrick_scale":false,"category":"symbols"},"clock3":{"keywords":["time","late","early","schedule"],"char":"🕒","fitzpatrick_scale":false,"category":"symbols"},"clock4":{"keywords":["time","late","early","schedule"],"char":"🕓","fitzpatrick_scale":false,"category":"symbols"},"clock5":{"keywords":["time","late","early","schedule"],"char":"🕔","fitzpatrick_scale":false,"category":"symbols"},"clock6":{"keywords":["time","late","early","schedule","dawn","dusk"],"char":"🕕","fitzpatrick_scale":false,"category":"symbols"},"clock7":{"keywords":["time","late","early","schedule"],"char":"🕖","fitzpatrick_scale":false,"category":"symbols"},"clock8":{"keywords":["time","late","early","schedule"],"char":"🕗","fitzpatrick_scale":false,"category":"symbols"},"clock9":{"keywords":["time","late","early","schedule"],"char":"🕘","fitzpatrick_scale":false,"category":"symbols"},"clock10":{"keywords":["time","late","early","schedule"],"char":"🕙","fitzpatrick_scale":false,"category":"symbols"},"clock11":{"keywords":["time","late","early","schedule"],"char":"🕚","fitzpatrick_scale":false,"category":"symbols"},"clock12":{"keywords":["time","noon","midnight","midday","late","early","schedule"],"char":"🕛","fitzpatrick_scale":false,"category":"symbols"},"clock130":{"keywords":["time","late","early","schedule"],"char":"🕜","fitzpatrick_scale":false,"category":"symbols"},"clock230":{"keywords":["time","late","early","schedule"],"char":"🕝","fitzpatrick_scale":false,"category":"symbols"},"clock330":{"keywords":["time","late","early","schedule"],"char":"🕞","fitzpatrick_scale":false,"category":"symbols"},"clock430":{"keywords":["time","late","early","schedule"],"char":"🕟","fitzpatrick_scale":false,"category":"symbols"},"clock530":{"keywords":["time","late","early","schedule"],"char":"🕠","fitzpatrick_scale":false,"category":"symbols"},"clock630":{"keywords":["time","late","early","schedule"],"char":"🕡","fitzpatrick_scale":false,"category":"symbols"},"clock730":{"keywords":["time","late","early","schedule"],"char":"🕢","fitzpatrick_scale":false,"category":"symbols"},"clock830":{"keywords":["time","late","early","schedule"],"char":"🕣","fitzpatrick_scale":false,"category":"symbols"},"clock930":{"keywords":["time","late","early","schedule"],"char":"🕤","fitzpatrick_scale":false,"category":"symbols"},"clock1030":{"keywords":["time","late","early","schedule"],"char":"🕥","fitzpatrick_scale":false,"category":"symbols"},"clock1130":{"keywords":["time","late","early","schedule"],"char":"🕦","fitzpatrick_scale":false,"category":"symbols"},"clock1230":{"keywords":["time","late","early","schedule"],"char":"🕧","fitzpatrick_scale":false,"category":"symbols"},"afghanistan":{"keywords":["af","flag","nation","country","banner"],"char":"🇦🇫","fitzpatrick_scale":false,"category":"flags"},"aland_islands":{"keywords":["Åland","islands","flag","nation","country","banner"],"char":"🇦🇽","fitzpatrick_scale":false,"category":"flags"},"albania":{"keywords":["al","flag","nation","country","banner"],"char":"🇦🇱","fitzpatrick_scale":false,"category":"flags"},"algeria":{"keywords":["dz","flag","nation","country","banner"],"char":"🇩🇿","fitzpatrick_scale":false,"category":"flags"},"american_samoa":{"keywords":["american","ws","flag","nation","country","banner"],"char":"🇦🇸","fitzpatrick_scale":false,"category":"flags"},"andorra":{"keywords":["ad","flag","nation","country","banner"],"char":"🇦🇩","fitzpatrick_scale":false,"category":"flags"},"angola":{"keywords":["ao","flag","nation","country","banner"],"char":"🇦🇴","fitzpatrick_scale":false,"category":"flags"},"anguilla":{"keywords":["ai","flag","nation","country","banner"],"char":"🇦🇮","fitzpatrick_scale":false,"category":"flags"},"antarctica":{"keywords":["aq","flag","nation","country","banner"],"char":"🇦🇶","fitzpatrick_scale":false,"category":"flags"},"antigua_barbuda":{"keywords":["antigua","barbuda","flag","nation","country","banner"],"char":"🇦🇬","fitzpatrick_scale":false,"category":"flags"},"argentina":{"keywords":["ar","flag","nation","country","banner"],"char":"🇦🇷","fitzpatrick_scale":false,"category":"flags"},"armenia":{"keywords":["am","flag","nation","country","banner"],"char":"🇦🇲","fitzpatrick_scale":false,"category":"flags"},"aruba":{"keywords":["aw","flag","nation","country","banner"],"char":"🇦🇼","fitzpatrick_scale":false,"category":"flags"},"australia":{"keywords":["au","flag","nation","country","banner"],"char":"🇦🇺","fitzpatrick_scale":false,"category":"flags"},"austria":{"keywords":["at","flag","nation","country","banner"],"char":"🇦🇹","fitzpatrick_scale":false,"category":"flags"},"azerbaijan":{"keywords":["az","flag","nation","country","banner"],"char":"🇦🇿","fitzpatrick_scale":false,"category":"flags"},"bahamas":{"keywords":["bs","flag","nation","country","banner"],"char":"🇧🇸","fitzpatrick_scale":false,"category":"flags"},"bahrain":{"keywords":["bh","flag","nation","country","banner"],"char":"🇧🇭","fitzpatrick_scale":false,"category":"flags"},"bangladesh":{"keywords":["bd","flag","nation","country","banner"],"char":"🇧🇩","fitzpatrick_scale":false,"category":"flags"},"barbados":{"keywords":["bb","flag","nation","country","banner"],"char":"🇧🇧","fitzpatrick_scale":false,"category":"flags"},"belarus":{"keywords":["by","flag","nation","country","banner"],"char":"🇧🇾","fitzpatrick_scale":false,"category":"flags"},"belgium":{"keywords":["be","flag","nation","country","banner"],"char":"🇧🇪","fitzpatrick_scale":false,"category":"flags"},"belize":{"keywords":["bz","flag","nation","country","banner"],"char":"🇧🇿","fitzpatrick_scale":false,"category":"flags"},"benin":{"keywords":["bj","flag","nation","country","banner"],"char":"🇧🇯","fitzpatrick_scale":false,"category":"flags"},"bermuda":{"keywords":["bm","flag","nation","country","banner"],"char":"🇧🇲","fitzpatrick_scale":false,"category":"flags"},"bhutan":{"keywords":["bt","flag","nation","country","banner"],"char":"🇧🇹","fitzpatrick_scale":false,"category":"flags"},"bolivia":{"keywords":["bo","flag","nation","country","banner"],"char":"🇧🇴","fitzpatrick_scale":false,"category":"flags"},"caribbean_netherlands":{"keywords":["bonaire","flag","nation","country","banner"],"char":"🇧🇶","fitzpatrick_scale":false,"category":"flags"},"bosnia_herzegovina":{"keywords":["bosnia","herzegovina","flag","nation","country","banner"],"char":"🇧🇦","fitzpatrick_scale":false,"category":"flags"},"botswana":{"keywords":["bw","flag","nation","country","banner"],"char":"🇧🇼","fitzpatrick_scale":false,"category":"flags"},"brazil":{"keywords":["br","flag","nation","country","banner"],"char":"🇧🇷","fitzpatrick_scale":false,"category":"flags"},"british_indian_ocean_territory":{"keywords":["british","indian","ocean","territory","flag","nation","country","banner"],"char":"🇮🇴","fitzpatrick_scale":false,"category":"flags"},"british_virgin_islands":{"keywords":["british","virgin","islands","bvi","flag","nation","country","banner"],"char":"🇻🇬","fitzpatrick_scale":false,"category":"flags"},"brunei":{"keywords":["bn","darussalam","flag","nation","country","banner"],"char":"🇧🇳","fitzpatrick_scale":false,"category":"flags"},"bulgaria":{"keywords":["bg","flag","nation","country","banner"],"char":"🇧🇬","fitzpatrick_scale":false,"category":"flags"},"burkina_faso":{"keywords":["burkina","faso","flag","nation","country","banner"],"char":"🇧🇫","fitzpatrick_scale":false,"category":"flags"},"burundi":{"keywords":["bi","flag","nation","country","banner"],"char":"🇧🇮","fitzpatrick_scale":false,"category":"flags"},"cape_verde":{"keywords":["cabo","verde","flag","nation","country","banner"],"char":"🇨🇻","fitzpatrick_scale":false,"category":"flags"},"cambodia":{"keywords":["kh","flag","nation","country","banner"],"char":"🇰🇭","fitzpatrick_scale":false,"category":"flags"},"cameroon":{"keywords":["cm","flag","nation","country","banner"],"char":"🇨🇲","fitzpatrick_scale":false,"category":"flags"},"canada":{"keywords":["ca","flag","nation","country","banner"],"char":"🇨🇦","fitzpatrick_scale":false,"category":"flags"},"canary_islands":{"keywords":["canary","islands","flag","nation","country","banner"],"char":"🇮🇨","fitzpatrick_scale":false,"category":"flags"},"cayman_islands":{"keywords":["cayman","islands","flag","nation","country","banner"],"char":"🇰🇾","fitzpatrick_scale":false,"category":"flags"},"central_african_republic":{"keywords":["central","african","republic","flag","nation","country","banner"],"char":"🇨🇫","fitzpatrick_scale":false,"category":"flags"},"chad":{"keywords":["td","flag","nation","country","banner"],"char":"🇹🇩","fitzpatrick_scale":false,"category":"flags"},"chile":{"keywords":["flag","nation","country","banner"],"char":"🇨🇱","fitzpatrick_scale":false,"category":"flags"},"cn":{"keywords":["china","chinese","prc","flag","country","nation","banner"],"char":"🇨🇳","fitzpatrick_scale":false,"category":"flags"},"christmas_island":{"keywords":["christmas","island","flag","nation","country","banner"],"char":"🇨🇽","fitzpatrick_scale":false,"category":"flags"},"cocos_islands":{"keywords":["cocos","keeling","islands","flag","nation","country","banner"],"char":"🇨🇨","fitzpatrick_scale":false,"category":"flags"},"colombia":{"keywords":["co","flag","nation","country","banner"],"char":"🇨🇴","fitzpatrick_scale":false,"category":"flags"},"comoros":{"keywords":["km","flag","nation","country","banner"],"char":"🇰🇲","fitzpatrick_scale":false,"category":"flags"},"congo_brazzaville":{"keywords":["congo","flag","nation","country","banner"],"char":"🇨🇬","fitzpatrick_scale":false,"category":"flags"},"congo_kinshasa":{"keywords":["congo","democratic","republic","flag","nation","country","banner"],"char":"🇨🇩","fitzpatrick_scale":false,"category":"flags"},"cook_islands":{"keywords":["cook","islands","flag","nation","country","banner"],"char":"🇨🇰","fitzpatrick_scale":false,"category":"flags"},"costa_rica":{"keywords":["costa","rica","flag","nation","country","banner"],"char":"🇨🇷","fitzpatrick_scale":false,"category":"flags"},"croatia":{"keywords":["hr","flag","nation","country","banner"],"char":"🇭🇷","fitzpatrick_scale":false,"category":"flags"},"cuba":{"keywords":["cu","flag","nation","country","banner"],"char":"🇨🇺","fitzpatrick_scale":false,"category":"flags"},"curacao":{"keywords":["curaçao","flag","nation","country","banner"],"char":"🇨🇼","fitzpatrick_scale":false,"category":"flags"},"cyprus":{"keywords":["cy","flag","nation","country","banner"],"char":"🇨🇾","fitzpatrick_scale":false,"category":"flags"},"czech_republic":{"keywords":["cz","flag","nation","country","banner"],"char":"🇨🇿","fitzpatrick_scale":false,"category":"flags"},"denmark":{"keywords":["dk","flag","nation","country","banner"],"char":"🇩🇰","fitzpatrick_scale":false,"category":"flags"},"djibouti":{"keywords":["dj","flag","nation","country","banner"],"char":"🇩🇯","fitzpatrick_scale":false,"category":"flags"},"dominica":{"keywords":["dm","flag","nation","country","banner"],"char":"🇩🇲","fitzpatrick_scale":false,"category":"flags"},"dominican_republic":{"keywords":["dominican","republic","flag","nation","country","banner"],"char":"🇩🇴","fitzpatrick_scale":false,"category":"flags"},"ecuador":{"keywords":["ec","flag","nation","country","banner"],"char":"🇪🇨","fitzpatrick_scale":false,"category":"flags"},"egypt":{"keywords":["eg","flag","nation","country","banner"],"char":"🇪🇬","fitzpatrick_scale":false,"category":"flags"},"el_salvador":{"keywords":["el","salvador","flag","nation","country","banner"],"char":"🇸🇻","fitzpatrick_scale":false,"category":"flags"},"equatorial_guinea":{"keywords":["equatorial","gn","flag","nation","country","banner"],"char":"🇬🇶","fitzpatrick_scale":false,"category":"flags"},"eritrea":{"keywords":["er","flag","nation","country","banner"],"char":"🇪🇷","fitzpatrick_scale":false,"category":"flags"},"estonia":{"keywords":["ee","flag","nation","country","banner"],"char":"🇪🇪","fitzpatrick_scale":false,"category":"flags"},"ethiopia":{"keywords":["et","flag","nation","country","banner"],"char":"🇪🇹","fitzpatrick_scale":false,"category":"flags"},"eu":{"keywords":["european","union","flag","banner"],"char":"🇪🇺","fitzpatrick_scale":false,"category":"flags"},"falkland_islands":{"keywords":["falkland","islands","malvinas","flag","nation","country","banner"],"char":"🇫🇰","fitzpatrick_scale":false,"category":"flags"},"faroe_islands":{"keywords":["faroe","islands","flag","nation","country","banner"],"char":"🇫🇴","fitzpatrick_scale":false,"category":"flags"},"fiji":{"keywords":["fj","flag","nation","country","banner"],"char":"🇫🇯","fitzpatrick_scale":false,"category":"flags"},"finland":{"keywords":["fi","flag","nation","country","banner"],"char":"🇫🇮","fitzpatrick_scale":false,"category":"flags"},"fr":{"keywords":["banner","flag","nation","france","french","country"],"char":"🇫🇷","fitzpatrick_scale":false,"category":"flags"},"french_guiana":{"keywords":["french","guiana","flag","nation","country","banner"],"char":"🇬🇫","fitzpatrick_scale":false,"category":"flags"},"french_polynesia":{"keywords":["french","polynesia","flag","nation","country","banner"],"char":"🇵🇫","fitzpatrick_scale":false,"category":"flags"},"french_southern_territories":{"keywords":["french","southern","territories","flag","nation","country","banner"],"char":"🇹🇫","fitzpatrick_scale":false,"category":"flags"},"gabon":{"keywords":["ga","flag","nation","country","banner"],"char":"🇬🇦","fitzpatrick_scale":false,"category":"flags"},"gambia":{"keywords":["gm","flag","nation","country","banner"],"char":"🇬🇲","fitzpatrick_scale":false,"category":"flags"},"georgia":{"keywords":["ge","flag","nation","country","banner"],"char":"🇬🇪","fitzpatrick_scale":false,"category":"flags"},"de":{"keywords":["german","nation","flag","country","banner"],"char":"🇩🇪","fitzpatrick_scale":false,"category":"flags"},"ghana":{"keywords":["gh","flag","nation","country","banner"],"char":"🇬🇭","fitzpatrick_scale":false,"category":"flags"},"gibraltar":{"keywords":["gi","flag","nation","country","banner"],"char":"🇬🇮","fitzpatrick_scale":false,"category":"flags"},"greece":{"keywords":["gr","flag","nation","country","banner"],"char":"🇬🇷","fitzpatrick_scale":false,"category":"flags"},"greenland":{"keywords":["gl","flag","nation","country","banner"],"char":"🇬🇱","fitzpatrick_scale":false,"category":"flags"},"grenada":{"keywords":["gd","flag","nation","country","banner"],"char":"🇬🇩","fitzpatrick_scale":false,"category":"flags"},"guadeloupe":{"keywords":["gp","flag","nation","country","banner"],"char":"🇬🇵","fitzpatrick_scale":false,"category":"flags"},"guam":{"keywords":["gu","flag","nation","country","banner"],"char":"🇬🇺","fitzpatrick_scale":false,"category":"flags"},"guatemala":{"keywords":["gt","flag","nation","country","banner"],"char":"🇬🇹","fitzpatrick_scale":false,"category":"flags"},"guernsey":{"keywords":["gg","flag","nation","country","banner"],"char":"🇬🇬","fitzpatrick_scale":false,"category":"flags"},"guinea":{"keywords":["gn","flag","nation","country","banner"],"char":"🇬🇳","fitzpatrick_scale":false,"category":"flags"},"guinea_bissau":{"keywords":["gw","bissau","flag","nation","country","banner"],"char":"🇬🇼","fitzpatrick_scale":false,"category":"flags"},"guyana":{"keywords":["gy","flag","nation","country","banner"],"char":"🇬🇾","fitzpatrick_scale":false,"category":"flags"},"haiti":{"keywords":["ht","flag","nation","country","banner"],"char":"🇭🇹","fitzpatrick_scale":false,"category":"flags"},"honduras":{"keywords":["hn","flag","nation","country","banner"],"char":"🇭🇳","fitzpatrick_scale":false,"category":"flags"},"hong_kong":{"keywords":["hong","kong","flag","nation","country","banner"],"char":"🇭🇰","fitzpatrick_scale":false,"category":"flags"},"hungary":{"keywords":["hu","flag","nation","country","banner"],"char":"🇭🇺","fitzpatrick_scale":false,"category":"flags"},"iceland":{"keywords":["is","flag","nation","country","banner"],"char":"🇮🇸","fitzpatrick_scale":false,"category":"flags"},"india":{"keywords":["in","flag","nation","country","banner"],"char":"🇮🇳","fitzpatrick_scale":false,"category":"flags"},"indonesia":{"keywords":["flag","nation","country","banner"],"char":"🇮🇩","fitzpatrick_scale":false,"category":"flags"},"iran":{"keywords":["iran,","islamic","republic","flag","nation","country","banner"],"char":"🇮🇷","fitzpatrick_scale":false,"category":"flags"},"iraq":{"keywords":["iq","flag","nation","country","banner"],"char":"🇮🇶","fitzpatrick_scale":false,"category":"flags"},"ireland":{"keywords":["ie","flag","nation","country","banner"],"char":"🇮🇪","fitzpatrick_scale":false,"category":"flags"},"isle_of_man":{"keywords":["isle","man","flag","nation","country","banner"],"char":"🇮🇲","fitzpatrick_scale":false,"category":"flags"},"israel":{"keywords":["il","flag","nation","country","banner"],"char":"🇮🇱","fitzpatrick_scale":false,"category":"flags"},"it":{"keywords":["italy","flag","nation","country","banner"],"char":"🇮🇹","fitzpatrick_scale":false,"category":"flags"},"cote_divoire":{"keywords":["ivory","coast","flag","nation","country","banner"],"char":"🇨🇮","fitzpatrick_scale":false,"category":"flags"},"jamaica":{"keywords":["jm","flag","nation","country","banner"],"char":"🇯🇲","fitzpatrick_scale":false,"category":"flags"},"jp":{"keywords":["japanese","nation","flag","country","banner"],"char":"🇯🇵","fitzpatrick_scale":false,"category":"flags"},"jersey":{"keywords":["je","flag","nation","country","banner"],"char":"🇯🇪","fitzpatrick_scale":false,"category":"flags"},"jordan":{"keywords":["jo","flag","nation","country","banner"],"char":"🇯🇴","fitzpatrick_scale":false,"category":"flags"},"kazakhstan":{"keywords":["kz","flag","nation","country","banner"],"char":"🇰🇿","fitzpatrick_scale":false,"category":"flags"},"kenya":{"keywords":["ke","flag","nation","country","banner"],"char":"🇰🇪","fitzpatrick_scale":false,"category":"flags"},"kiribati":{"keywords":["ki","flag","nation","country","banner"],"char":"🇰🇮","fitzpatrick_scale":false,"category":"flags"},"kosovo":{"keywords":["xk","flag","nation","country","banner"],"char":"🇽🇰","fitzpatrick_scale":false,"category":"flags"},"kuwait":{"keywords":["kw","flag","nation","country","banner"],"char":"🇰🇼","fitzpatrick_scale":false,"category":"flags"},"kyrgyzstan":{"keywords":["kg","flag","nation","country","banner"],"char":"🇰🇬","fitzpatrick_scale":false,"category":"flags"},"laos":{"keywords":["lao","democratic","republic","flag","nation","country","banner"],"char":"🇱🇦","fitzpatrick_scale":false,"category":"flags"},"latvia":{"keywords":["lv","flag","nation","country","banner"],"char":"🇱🇻","fitzpatrick_scale":false,"category":"flags"},"lebanon":{"keywords":["lb","flag","nation","country","banner"],"char":"🇱🇧","fitzpatrick_scale":false,"category":"flags"},"lesotho":{"keywords":["ls","flag","nation","country","banner"],"char":"🇱🇸","fitzpatrick_scale":false,"category":"flags"},"liberia":{"keywords":["lr","flag","nation","country","banner"],"char":"🇱🇷","fitzpatrick_scale":false,"category":"flags"},"libya":{"keywords":["ly","flag","nation","country","banner"],"char":"🇱🇾","fitzpatrick_scale":false,"category":"flags"},"liechtenstein":{"keywords":["li","flag","nation","country","banner"],"char":"🇱🇮","fitzpatrick_scale":false,"category":"flags"},"lithuania":{"keywords":["lt","flag","nation","country","banner"],"char":"🇱🇹","fitzpatrick_scale":false,"category":"flags"},"luxembourg":{"keywords":["lu","flag","nation","country","banner"],"char":"🇱🇺","fitzpatrick_scale":false,"category":"flags"},"macau":{"keywords":["macao","flag","nation","country","banner"],"char":"🇲🇴","fitzpatrick_scale":false,"category":"flags"},"macedonia":{"keywords":["macedonia,","flag","nation","country","banner"],"char":"🇲🇰","fitzpatrick_scale":false,"category":"flags"},"madagascar":{"keywords":["mg","flag","nation","country","banner"],"char":"🇲🇬","fitzpatrick_scale":false,"category":"flags"},"malawi":{"keywords":["mw","flag","nation","country","banner"],"char":"🇲🇼","fitzpatrick_scale":false,"category":"flags"},"malaysia":{"keywords":["my","flag","nation","country","banner"],"char":"🇲🇾","fitzpatrick_scale":false,"category":"flags"},"maldives":{"keywords":["mv","flag","nation","country","banner"],"char":"🇲🇻","fitzpatrick_scale":false,"category":"flags"},"mali":{"keywords":["ml","flag","nation","country","banner"],"char":"🇲🇱","fitzpatrick_scale":false,"category":"flags"},"malta":{"keywords":["mt","flag","nation","country","banner"],"char":"🇲🇹","fitzpatrick_scale":false,"category":"flags"},"marshall_islands":{"keywords":["marshall","islands","flag","nation","country","banner"],"char":"🇲🇭","fitzpatrick_scale":false,"category":"flags"},"martinique":{"keywords":["mq","flag","nation","country","banner"],"char":"🇲🇶","fitzpatrick_scale":false,"category":"flags"},"mauritania":{"keywords":["mr","flag","nation","country","banner"],"char":"🇲🇷","fitzpatrick_scale":false,"category":"flags"},"mauritius":{"keywords":["mu","flag","nation","country","banner"],"char":"🇲🇺","fitzpatrick_scale":false,"category":"flags"},"mayotte":{"keywords":["yt","flag","nation","country","banner"],"char":"🇾🇹","fitzpatrick_scale":false,"category":"flags"},"mexico":{"keywords":["mx","flag","nation","country","banner"],"char":"🇲🇽","fitzpatrick_scale":false,"category":"flags"},"micronesia":{"keywords":["micronesia,","federated","states","flag","nation","country","banner"],"char":"🇫🇲","fitzpatrick_scale":false,"category":"flags"},"moldova":{"keywords":["moldova,","republic","flag","nation","country","banner"],"char":"🇲🇩","fitzpatrick_scale":false,"category":"flags"},"monaco":{"keywords":["mc","flag","nation","country","banner"],"char":"🇲🇨","fitzpatrick_scale":false,"category":"flags"},"mongolia":{"keywords":["mn","flag","nation","country","banner"],"char":"🇲🇳","fitzpatrick_scale":false,"category":"flags"},"montenegro":{"keywords":["me","flag","nation","country","banner"],"char":"🇲🇪","fitzpatrick_scale":false,"category":"flags"},"montserrat":{"keywords":["ms","flag","nation","country","banner"],"char":"🇲🇸","fitzpatrick_scale":false,"category":"flags"},"morocco":{"keywords":["ma","flag","nation","country","banner"],"char":"🇲🇦","fitzpatrick_scale":false,"category":"flags"},"mozambique":{"keywords":["mz","flag","nation","country","banner"],"char":"🇲🇿","fitzpatrick_scale":false,"category":"flags"},"myanmar":{"keywords":["mm","flag","nation","country","banner"],"char":"🇲🇲","fitzpatrick_scale":false,"category":"flags"},"namibia":{"keywords":["na","flag","nation","country","banner"],"char":"🇳🇦","fitzpatrick_scale":false,"category":"flags"},"nauru":{"keywords":["nr","flag","nation","country","banner"],"char":"🇳🇷","fitzpatrick_scale":false,"category":"flags"},"nepal":{"keywords":["np","flag","nation","country","banner"],"char":"🇳🇵","fitzpatrick_scale":false,"category":"flags"},"netherlands":{"keywords":["nl","flag","nation","country","banner"],"char":"🇳🇱","fitzpatrick_scale":false,"category":"flags"},"new_caledonia":{"keywords":["new","caledonia","flag","nation","country","banner"],"char":"🇳🇨","fitzpatrick_scale":false,"category":"flags"},"new_zealand":{"keywords":["new","zealand","flag","nation","country","banner"],"char":"🇳🇿","fitzpatrick_scale":false,"category":"flags"},"nicaragua":{"keywords":["ni","flag","nation","country","banner"],"char":"🇳🇮","fitzpatrick_scale":false,"category":"flags"},"niger":{"keywords":["ne","flag","nation","country","banner"],"char":"🇳🇪","fitzpatrick_scale":false,"category":"flags"},"nigeria":{"keywords":["flag","nation","country","banner"],"char":"🇳🇬","fitzpatrick_scale":false,"category":"flags"},"niue":{"keywords":["nu","flag","nation","country","banner"],"char":"🇳🇺","fitzpatrick_scale":false,"category":"flags"},"norfolk_island":{"keywords":["norfolk","island","flag","nation","country","banner"],"char":"🇳🇫","fitzpatrick_scale":false,"category":"flags"},"northern_mariana_islands":{"keywords":["northern","mariana","islands","flag","nation","country","banner"],"char":"🇲🇵","fitzpatrick_scale":false,"category":"flags"},"north_korea":{"keywords":["north","korea","nation","flag","country","banner"],"char":"🇰🇵","fitzpatrick_scale":false,"category":"flags"},"norway":{"keywords":["no","flag","nation","country","banner"],"char":"🇳🇴","fitzpatrick_scale":false,"category":"flags"},"oman":{"keywords":["om_symbol","flag","nation","country","banner"],"char":"🇴🇲","fitzpatrick_scale":false,"category":"flags"},"pakistan":{"keywords":["pk","flag","nation","country","banner"],"char":"🇵🇰","fitzpatrick_scale":false,"category":"flags"},"palau":{"keywords":["pw","flag","nation","country","banner"],"char":"🇵🇼","fitzpatrick_scale":false,"category":"flags"},"palestinian_territories":{"keywords":["palestine","palestinian","territories","flag","nation","country","banner"],"char":"🇵🇸","fitzpatrick_scale":false,"category":"flags"},"panama":{"keywords":["pa","flag","nation","country","banner"],"char":"🇵🇦","fitzpatrick_scale":false,"category":"flags"},"papua_new_guinea":{"keywords":["papua","new","guinea","flag","nation","country","banner"],"char":"🇵🇬","fitzpatrick_scale":false,"category":"flags"},"paraguay":{"keywords":["py","flag","nation","country","banner"],"char":"🇵🇾","fitzpatrick_scale":false,"category":"flags"},"peru":{"keywords":["pe","flag","nation","country","banner"],"char":"🇵🇪","fitzpatrick_scale":false,"category":"flags"},"philippines":{"keywords":["ph","flag","nation","country","banner"],"char":"🇵🇭","fitzpatrick_scale":false,"category":"flags"},"pitcairn_islands":{"keywords":["pitcairn","flag","nation","country","banner"],"char":"🇵🇳","fitzpatrick_scale":false,"category":"flags"},"poland":{"keywords":["pl","flag","nation","country","banner"],"char":"🇵🇱","fitzpatrick_scale":false,"category":"flags"},"portugal":{"keywords":["pt","flag","nation","country","banner"],"char":"🇵🇹","fitzpatrick_scale":false,"category":"flags"},"puerto_rico":{"keywords":["puerto","rico","flag","nation","country","banner"],"char":"🇵🇷","fitzpatrick_scale":false,"category":"flags"},"qatar":{"keywords":["qa","flag","nation","country","banner"],"char":"🇶🇦","fitzpatrick_scale":false,"category":"flags"},"reunion":{"keywords":["réunion","flag","nation","country","banner"],"char":"🇷🇪","fitzpatrick_scale":false,"category":"flags"},"romania":{"keywords":["ro","flag","nation","country","banner"],"char":"🇷🇴","fitzpatrick_scale":false,"category":"flags"},"ru":{"keywords":["russian","federation","flag","nation","country","banner"],"char":"🇷🇺","fitzpatrick_scale":false,"category":"flags"},"rwanda":{"keywords":["rw","flag","nation","country","banner"],"char":"🇷🇼","fitzpatrick_scale":false,"category":"flags"},"st_barthelemy":{"keywords":["saint","barthélemy","flag","nation","country","banner"],"char":"🇧🇱","fitzpatrick_scale":false,"category":"flags"},"st_helena":{"keywords":["saint","helena","ascension","tristan","cunha","flag","nation","country","banner"],"char":"🇸🇭","fitzpatrick_scale":false,"category":"flags"},"st_kitts_nevis":{"keywords":["saint","kitts","nevis","flag","nation","country","banner"],"char":"🇰🇳","fitzpatrick_scale":false,"category":"flags"},"st_lucia":{"keywords":["saint","lucia","flag","nation","country","banner"],"char":"🇱🇨","fitzpatrick_scale":false,"category":"flags"},"st_pierre_miquelon":{"keywords":["saint","pierre","miquelon","flag","nation","country","banner"],"char":"🇵🇲","fitzpatrick_scale":false,"category":"flags"},"st_vincent_grenadines":{"keywords":["saint","vincent","grenadines","flag","nation","country","banner"],"char":"🇻🇨","fitzpatrick_scale":false,"category":"flags"},"samoa":{"keywords":["ws","flag","nation","country","banner"],"char":"🇼🇸","fitzpatrick_scale":false,"category":"flags"},"san_marino":{"keywords":["san","marino","flag","nation","country","banner"],"char":"🇸🇲","fitzpatrick_scale":false,"category":"flags"},"sao_tome_principe":{"keywords":["sao","tome","principe","flag","nation","country","banner"],"char":"🇸🇹","fitzpatrick_scale":false,"category":"flags"},"saudi_arabia":{"keywords":["flag","nation","country","banner"],"char":"🇸🇦","fitzpatrick_scale":false,"category":"flags"},"senegal":{"keywords":["sn","flag","nation","country","banner"],"char":"🇸🇳","fitzpatrick_scale":false,"category":"flags"},"serbia":{"keywords":["rs","flag","nation","country","banner"],"char":"🇷🇸","fitzpatrick_scale":false,"category":"flags"},"seychelles":{"keywords":["sc","flag","nation","country","banner"],"char":"🇸🇨","fitzpatrick_scale":false,"category":"flags"},"sierra_leone":{"keywords":["sierra","leone","flag","nation","country","banner"],"char":"🇸🇱","fitzpatrick_scale":false,"category":"flags"},"singapore":{"keywords":["sg","flag","nation","country","banner"],"char":"🇸🇬","fitzpatrick_scale":false,"category":"flags"},"sint_maarten":{"keywords":["sint","maarten","dutch","flag","nation","country","banner"],"char":"🇸🇽","fitzpatrick_scale":false,"category":"flags"},"slovakia":{"keywords":["sk","flag","nation","country","banner"],"char":"🇸🇰","fitzpatrick_scale":false,"category":"flags"},"slovenia":{"keywords":["si","flag","nation","country","banner"],"char":"🇸🇮","fitzpatrick_scale":false,"category":"flags"},"solomon_islands":{"keywords":["solomon","islands","flag","nation","country","banner"],"char":"🇸🇧","fitzpatrick_scale":false,"category":"flags"},"somalia":{"keywords":["so","flag","nation","country","banner"],"char":"🇸🇴","fitzpatrick_scale":false,"category":"flags"},"south_africa":{"keywords":["south","africa","flag","nation","country","banner"],"char":"🇿🇦","fitzpatrick_scale":false,"category":"flags"},"south_georgia_south_sandwich_islands":{"keywords":["south","georgia","sandwich","islands","flag","nation","country","banner"],"char":"🇬🇸","fitzpatrick_scale":false,"category":"flags"},"kr":{"keywords":["south","korea","nation","flag","country","banner"],"char":"🇰🇷","fitzpatrick_scale":false,"category":"flags"},"south_sudan":{"keywords":["south","sd","flag","nation","country","banner"],"char":"🇸🇸","fitzpatrick_scale":false,"category":"flags"},"es":{"keywords":["spain","flag","nation","country","banner"],"char":"🇪🇸","fitzpatrick_scale":false,"category":"flags"},"sri_lanka":{"keywords":["sri","lanka","flag","nation","country","banner"],"char":"🇱🇰","fitzpatrick_scale":false,"category":"flags"},"sudan":{"keywords":["sd","flag","nation","country","banner"],"char":"🇸🇩","fitzpatrick_scale":false,"category":"flags"},"suriname":{"keywords":["sr","flag","nation","country","banner"],"char":"🇸🇷","fitzpatrick_scale":false,"category":"flags"},"swaziland":{"keywords":["sz","flag","nation","country","banner"],"char":"🇸🇿","fitzpatrick_scale":false,"category":"flags"},"sweden":{"keywords":["se","flag","nation","country","banner"],"char":"🇸🇪","fitzpatrick_scale":false,"category":"flags"},"switzerland":{"keywords":["ch","flag","nation","country","banner"],"char":"🇨🇭","fitzpatrick_scale":false,"category":"flags"},"syria":{"keywords":["syrian","arab","republic","flag","nation","country","banner"],"char":"🇸🇾","fitzpatrick_scale":false,"category":"flags"},"taiwan":{"keywords":["tw","flag","nation","country","banner"],"char":"🇹🇼","fitzpatrick_scale":false,"category":"flags"},"tajikistan":{"keywords":["tj","flag","nation","country","banner"],"char":"🇹🇯","fitzpatrick_scale":false,"category":"flags"},"tanzania":{"keywords":["tanzania,","united","republic","flag","nation","country","banner"],"char":"🇹🇿","fitzpatrick_scale":false,"category":"flags"},"thailand":{"keywords":["th","flag","nation","country","banner"],"char":"🇹🇭","fitzpatrick_scale":false,"category":"flags"},"timor_leste":{"keywords":["timor","leste","flag","nation","country","banner"],"char":"🇹🇱","fitzpatrick_scale":false,"category":"flags"},"togo":{"keywords":["tg","flag","nation","country","banner"],"char":"🇹🇬","fitzpatrick_scale":false,"category":"flags"},"tokelau":{"keywords":["tk","flag","nation","country","banner"],"char":"🇹🇰","fitzpatrick_scale":false,"category":"flags"},"tonga":{"keywords":["to","flag","nation","country","banner"],"char":"🇹🇴","fitzpatrick_scale":false,"category":"flags"},"trinidad_tobago":{"keywords":["trinidad","tobago","flag","nation","country","banner"],"char":"🇹🇹","fitzpatrick_scale":false,"category":"flags"},"tunisia":{"keywords":["tn","flag","nation","country","banner"],"char":"🇹🇳","fitzpatrick_scale":false,"category":"flags"},"tr":{"keywords":["turkey","flag","nation","country","banner"],"char":"🇹🇷","fitzpatrick_scale":false,"category":"flags"},"turkmenistan":{"keywords":["flag","nation","country","banner"],"char":"🇹🇲","fitzpatrick_scale":false,"category":"flags"},"turks_caicos_islands":{"keywords":["turks","caicos","islands","flag","nation","country","banner"],"char":"🇹🇨","fitzpatrick_scale":false,"category":"flags"},"tuvalu":{"keywords":["flag","nation","country","banner"],"char":"🇹🇻","fitzpatrick_scale":false,"category":"flags"},"uganda":{"keywords":["ug","flag","nation","country","banner"],"char":"🇺🇬","fitzpatrick_scale":false,"category":"flags"},"ukraine":{"keywords":["ua","flag","nation","country","banner"],"char":"🇺🇦","fitzpatrick_scale":false,"category":"flags"},"united_arab_emirates":{"keywords":["united","arab","emirates","flag","nation","country","banner"],"char":"🇦🇪","fitzpatrick_scale":false,"category":"flags"},"uk":{"keywords":["united","kingdom","great","britain","northern","ireland","flag","nation","country","banner","british","UK","english","england","union jack"],"char":"🇬🇧","fitzpatrick_scale":false,"category":"flags"},"england":{"keywords":["flag","english"],"char":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","fitzpatrick_scale":false,"category":"flags"},"scotland":{"keywords":["flag","scottish"],"char":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","fitzpatrick_scale":false,"category":"flags"},"wales":{"keywords":["flag","welsh"],"char":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","fitzpatrick_scale":false,"category":"flags"},"us":{"keywords":["united","states","america","flag","nation","country","banner"],"char":"🇺🇸","fitzpatrick_scale":false,"category":"flags"},"us_virgin_islands":{"keywords":["virgin","islands","us","flag","nation","country","banner"],"char":"🇻🇮","fitzpatrick_scale":false,"category":"flags"},"uruguay":{"keywords":["uy","flag","nation","country","banner"],"char":"🇺🇾","fitzpatrick_scale":false,"category":"flags"},"uzbekistan":{"keywords":["uz","flag","nation","country","banner"],"char":"🇺🇿","fitzpatrick_scale":false,"category":"flags"},"vanuatu":{"keywords":["vu","flag","nation","country","banner"],"char":"🇻🇺","fitzpatrick_scale":false,"category":"flags"},"vatican_city":{"keywords":["vatican","city","flag","nation","country","banner"],"char":"🇻🇦","fitzpatrick_scale":false,"category":"flags"},"venezuela":{"keywords":["ve","bolivarian","republic","flag","nation","country","banner"],"char":"🇻🇪","fitzpatrick_scale":false,"category":"flags"},"vietnam":{"keywords":["viet","nam","flag","nation","country","banner"],"char":"🇻🇳","fitzpatrick_scale":false,"category":"flags"},"wallis_futuna":{"keywords":["wallis","futuna","flag","nation","country","banner"],"char":"🇼🇫","fitzpatrick_scale":false,"category":"flags"},"western_sahara":{"keywords":["western","sahara","flag","nation","country","banner"],"char":"🇪🇭","fitzpatrick_scale":false,"category":"flags"},"yemen":{"keywords":["ye","flag","nation","country","banner"],"char":"🇾🇪","fitzpatrick_scale":false,"category":"flags"},"zambia":{"keywords":["zm","flag","nation","country","banner"],"char":"🇿🇲","fitzpatrick_scale":false,"category":"flags"},"zimbabwe":{"keywords":["zw","flag","nation","country","banner"],"char":"🇿🇼","fitzpatrick_scale":false,"category":"flags"},"united_nations":{"keywords":["un","flag","banner"],"char":"🇺🇳","fitzpatrick_scale":false,"category":"flags"},"pirate_flag":{"keywords":["skull","crossbones","flag","banner"],"char":"🏴‍☠️","fitzpatrick_scale":false,"category":"flags"}};

/***/ }),

/***/ "./node_modules/emojilib/index.js":
/*!****************************************!*\
  !*** ./node_modules/emojilib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  lib: __webpack_require__(/*! ./emojis */ "./node_modules/emojilib/emojis.json"),
  ordered: __webpack_require__(/*! ./ordered */ "./node_modules/emojilib/ordered.json"),
  fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"]
}


/***/ }),

/***/ "./node_modules/emojilib/ordered.json":
/*!********************************************!*\
  !*** ./node_modules/emojilib/ordered.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, default */
/***/ (function(module) {

module.exports = ["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","smiling_face_with_three_hearts","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","partying","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","pleading","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","hot","cold","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","woozy","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","foot","leg","ring","lipstick","kiss","lips","tooth","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","woman_superhero","man_superhero","woman_supervillain","man_supervillain","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","yarn","thread","coat","labcoat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","flat_shoe","high_heel","sandal","boot","mans_shoe","athletic_shoe","hiking_boot","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","luggage","eyeglasses","dark_sunglasses","goggles","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","mosquito","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","lobster","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","hippopotamus","rhinoceros","dromedary_camel","giraffe","kangaroo","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","llama","goat","deer","dog2","poodle","cat2","rooster","turkey","peacock","parrot","swan","dove","rabbit2","raccoon","badger","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","mango","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","leafy_greens","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bagel","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","moon_cake","oden","dango","shaved_ice","ice_cream","icecream","pie","cupcake","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","salt","soccer","basketball","football","baseball","softball","tennis","volleyball","rugby_football","flying_disc","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","lacrosse","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","skateboard","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","chess_pawn","slot_machine","jigsaw","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","compass","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","fire_extinguisher","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","toolbox","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","brick","chains","magnet","gun","bomb","firecracker","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","nazar_amulet","barber","alembic","telescope","microscope","hole","pill","syringe","dna","microbe","petri_dish","test_tube","thermometer","broom","basket","toilet_paper","label","bookmark","toilet","shower","bathtub","bath","soap","sponge","lotion_bottle","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","teddy_bear","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","red_envelope","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","receipt","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","safety_pin","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","abacus","pushpin","round_pushpin","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","infinity","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","white_flag","black_flag","pirate_flag","checkered_flag","triangular_flag_on_post","rainbow_flag","united_nations","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"];

/***/ }),

/***/ "./node_modules/moji-translate/emoji-translate.js":
/*!********************************************************!*\
  !*** ./node_modules/moji-translate/emoji-translate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const emojilib = __webpack_require__(/*! emojilib */ "./node_modules/emojilib/index.js");
const SYMBOLS = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
const allEmoji = emojilib.lib;

/**
 * Returns true for something that's already an emoji like 🤖.
 * @param {String} word The word to be translated
 * @returns {Bool}
 */
function isMaybeAlreadyAnEmoji(word) {
  let ranges = [
      '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
      '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
      '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
  ];
  return word.match(ranges.join('|')) !== null;
}

/**
 * Returns the list of all emoji translations of an english word.
 * @param {String} word The word to be translated
 * @returns {Array} The list of emoji translations or '' if none exist.
 */
function getAllEmojiForWord(originalWord) {
  let word = originalWord.trim().toLowerCase();

  if (!word || word === '' || word === 'a' || word === 'it' || word === 'is')
    return '';

  // Maybe this is a plural word but the word is the singular?
  // Don't do it for two letter words since "as" would become "a" etc.
  let maybeSingular = '';
  if (word.length > 2 && word[word.length - 1] == 's') {
    maybeSingular = word.slice(0, word.length - 1);
  }

  // Maybe this is a singular word but the word is the plural?
  // Don't do this for single letter since that will pluralize crazy things.
  let maybePlural = (word.length == 1) ? '' : word + 's';

  let maybeVerbedSimple = '';
  let maybeVerbedVowel = '';
  let maybeVerbedDoubled  = '';

  if (word.indexOf('ing') !== -1) {
    let verb = word.substr(0, word.length - 3);
    // eating -> eat
    maybeVerbedSimple = verb;
    // dancing -> dance
    maybeVerbedVowel = verb + 'e';
    // running -> run
    maybeVerbedDoubled = verb.substr(0, verb.length - 1);
  }

  // Go through all the things and find the first one that matches.
  let useful = [];

  // If this is already an emoji, don't try to translate it.
  if (isMaybeAlreadyAnEmoji(word)) {
    useful.push(word);
    return useful;
  }

  // If it's "i" or "i", add some faces to it.
  if (word === 'i' || word === 'you') {
    useful.push('😀');
    useful.push('😊');
  } else if (word === 'she'){
    useful.push('💁');
  } else if (word === 'he'){
    useful.push('💁‍♂️');
  } else if (word === 'we' || word === 'they') {
    useful.push('👩‍👩‍👦‍👦');
  } else if (word === 'am' || word === 'is' || word === 'are') {
    useful.push('👉');
  } else if (word === 'thanks') {
    useful.push('🙌');
  }

  for (let emoji in allEmoji) {
    let words = allEmoji[emoji].keywords;
    // TODO: omg refactor this one day, please. Why is this even. Why.
    if (word == allEmoji[emoji].char ||
        emoji == word || (emoji == word + '_face') ||
        emoji == maybeSingular || emoji == maybePlural ||
        emoji == maybeVerbedSimple || emoji == maybeVerbedVowel || emoji == maybeVerbedDoubled ||
        (words && words.indexOf(word) >= 0) ||
        (words && words.indexOf(maybeSingular) >= 0) ||
        (words && words.indexOf(maybePlural) >= 0) ||
        (words && words.indexOf(maybeVerbedSimple) >= 0) ||
        (words && words.indexOf(maybeVerbedVowel) >= 0) ||
        (words && words.indexOf(maybeVerbedDoubled) >= 0)) {
      // If it's a two letter word that got translated to a flag, it's 99% of the
      // time incorrect, so stop doing that.
      if (!(word.length <= 3 && allEmoji[emoji].category == 'flags')) {
        useful.push(allEmoji[emoji].char);
      }
    }
  }
  return (useful.length === 0) ? '' : useful;
}

/**
 * Returns a random emoji translation of an english word.
 * @param {String} word The word to be translated.
 * @returns {String} A random emoji translation or '' if none exists.
 */
function getEmojiForWord(word) {
  let translations = getAllEmojiForWord(word);
  return translations[Math.floor(Math.random() * translations.length)];
}

/**
 * Returns a displayable, possibly translated english word to emoji.
 * This will either be:
 *  - a span containing the word if it cannot be translated
 *  - a span containing an emoji if only one translation exists
 *  - a span containing a <select> with all the translations if multiple exist
 * @param {String} word The word to be translated
 * @returns {HTMLElement} A <span> or <select> element as above.
 */
function translateForDisplay(word) {
  var node = document.createElement('span');

  // Punctuation blows. Get all the punctuation at the start and end of the word.
  let firstSymbol = '';
  let lastSymbol = '';

  while (SYMBOLS.indexOf(word[0]) != -1) {
    firstSymbol += word[0];
    word = word.slice(1, word.length);
  }
  while (SYMBOLS.indexOf(word[word.length - 1]) != -1) {
    lastSymbol += word[word.length - 1];
    word = word.slice(0, word.length - 1);
  }

  // If it's already an emoji, return it.
  var emoji = getAllEmojiForWord(word);
  if (emoji === '')
    emoji = [word];

  var node;
  if (emoji.length === 1) {
    node = document.createElement('span');
    node.innerHTML = firstSymbol + emoji + lastSymbol + ' ';
  } else {
    node = document.createElement('select');
    for (var i = 0; i < emoji.length; i++) {
      var option = document.createElement('option');
      option.textContent = firstSymbol + emoji[i] + lastSymbol + ' ';
      node.appendChild(option);
    }
  }
  return node;
}

/**
 * Translates an entire sentence to emoji. If multiple translations exist
 * for a particular word, a random emoji is picked.
 * @param {String} sentence The sentence to be translated
 * @param {Bool} onlyEmoji True if the translation should omit all untranslatable words
 * @returns {String} An emoji translation!
 */
function translate(sentence, onlyEmoji) {
  let translation = '';
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++ ) {
    // Punctuation blows. Get all the punctuation at the start and end of the word.
    // TODO: stop copy pasting this.
    let firstSymbol = '';
    let lastSymbol = '';
    var word = words[i];

    while (SYMBOLS.indexOf(word[0]) != -1) {
      firstSymbol += word[0];
      word = word.slice(1, word.length);
    }
    while (SYMBOLS.indexOf(word[word.length - 1]) != -1) {
      lastSymbol += word[word.length - 1];
      word = word.slice(0, word.length - 1);
    }

    if (onlyEmoji) {
      firstSymbol = lastSymbol = ''
    }

    let translated = getEmojiForWord(word);
    if (translated) {
      translation += firstSymbol + translated + lastSymbol + ' ';
    } else if (!onlyEmoji){
      translation += firstSymbol + word + lastSymbol +  ' '
    }
  }
  return translation;
}

module.exports.isMaybeAlreadyAnEmoji = isMaybeAlreadyAnEmoji;
module.exports.getAllEmojiForWord = getAllEmojiForWord;
module.exports.getEmojiForWord = getEmojiForWord;
module.exports.translateForDisplay = translateForDisplay;
module.exports.translate = translate;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=packed.js.map