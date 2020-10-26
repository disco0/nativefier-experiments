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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/css-loader/dist/cjs.js!./user.css":
/*!*********************************************************************************************************!*\
  !*** /Users/disk0/git.local/nativefier/nativefier-sites/node_modules/css-loader/dist/cjs.js!./user.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root\n{\n    --monospace-font: Iosevka Expanded, Iosevka Extended, Iosevka-extended, Iosevka Term Extended, Iosevka, monospace;\n    --whitespace-char-opacity: 0.1;\n}\n\n.CodeMirror-show-whitespace > .CodeMirror\n{\n    scrollbar-width: none;\n    font-family: var(--monospace-font)\n}\n.CodeMirror-show-whitespace > .CodeMirror::-webkit-scrollbar\n{\n    display: none;\n}\n.CodeMirror-show-whitespace > .CodeMirror [class$=\"scrollbar\"]\n{\n    visibility: hidden !important;\n}\n.CodeMirror-show-whitespace > .CodeMirror span.cm-overlay.cm-space:before\n{\n    content: \"\" ․ \"\" !important;\n    color: #b9b9b9 !important;\n    opacity: 20% !important;\n    font-weight: 100 !important;\n}\n.CodeMirror-show-whitespace > .CodeMirror .CodeMirror-line:not(:last-child) > span:after\n{\n    content: \"⁋\" !important;\n    color: #ddd !important;\n    opacity: var(--whitespace-char-opacity) !important;\n    font-weight: 100 !important;\n}\n\n#regex-app > div > header > a.darwin\n{\n    padding-top: 27px\n}\n", "",{"version":3,"sources":["webpack://user.css"],"names":[],"mappings":"AAAA;;IAEI,iHAAiH;IACjH,8BAA8B;AAClC;;AAEA;;IAEI,qBAAqB;IACrB;AACJ;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,6BAA6B;AACjC;AACA;;IAEI,2BAA2B;IAC3B,yBAAyB;IACzB,uBAAuB;IACvB,2BAA2B;AAC/B;AACA;;IAEI,uBAAuB;IACvB,sBAAsB;IACtB,kDAAkD;IAClD,2BAA2B;AAC/B;;AAEA;;IAEI;AACJ","sourcesContent":[":root\n{\n    --monospace-font: Iosevka Expanded, Iosevka Extended, Iosevka-extended, Iosevka Term Extended, Iosevka, monospace;\n    --whitespace-char-opacity: 0.1;\n}\n\n.CodeMirror-show-whitespace > .CodeMirror\n{\n    scrollbar-width: none;\n    font-family: var(--monospace-font)\n}\n.CodeMirror-show-whitespace > .CodeMirror::-webkit-scrollbar\n{\n    display: none;\n}\n.CodeMirror-show-whitespace > .CodeMirror [class$=\"scrollbar\"]\n{\n    visibility: hidden !important;\n}\n.CodeMirror-show-whitespace > .CodeMirror span.cm-overlay.cm-space:before\n{\n    content: \"\" ․ \"\" !important;\n    color: #b9b9b9 !important;\n    opacity: 20% !important;\n    font-weight: 100 !important;\n}\n.CodeMirror-show-whitespace > .CodeMirror .CodeMirror-line:not(:last-child) > span:after\n{\n    content: \"⁋\" !important;\n    color: #ddd !important;\n    opacity: var(--whitespace-char-opacity) !important;\n    font-weight: 100 !important;\n}\n\n#regex-app > div > header > a.darwin\n{\n    padding-top: 27px\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************************************!*\
  !*** /Users/disk0/git.local/nativefier/nativefier-sites/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/disk0/git.local/nativefier/nativefier-sites/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./clipboard.ts":
/*!**********************!*\
  !*** ./clipboard.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
    function loadClipboardFunctions() {
        function getCurrentRegex() {
            var _a;
            return (_a = document.querySelector(`.CodeMirror .CodeMirror-sizer > div .CodeMirror-code .CodeMirror-line`)) === null || _a === void 0 ? void 0 : _a.textContent;
        }
        function escapeCurrentRegex() {
            return JSON.stringify(getCurrentRegex()).slice(1, -1);
        }
        function saveCurrentRegexToClipboardEscaped() {
            var _a;
            const escaped = (_a = escapeCurrentRegex()) !== null && _a !== void 0 ? _a : '';
            if (!escaped || escaped.length === 0)
                throw new SyntaxError('No content extracted.');
            copy(escaped);
        }
        function saveCurrentRegexToClipboard() {
            var _a;
            const regex = (_a = getCurrentRegex()) !== null && _a !== void 0 ? _a : '';
            if (!regex || regex.length === 0)
                throw new SyntaxError('No content extracted.');
            copy(regex);
        }
        Object.entries({ window, globalThis }).forEach(([name, globalObj]) => {
            console.log('Loading clipboard functions on object %o', name);
            Object.assign(globalObj, {
                getCurrentRegex,
                escapeCurrentRegex,
                saveCurrentRegexToClipboardEscaped,
                saveCurrentRegexToClipboard
            });
        });
    }
    function injectClipboardFunctions() {
        let clipboardScriptEl = document.createElement("script");
        clipboardScriptEl.text = loadClipboardFunctions.toString();
        document.body.appendChild(clipboardScriptEl);
        console.log('Clipboard function loader script element:\n%o', clipboardScriptEl);
        console.log('Calling loadClipboardFunctions');
        loadClipboardFunctions();
        const functionNameChecked = 'saveCurrentRegexToClipboard';
        if (!(functionNameChecked in window)) {
            console.warn('saveCurrentRegexToClipboard not found on window object.');
        }
    }
    injectClipboardFunctions();
})();


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./clipboard.ts */ "./clipboard.ts");
__webpack_require__(/*! ./trafficLights.ts */ "./trafficLights.ts");
__webpack_require__(/*! ./user.css */ "./user.css");


/***/ }),

/***/ "./trafficLights.ts":
/*!**************************!*\
  !*** ./trafficLights.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function injectFunctions(func) {
    let scriptEl = document.createElement("script");
    scriptEl.text = func.toString();
    document.body.appendChild(scriptEl);
    console.log('[Inject Function] Function loader script element:\n%o', scriptEl);
    console.log('[Inject Function] Calling function');
    func();
}
function TrafficBarLoader() {
    const console = window.console;
    class TrafficBarModifier {
        constructor() {
            this.delay = 1000;
            console.log('%c[TrafficBarModifier]%c Created Instance', 'color: red; font-weight: 600;', '');
        }
        static init(modifier) {
            console.log('%c[TrafficBarModifier]%c init', 'color: red; font-weight: 600;', '');
            if (TrafficBarModifier.isDarwin()) {
                console.log('%c[TrafficBarModifier]%c Applying traffic lights modification in %ims', 'color: red; font-weight: 600;', '', modifier.delay);
                modifier.injectLogoFixLoader();
            }
            else {
                console.log('%c[TrafficBarModifier]%c Skipping traffic lights modification', 'color: red; font-weight: 600;', '');
            }
        }
        static isDarwin() {
            return /Mac OS X/i.test((navigator || window.navigator).userAgent);
        }
        injectLogoFixLoader() {
            const loaderType = this.constructor.name;
            const attach = () => {
                let loader = document.createElement("script");
                loader.text = `// Loader: ${loaderType}\nsetTimeout(() => {\nfunction ${this.apply.toString()}\napply()}, ${this.delay})`;
                console.log(`%c[${loaderType}]%c Created logo fix loader script element:\n %o`, 'color: #C08; font-weight: 600;', '', loader);
                document.body.appendChild(loader);
            };
            window.addEventListener('DOMContentLoaded', () => {
                console.log(`%c[${loaderType}]%c Attaching on %cDOMContentLoaded%c:\n %o`, 'color: #C08; font-weight: 600;', '', 'font-weight: 700; color: #00C;', '', attach);
                console.log(`%c[${loaderType}]%c Attaching immediately:\n %o`, 'color: #C08; font-weight: 600;', '', attach);
                attach();
            });
            attach();
        }
    }
    class TrafficBarTitle extends TrafficBarModifier {
        apply() {
            const console = window.console;
            const document = window.document;
            // Ok actually do it now
            const logoAnchor = document.querySelector(`#regex-app > div > header > a`);
            if (logoAnchor instanceof HTMLAnchorElement) {
                logoAnchor.classList.add('logo-parent', 'darwin');
                logoAnchor.style.paddingTop = "25px !important";
                console.log('%c[TrafficBarModifier]%c Added classes to logo parent:\n%o', 'color: red; font-weight: 600;', '', logoAnchor);
            }
            else if (logoAnchor) {
                console.error('Matched element is not instance of HTMLAnchorElement.');
                return;
            }
            else {
                console.error('Failed to match any element with logo parent selector.');
                return;
            }
        }
    }
    const patchTrafficLights = () => {
        const method = new TrafficBarTitle();
        TrafficBarModifier.init(method);
    };
    patchTrafficLights();
}
TrafficBarLoader();
// injectFunctions(TrafficBarLoader)


/***/ }),

/***/ "./user.css":
/*!******************!*\
  !*** ./user.css ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./user.css */ "../../../node_modules/css-loader/dist/cjs.js!./user.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdXNlci5jc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kaXNrMC9naXQubG9jYWwvbmF0aXZlZmllci9uYXRpdmVmaWVyLXNpdGVzL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kaXNrMC9naXQubG9jYWwvbmF0aXZlZmllci9uYXRpdmVmaWVyLXNpdGVzL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9jbGlwYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHJhZmZpY0xpZ2h0cy50cyIsIndlYnBhY2s6Ly8vLi91c2VyLmNzcz9mODc0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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YUFBYSxFIiwiZmlsZSI6InJlZ2V4MTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290XFxue1xcbiAgICAtLW1vbm9zcGFjZS1mb250OiBJb3NldmthIEV4cGFuZGVkLCBJb3NldmthIEV4dGVuZGVkLCBJb3NldmthLWV4dGVuZGVkLCBJb3NldmthIFRlcm0gRXh0ZW5kZWQsIElvc2V2a2EsIG1vbm9zcGFjZTtcXG4gICAgLS13aGl0ZXNwYWNlLWNoYXItb3BhY2l0eTogMC4xO1xcbn1cXG5cXG4uQ29kZU1pcnJvci1zaG93LXdoaXRlc3BhY2UgPiAuQ29kZU1pcnJvclxcbntcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlLWZvbnQpXFxufVxcbi5Db2RlTWlycm9yLXNob3ctd2hpdGVzcGFjZSA+IC5Db2RlTWlycm9yOjotd2Via2l0LXNjcm9sbGJhclxcbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLkNvZGVNaXJyb3Itc2hvdy13aGl0ZXNwYWNlID4gLkNvZGVNaXJyb3IgW2NsYXNzJD1cXFwic2Nyb2xsYmFyXFxcIl1cXG57XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbn1cXG4uQ29kZU1pcnJvci1zaG93LXdoaXRlc3BhY2UgPiAuQ29kZU1pcnJvciBzcGFuLmNtLW92ZXJsYXkuY20tc3BhY2U6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiBcXFwiXFxcIiDigKQgXFxcIlxcXCIgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNiOWI5YjkgIWltcG9ydGFudDtcXG4gICAgb3BhY2l0eTogMjAlICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcXG59XFxuLkNvZGVNaXJyb3Itc2hvdy13aGl0ZXNwYWNlID4gLkNvZGVNaXJyb3IgLkNvZGVNaXJyb3ItbGluZTpub3QoOmxhc3QtY2hpbGQpID4gc3BhbjphZnRlclxcbntcXG4gICAgY29udGVudDogXFxcIuKBi1xcXCIgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDtcXG4gICAgb3BhY2l0eTogdmFyKC0td2hpdGVzcGFjZS1jaGFyLW9wYWNpdHkpICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcXG59XFxuXFxuI3JlZ2V4LWFwcCA+IGRpdiA+IGhlYWRlciA+IGEuZGFyd2luXFxue1xcbiAgICBwYWRkaW5nLXRvcDogMjdweFxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vdXNlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksaUhBQWlIO0lBQ2pILDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckI7QUFDSjtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtEQUFrRDtJQUNsRCwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUk7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdFxcbntcXG4gICAgLS1tb25vc3BhY2UtZm9udDogSW9zZXZrYSBFeHBhbmRlZCwgSW9zZXZrYSBFeHRlbmRlZCwgSW9zZXZrYS1leHRlbmRlZCwgSW9zZXZrYSBUZXJtIEV4dGVuZGVkLCBJb3NldmthLCBtb25vc3BhY2U7XFxuICAgIC0td2hpdGVzcGFjZS1jaGFyLW9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLkNvZGVNaXJyb3Itc2hvdy13aGl0ZXNwYWNlID4gLkNvZGVNaXJyb3JcXG57XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZS1mb250KVxcbn1cXG4uQ29kZU1pcnJvci1zaG93LXdoaXRlc3BhY2UgPiAuQ29kZU1pcnJvcjo6LXdlYmtpdC1zY3JvbGxiYXJcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5Db2RlTWlycm9yLXNob3ctd2hpdGVzcGFjZSA+IC5Db2RlTWlycm9yIFtjbGFzcyQ9XFxcInNjcm9sbGJhclxcXCJdXFxue1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcXG59XFxuLkNvZGVNaXJyb3Itc2hvdy13aGl0ZXNwYWNlID4gLkNvZGVNaXJyb3Igc3Bhbi5jbS1vdmVybGF5LmNtLXNwYWNlOmJlZm9yZVxcbntcXG4gICAgY29udGVudDogXFxcIlxcXCIg4oCkIFxcXCJcXFwiICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjYjliOWI5ICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDIwJSAhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XFxufVxcbi5Db2RlTWlycm9yLXNob3ctd2hpdGVzcGFjZSA+IC5Db2RlTWlycm9yIC5Db2RlTWlycm9yLWxpbmU6bm90KDpsYXN0LWNoaWxkKSA+IHNwYW46YWZ0ZXJcXG57XFxuICAgIGNvbnRlbnQ6IFxcXCLigYtcXFwiICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IHZhcigtLXdoaXRlc3BhY2UtY2hhci1vcGFjaXR5KSAhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbiNyZWdleC1hcHAgPiBkaXYgPiBoZWFkZXIgPiBhLmRhcndpblxcbntcXG4gICAgcGFkZGluZy10b3A6IDI3cHhcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG4oKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGxvYWRDbGlwYm9hcmRGdW5jdGlvbnMoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSZWdleCgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuQ29kZU1pcnJvciAuQ29kZU1pcnJvci1zaXplciA+IGRpdiAuQ29kZU1pcnJvci1jb2RlIC5Db2RlTWlycm9yLWxpbmVgKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZUN1cnJlbnRSZWdleCgpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRDdXJyZW50UmVnZXgoKSkuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNhdmVDdXJyZW50UmVnZXhUb0NsaXBib2FyZEVzY2FwZWQoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBlc2NhcGVkID0gKF9hID0gZXNjYXBlQ3VycmVudFJlZ2V4KCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICAgICAgaWYgKCFlc2NhcGVkIHx8IGVzY2FwZWQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignTm8gY29udGVudCBleHRyYWN0ZWQuJyk7XG4gICAgICAgICAgICBjb3B5KGVzY2FwZWQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNhdmVDdXJyZW50UmVnZXhUb0NsaXBib2FyZCgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gKF9hID0gZ2V0Q3VycmVudFJlZ2V4KCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICAgICAgaWYgKCFyZWdleCB8fCByZWdleC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdObyBjb250ZW50IGV4dHJhY3RlZC4nKTtcbiAgICAgICAgICAgIGNvcHkocmVnZXgpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHsgd2luZG93LCBnbG9iYWxUaGlzIH0pLmZvckVhY2goKFtuYW1lLCBnbG9iYWxPYmpdKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBjbGlwYm9hcmQgZnVuY3Rpb25zIG9uIG9iamVjdCAlbycsIG5hbWUpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxPYmosIHtcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50UmVnZXgsXG4gICAgICAgICAgICAgICAgZXNjYXBlQ3VycmVudFJlZ2V4LFxuICAgICAgICAgICAgICAgIHNhdmVDdXJyZW50UmVnZXhUb0NsaXBib2FyZEVzY2FwZWQsXG4gICAgICAgICAgICAgICAgc2F2ZUN1cnJlbnRSZWdleFRvQ2xpcGJvYXJkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluamVjdENsaXBib2FyZEZ1bmN0aW9ucygpIHtcbiAgICAgICAgbGV0IGNsaXBib2FyZFNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgY2xpcGJvYXJkU2NyaXB0RWwudGV4dCA9IGxvYWRDbGlwYm9hcmRGdW5jdGlvbnMudG9TdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbGlwYm9hcmRTY3JpcHRFbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGlwYm9hcmQgZnVuY3Rpb24gbG9hZGVyIHNjcmlwdCBlbGVtZW50OlxcbiVvJywgY2xpcGJvYXJkU2NyaXB0RWwpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZyBsb2FkQ2xpcGJvYXJkRnVuY3Rpb25zJyk7XG4gICAgICAgIGxvYWRDbGlwYm9hcmRGdW5jdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25OYW1lQ2hlY2tlZCA9ICdzYXZlQ3VycmVudFJlZ2V4VG9DbGlwYm9hcmQnO1xuICAgICAgICBpZiAoIShmdW5jdGlvbk5hbWVDaGVja2VkIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2F2ZUN1cnJlbnRSZWdleFRvQ2xpcGJvYXJkIG5vdCBmb3VuZCBvbiB3aW5kb3cgb2JqZWN0LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluamVjdENsaXBib2FyZEZ1bmN0aW9ucygpO1xufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vY2xpcGJvYXJkLnRzXCIpO1xucmVxdWlyZShcIi4vdHJhZmZpY0xpZ2h0cy50c1wiKTtcbnJlcXVpcmUoXCIuL3VzZXIuY3NzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBpbmplY3RGdW5jdGlvbnMoZnVuYykge1xuICAgIGxldCBzY3JpcHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0RWwudGV4dCA9IGZ1bmMudG9TdHJpbmcoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICBjb25zb2xlLmxvZygnW0luamVjdCBGdW5jdGlvbl0gRnVuY3Rpb24gbG9hZGVyIHNjcmlwdCBlbGVtZW50OlxcbiVvJywgc2NyaXB0RWwpO1xuICAgIGNvbnNvbGUubG9nKCdbSW5qZWN0IEZ1bmN0aW9uXSBDYWxsaW5nIGZ1bmN0aW9uJyk7XG4gICAgZnVuYygpO1xufVxuZnVuY3Rpb24gVHJhZmZpY0JhckxvYWRlcigpIHtcbiAgICBjb25zdCBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4gICAgY2xhc3MgVHJhZmZpY0Jhck1vZGlmaWVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5ID0gMTAwMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclY1tUcmFmZmljQmFyTW9kaWZpZXJdJWMgQ3JlYXRlZCBJbnN0YW5jZScsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNjAwOycsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgaW5pdChtb2RpZmllcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyVjW1RyYWZmaWNCYXJNb2RpZmllcl0lYyBpbml0JywgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiA2MDA7JywgJycpO1xuICAgICAgICAgICAgaWYgKFRyYWZmaWNCYXJNb2RpZmllci5pc0RhcndpbigpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjW1RyYWZmaWNCYXJNb2RpZmllcl0lYyBBcHBseWluZyB0cmFmZmljIGxpZ2h0cyBtb2RpZmljYXRpb24gaW4gJWltcycsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNjAwOycsICcnLCBtb2RpZmllci5kZWxheSk7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXIuaW5qZWN0TG9nb0ZpeExvYWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjW1RyYWZmaWNCYXJNb2RpZmllcl0lYyBTa2lwcGluZyB0cmFmZmljIGxpZ2h0cyBtb2RpZmljYXRpb24nLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IDYwMDsnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGlzRGFyd2luKCkge1xuICAgICAgICAgICAgcmV0dXJuIC9NYWMgT1MgWC9pLnRlc3QoKG5hdmlnYXRvciB8fCB3aW5kb3cubmF2aWdhdG9yKS51c2VyQWdlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGluamVjdExvZ29GaXhMb2FkZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZXJUeXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgY29uc3QgYXR0YWNoID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgIGxvYWRlci50ZXh0ID0gYC8vIExvYWRlcjogJHtsb2FkZXJUeXBlfVxcbnNldFRpbWVvdXQoKCkgPT4ge1xcbmZ1bmN0aW9uICR7dGhpcy5hcHBseS50b1N0cmluZygpfVxcbmFwcGx5KCl9LCAke3RoaXMuZGVsYXl9KWA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjWyR7bG9hZGVyVHlwZX1dJWMgQ3JlYXRlZCBsb2dvIGZpeCBsb2FkZXIgc2NyaXB0IGVsZW1lbnQ6XFxuICVvYCwgJ2NvbG9yOiAjQzA4OyBmb250LXdlaWdodDogNjAwOycsICcnLCBsb2FkZXIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNbJHtsb2FkZXJUeXBlfV0lYyBBdHRhY2hpbmcgb24gJWNET01Db250ZW50TG9hZGVkJWM6XFxuICVvYCwgJ2NvbG9yOiAjQzA4OyBmb250LXdlaWdodDogNjAwOycsICcnLCAnZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMwMEM7JywgJycsIGF0dGFjaCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjWyR7bG9hZGVyVHlwZX1dJWMgQXR0YWNoaW5nIGltbWVkaWF0ZWx5OlxcbiAlb2AsICdjb2xvcjogI0MwODsgZm9udC13ZWlnaHQ6IDYwMDsnLCAnJywgYXR0YWNoKTtcbiAgICAgICAgICAgICAgICBhdHRhY2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXR0YWNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3MgVHJhZmZpY0JhclRpdGxlIGV4dGVuZHMgVHJhZmZpY0Jhck1vZGlmaWVyIHtcbiAgICAgICAgYXBwbHkoKSB7XG4gICAgICAgICAgICBjb25zdCBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgICAgIC8vIE9rIGFjdHVhbGx5IGRvIGl0IG5vd1xuICAgICAgICAgICAgY29uc3QgbG9nb0FuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZWdleC1hcHAgPiBkaXYgPiBoZWFkZXIgPiBhYCk7XG4gICAgICAgICAgICBpZiAobG9nb0FuY2hvciBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbG9nb0FuY2hvci5jbGFzc0xpc3QuYWRkKCdsb2dvLXBhcmVudCcsICdkYXJ3aW4nKTtcbiAgICAgICAgICAgICAgICBsb2dvQW5jaG9yLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjI1cHggIWltcG9ydGFudFwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclY1tUcmFmZmljQmFyTW9kaWZpZXJdJWMgQWRkZWQgY2xhc3NlcyB0byBsb2dvIHBhcmVudDpcXG4lbycsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNjAwOycsICcnLCBsb2dvQW5jaG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvZ29BbmNob3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRjaGVkIGVsZW1lbnQgaXMgbm90IGluc3RhbmNlIG9mIEhUTUxBbmNob3JFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBtYXRjaCBhbnkgZWxlbWVudCB3aXRoIGxvZ28gcGFyZW50IHNlbGVjdG9yLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXRjaFRyYWZmaWNMaWdodHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IG5ldyBUcmFmZmljQmFyVGl0bGUoKTtcbiAgICAgICAgVHJhZmZpY0Jhck1vZGlmaWVyLmluaXQobWV0aG9kKTtcbiAgICB9O1xuICAgIHBhdGNoVHJhZmZpY0xpZ2h0cygpO1xufVxuVHJhZmZpY0JhckxvYWRlcigpO1xuLy8gaW5qZWN0RnVuY3Rpb25zKFRyYWZmaWNCYXJMb2FkZXIpXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VzZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==