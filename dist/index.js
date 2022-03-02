'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var get = require('lodash/get');
var isBoolean = require('lodash/isBoolean');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isBoolean__default = /*#__PURE__*/_interopDefaultLegacy(isBoolean);
var jsxRuntime__default = /*#__PURE__*/_interopDefaultLegacy(jsxRuntime);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var createAction = function (actionType) {
    return function (payload) { return ({
        type: actionType,
        payload: payload,
    }); };
};

var combineChanges = (function (changes) {
    return function (curState, action) {
        return changes.reduce(function (state, reducer) { return reducer(state, action); }, curState);
    };
});

var applyHandler = function (handlers, action, state) {
    return handlers.hasOwnProperty(action.type)
        ? Array.isArray(handlers[action.type])
            ? combineChanges(handlers[action.type])(state, action)
            : handlers[action.type](state, action)
        : state;
};
var createReducer = function (initialState, handlers) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        return applyHandler(handlers, action, state);
    };
};

var buildFormData = function (values) {
    var formData = new FormData();
    for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = values[key];
        if (value === undefined)
            continue;
        formData.append(key, value);
    }
    return formData;
};

var getPageRange = function (totalSize, pageSize) {
    var pageCount = Math.floor(totalSize / pageSize);
    return new Array(pageCount).fill(null).map(function (_, idx) { return idx + 1; });
};
var generatePaginationItems = function (pageRange, currentPage) {
    return pageRange.map(function (page) {
        var numPages = pageRange.length;
        var activePageItem = {
            value: page,
            isActive: true,
        };
        if (page === currentPage) {
            return activePageItem;
        }
        if ((page <= 4 && currentPage <= 4) ||
            (page >= numPages - 4 && currentPage >= numPages - 4)) {
            return activePageItem;
        }
        if (page === 1 || page === numPages) {
            return activePageItem;
        }
        if ([1, 2].includes(currentPage - page) ||
            [1, 2].includes(page - currentPage)) {
            return activePageItem;
        }
        return {
            value: '...',
            isActive: false,
        };
    });
};

var safeGet = function (object, path, defaultValue) {
    var result = get__default["default"](object, path, defaultValue);
    if (isBoolean__default["default"](result) || result == 0)
        return result;
    return result || defaultValue;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames$1 = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var assert_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
/** https://docs.tsafe.dev/assert */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
exports.assert = assert;
});

unwrapExports(assert_1);
assert_1.assert;

var typeGuard_1 = createCommonjsModule(function (module, exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeGuard = void 0;
/** https://docs.tsafe.dev/typeguard */
function typeGuard(_value, isMatched) {
    return isMatched;
}
exports.typeGuard = typeGuard;
});

unwrapExports(typeGuard_1);
typeGuard_1.typeGuard;

var classnames_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.classnames = void 0;


/** Copy pasted from
 * https://github.com/emotion-js/emotion/blob/23f43ab9f24d44219b0b007a00f4ac681fe8712e/packages/react/src/class-names.js#L17-L63
 **/
const classnames = (args) => {
    const len = args.length;
    let i = 0;
    let cls = "";
    for (; i < len; i++) {
        const arg = args[i];
        if (arg == null)
            continue;
        let toAdd;
        switch (typeof arg) {
            case "boolean":
                break;
            case "object": {
                if (Array.isArray(arg)) {
                    toAdd = (0, exports.classnames)(arg);
                }
                else {
                    (0, assert_1.assert)(!(0, typeGuard_1.typeGuard)(arg, false));
                    if (process.env.NODE_ENV !== "production" &&
                        arg.styles !== undefined &&
                        arg.name !== undefined) {
                        console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n" +
                            "`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
                    }
                    toAdd = "";
                    for (const k in arg) {
                        if (arg[k] && k) {
                            toAdd && (toAdd += " ");
                            toAdd += k;
                        }
                    }
                }
                break;
            }
            default: {
                toAdd = arg;
            }
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};
exports.classnames = classnames;
});

unwrapExports(classnames_1);
classnames_1.classnames;

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var emotionSerialize_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  serializeStyles: serializeStyles
});

var isBrowser$3 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$3 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$3 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

var emotionUtils_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRegisteredStyles: getRegisteredStyles,
  insertStyles: insertStyles,
  registerStyles: registerStyles
});

var useGuaranteedMemo_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGuaranteedMemo = void 0;

/** Like react's useMemo but with guarantee that the fn
 * won't be invoked again if deps hasn't change */
function useGuaranteedMemo(fn, deps) {
    const ref = (0, React__default["default"].useRef)();
    if (!ref.current ||
        deps.length !== ref.current.prevDeps.length ||
        ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
        ref.current = {
            "v": fn(),
            "prevDeps": [...deps],
        };
    }
    return ref.current.v;
}
exports.useGuaranteedMemo = useGuaranteedMemo;
});

unwrapExports(useGuaranteedMemo_1);
useGuaranteedMemo_1.useGuaranteedMemo;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var e$1="-ms-";var r$1="-moz-";var a="-webkit-";var c$1="comm";var n$1="rule";var t$1="decl";var i="@import";var p$1="@keyframes";var k$1=Math.abs;var d$1=String.fromCharCode;var g$1=Object.assign;function m$1(e,r){return (((r<<2^z$1(e,0))<<2^z$1(e,1))<<2^z$1(e,2))<<2^z$1(e,3)}function x$1(e){return e.trim()}function y$1(e,r){return (e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function C(e,r){return e.indexOf(r)}function z$1(e,r){return e.charCodeAt(r)|0}function A$1(e,r,a){return e.slice(r,a)}function O(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q$1(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:B,column:D,length:s,return:""}}function J(e,r){return g$1(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?z$1(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?z$1(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return z$1(H,F)}function Q(){return F}function R(e,r){return A$1(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=O(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x$1(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return "/*"+R(r,F-1)+"*"+d$1(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ce(e){return V(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var g="";var m=n;var x=t;var y=c;var z=g;while(w)switch(p=k,k=N()){case 40:if(p!=108&&z.charCodeAt(l-1)==58){if(C(z+=j(W(k),"&","&\f"),"&\f")!=-1)$=-1;break}case 34:case 39:case 91:z+=W(k);break;case 9:case 10:case 13:case 32:z+=Y(p);break;case 92:z+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(se(re(N(),Q()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=O(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&O(z)-l)S(h>32?ue(z+";",c,a,l-1):ue(j(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:S(y=te(z,r,a,f,o,n,u,g,m=[],x=[],l),t);if(k===123)if(o===0)ne(z,r,y,y,m,t,l,u,x);else switch(v){case 100:case 109:case 115:ne(e,y,y,c&&S(te(e,y,y,0,0,n,u,g,n,m=[],l),x),n,x,l,u,c?m:x);break;default:ne(z,y,y,y,[""],x,0,u,x);}}f=o=h=0,b=$=1,g=z="",l=s;break;case 58:l=1+O(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&L()==125)continue;switch(z+=d$1(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(O(z)-1)*$,$=1;break;case 64:if(P()===45)z+=W(N());v=P(),o=l=O(g=z+=ae(Q())),k++;break;case 45:if(p===45&&O(z)==2)b=0;}}return t}function te(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,g=A$1(e,v+1,v=k$1(w=u[b])),m=e;d<p;++d)if(m=x$1(w>0?h[d]+" "+g:j(g,/&\f/g,h[d])))f[$++]=m;return I(e,r,a,t===0?n$1:i,f,o,l)}function se(e,r,a){return I(e,r,a,c$1,d$1(K()),A$1(e,2,-2),0)}function ue(e,r,a,c){return I(e,r,a,t$1,A$1(e,0,c),A$1(e,c+1,-1),c)}function ie(c,n){switch(m$1(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r$1+c+e$1+c+c;case 6828:case 4268:return a+c+e$1+c+c;case 6165:return a+c+e$1+"flex-"+c+c;case 5187:return a+c+j(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e$1+"flex-$1$2")+c;case 5443:return a+c+e$1+"flex-item-"+j(c,/flex-|-self/,"")+c;case 4675:return a+c+e$1+"flex-line-pack"+j(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e$1+j(c,"shrink","negative")+c;case 5292:return a+c+e$1+j(c,"basis","preferred-size")+c;case 6060:return a+"box-"+j(c,"-grow","")+a+c+e$1+j(c,"grow","positive")+c;case 4554:return a+j(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return j(j(j(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return j(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e$1+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return j(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(c)-1-n>6)switch(z$1(c,n+1)){case 109:if(z$1(c,n+4)!==45)break;case 102:return j(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r$1+(z$1(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~C(c,"stretch")?ie(j(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z$1(c,n+1)!==115)break;case 6444:switch(z$1(c,O(c)-3-(~C(c,"!important")&&10))){case 107:return j(c,":",":"+a)+c;case 101:return j(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z$1(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e$1+"$2box$3")+c}break;case 5936:switch(z$1(c,n+11)){case 114:return a+c+e$1+j(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e$1+j(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e$1+j(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e$1+c+c}return c}function fe(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function oe(e,r,a,s){switch(e.type){case i:case t$1:return e.return=e.return||e.value;case c$1:return "";case p$1:return e.return=e.value+"{"+fe(e.children,s)+"}";case n$1:e.value=e.props.join(",");}return O(a=fe(e.children,s))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function he(c,s,u,i){if(c.length>-1)if(!c.return)switch(c.type){case t$1:c.return=ie(c.value,c.length);break;case p$1:return fe([J(c,{value:j(c.value,"@","@"+a)})],i);case n$1:if(c.length)return q$1(c.props,(function(n){switch(y$1(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(c,{props:[j(n,/:(read-\w+)/,":"+r$1+"$1")]})],i);case"::placeholder":return fe([J(c,{props:[j(n,/:(plac\w+)/,":"+a+"input-$1")]}),J(c,{props:[j(n,/:(plac\w+)/,":"+r$1+"$1")]}),J(c,{props:[j(n,/:(plac\w+)/,e$1+"input-$1")]})],i)}return ""}))}}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (T(character)) {
      break;
    }

    N();
  }

  return R(begin, F);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(F - 1, points, index);
        break;

      case 2:
        parsed[index] += W(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d$1(character);
    }
  } while (character = N());

  return parsed;
};

var getRules = function getRules(value, points) {
  return V(toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser$2 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$2 ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [he];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser$2 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$2) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser$2) {
    var currentSheet;
    var finalizingPlugins = [oe, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== c$1) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return fe(ce(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [oe];

    var _serializer = le(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return fe(ce(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var cache = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TssCacheProvider = exports.useTssEmotionCache = exports.getDoExistsTssDefaultEmotionCacheMemoizedValue = exports.getTssDefaultEmotionCache = void 0;


const cache_1 = __importDefault(createCache);
_a = (() => {
    let cache = undefined;
    /**
     * Lazily initialized singleton
     * If doReset is set to true the memoized instance will be
     * discarded and a new one created.
     * */
    function getTssDefaultEmotionCache(params) {
        const { doReset = false } = params !== null && params !== void 0 ? params : {};
        if (doReset) {
            cache = undefined;
        }
        if (cache === undefined) {
            cache = (0, cache_1.default)({ "key": "tss" });
        }
        return cache;
    }
    return {
        getTssDefaultEmotionCache,
        "getDoExistsTssDefaultEmotionCacheMemoizedValue": () => cache !== undefined,
    };
})(), exports.getTssDefaultEmotionCache = _a.getTssDefaultEmotionCache, exports.getDoExistsTssDefaultEmotionCacheMemoizedValue = _a.getDoExistsTssDefaultEmotionCacheMemoizedValue;
const context = (0, React__default["default"].createContext)(undefined);
function useTssEmotionCache() {
    const cacheExplicitlyProvidedForTss = (0, React__default["default"].useContext)(context);
    return cacheExplicitlyProvidedForTss !== null && cacheExplicitlyProvidedForTss !== void 0 ? cacheExplicitlyProvidedForTss : (0, exports.getTssDefaultEmotionCache)();
}
exports.useTssEmotionCache = useTssEmotionCache;
function TssCacheProvider(props) {
    const { children, value } = props;
    return (0, jsxRuntime__default["default"].jsx)(context.Provider, Object.assign({ value: value }, { children: children }), void 0);
}
exports.TssCacheProvider = TssCacheProvider;
});

unwrapExports(cache);
cache.TssCacheProvider;
cache.useTssEmotionCache;
cache.getDoExistsTssDefaultEmotionCacheMemoizedValue;
cache.getTssDefaultEmotionCache;

var types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchCSSObject = void 0;
function matchCSSObject(arg) {
    return (arg instanceof Object &&
        !("styles" in arg) &&
        !("length" in arg) &&
        !("__emotion_styles" in arg));
}
exports.matchCSSObject = matchCSSObject;
});

unwrapExports(types);
types.matchCSSObject;

var cssAndCx = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssAndCx = exports.createCssAndCx = void 0;






exports.createCssAndCx = (() => {
    function merge(registered, css, className) {
        const registeredStyles = [];
        const rawClassName = (0, emotionUtils_esm.getRegisteredStyles)(registered, registeredStyles, className);
        if (registeredStyles.length < 2) {
            return className;
        }
        return rawClassName + css(registeredStyles);
    }
    function createCssAndCx(params) {
        const { cache } = params;
        const css = (...args) => {
            const serialized = (0, emotionSerialize_esm.serializeStyles)(args, cache.registered);
            (0, emotionUtils_esm.insertStyles)(cache, serialized, false);
            const className = `${cache.key}-${serialized.name}`;
            scope: {
                const arg = args[0];
                if (!(0, types.matchCSSObject)(arg)) {
                    break scope;
                }
                increaseSpecificityToTakePrecedenceOverMediaQuerries.saveClassNameCSSObjectMapping(cache, className, arg);
            }
            return className;
        };
        const cx = (...args) => {
            const className = (0, classnames_1.classnames)(args);
            const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQuerries.fixClassName(cache, className, css);
            return merge(cache.registered, css, feat27FixedClassnames);
            //return merge(cache.registered, css, className);
        };
        return { css, cx };
    }
    return { createCssAndCx };
})().createCssAndCx;
/** Will pickup the contextual cache if any */
function useCssAndCx() {
    const cache$1 = (0, cache.useTssEmotionCache)();
    const { css, cx } = (0, useGuaranteedMemo_1.useGuaranteedMemo)(() => (0, exports.createCssAndCx)({ cache: cache$1 }), [cache$1]);
    return { css, cx };
}
exports.useCssAndCx = useCssAndCx;
// https://github.com/garronej/tss-react/issues/27
const increaseSpecificityToTakePrecedenceOverMediaQuerries = (() => {
    const cssObjectMapByCache = new WeakMap();
    return {
        "saveClassNameCSSObjectMapping": (cache, className, cssObject) => {
            let cssObjectMap = cssObjectMapByCache.get(cache);
            if (cssObjectMap === undefined) {
                cssObjectMap = new Map();
                cssObjectMapByCache.set(cache, cssObjectMap);
            }
            cssObjectMap.set(className, cssObject);
        },
        "fixClassName": (() => {
            function fix(classNameCSSObjects) {
                let isThereAnyMediaQueriesInPreviousClasses = false;
                return classNameCSSObjects.map(([className, cssObject]) => {
                    if (cssObject === undefined) {
                        return className;
                    }
                    let out;
                    if (!isThereAnyMediaQueriesInPreviousClasses) {
                        out = className;
                        for (const key in cssObject) {
                            if (key.startsWith("@media")) {
                                isThereAnyMediaQueriesInPreviousClasses = true;
                                break;
                            }
                        }
                    }
                    else {
                        out = {
                            "&&": cssObject,
                        };
                    }
                    return out;
                });
            }
            return (cache, className, css) => {
                const cssObjectMap = cssObjectMapByCache.get(cache);
                return (0, classnames_1.classnames)(fix(className
                    .split(" ")
                    .map(className => [
                    className,
                    cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className),
                ])).map(classNameOrCSSObject => typeof classNameOrCSSObject === "string"
                    ? classNameOrCSSObject
                    : css(classNameOrCSSObject)));
            };
        })(),
    };
})();
});

unwrapExports(cssAndCx);
cssAndCx.useCssAndCx;
cssAndCx.createCssAndCx;

var objectKeys_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeys = void 0;
/** Object.keys() with types */
function objectKeys(o) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(o);
}
exports.objectKeys = objectKeys;
});

unwrapExports(objectKeys_1);
objectKeys_1.objectKeys;

var mergeClasses_1 = createCommonjsModule(function (module, exports) {
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergedClasses = exports.mergeClasses = void 0;



function mergeClasses(classesFromUseStyles, classesFromProps, cx) {
    //NOTE: We use !(not) to be resilient for when it is used in withStyle
    //where classes fromFromProps could diverge from the canonical type...
    if (!classesFromProps) {
        return classesFromUseStyles;
    }
    const out = {};
    (0, objectKeys_1.objectKeys)(classesFromUseStyles).forEach(ruleName => (out[ruleName] = cx(classesFromUseStyles[ruleName], classesFromProps[ruleName])));
    (0, objectKeys_1.objectKeys)(classesFromProps).forEach(ruleName => {
        if (ruleName in classesFromUseStyles) {
            return;
        }
        const className = classesFromProps[ruleName];
        //...Same here, that why we don't do className === undefined
        if (typeof className !== "string") {
            return;
        }
        out[ruleName] = className;
    });
    return out;
}
exports.mergeClasses = mergeClasses;
function useMergedClasses(classes, classesOv) {
    const { cx } = (0, cssAndCx.useCssAndCx)();
    return (0, React__default["default"].useMemo)(() => mergeClasses(classes, classesOv, cx), [classes, classesOv, cx]);
}
exports.useMergedClasses = useMergedClasses;
});

unwrapExports(mergeClasses_1);
mergeClasses_1.useMergedClasses;
mergeClasses_1.mergeClasses;

var Object_fromEntries = createCommonjsModule(function (module, exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectFromEntries = void 0;
exports.objectFromEntries = !Object
    .fromEntries
    ? (entries) => {
        if (!entries || !entries[Symbol.iterator]) {
            throw new Error("Object.fromEntries() requires a single iterable argument");
        }
        const o = {};
        Object.keys(entries).forEach(key => {
            const [k, v] = entries[key];
            o[k] = v;
        });
        return o;
    }
    : Object.fromEntries;
});

unwrapExports(Object_fromEntries);
Object_fromEntries.objectFromEntries;

var getDependencyArrayRef_1 = createCommonjsModule(function (module, exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDependencyArrayRef = void 0;
/**
 * useEffect(
 *    ()=> { ... },
 *    [ { "foo": "bar" } ]
 * )
 * => The callback will be invoked every render.
 * because { "foo": "bar" } is a new instance every render.
 *
 * useEffect(
 *    ()=> { ... },
 *    [ getDependencyArrayRef({ "foo": "bar" }) ]
 * );
 * => The callback will only be invoked once.
 *
 * The optimization will be enabled only if obj is
 * of the form Record<string, string | number | undefined | null>
 * overwise the object is returned (the function is the identity function).
 */
function getDependencyArrayRef(obj) {
    if (!(obj instanceof Object) || typeof obj === "function") {
        return obj;
    }
    const arr = [];
    for (const key in obj) {
        const value = obj[key];
        const typeofValue = typeof value;
        if (!(typeofValue === "string" ||
            (typeofValue === "number" && !isNaN(value)) ||
            typeofValue === "boolean" ||
            value === undefined ||
            value === null)) {
            return obj;
        }
        arr.push(`${key}:${typeofValue}_${value}`);
    }
    return "xSqLiJdLMd9s" + arr.join("|");
}
exports.getDependencyArrayRef = getDependencyArrayRef;
});

unwrapExports(getDependencyArrayRef_1);
getDependencyArrayRef_1.getDependencyArrayRef;

var makeStyles$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMakeStyles = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */








const getCounter = (() => {
    let counter = 0;
    return () => counter++;
})();
function createMakeStyles(params) {
    const { useTheme } = params;
    /** returns useStyle. */
    function makeStyles(params) {
        const { name: nameOrWrappedName } = params !== null && params !== void 0 ? params : {};
        const name = typeof nameOrWrappedName !== "object"
            ? nameOrWrappedName
            : Object.keys(nameOrWrappedName)[0];
        return function (cssObjectByRuleNameOrGetCssObjectByRuleName) {
            const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName ===
                "function"
                ? cssObjectByRuleNameOrGetCssObjectByRuleName
                : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
            const outerCounter = getCounter();
            return function useStyles(params) {
                const theme = useTheme();
                const { css, cx } = (0, cssAndCx.useCssAndCx)();
                const cache$1 = (0, cache.useTssEmotionCache)();
                return (0, React__default["default"].useMemo)(() => {
                    const refClassesCache = {};
                    const refClasses = typeof Proxy !== "undefined" &&
                        new Proxy({}, {
                            "get": (_target, propertyKey) => {
                                if (typeof propertyKey === "symbol") {
                                    (0, assert_1.assert)(false);
                                }
                                return (refClassesCache[propertyKey] = `${cache$1.key}-${outerCounter}${name !== undefined ? `-${name}` : ""}-${propertyKey}-ref`);
                            },
                        });
                    const cssObjectByRuleName = getCssObjectByRuleName(theme, params, refClasses || {});
                    const classes = (0, Object_fromEntries.objectFromEntries)((0, objectKeys_1.objectKeys)(cssObjectByRuleName).map(ruleName => {
                        const cssObject = cssObjectByRuleName[ruleName];
                        if (!cssObject.label) {
                            cssObject.label = `${name !== undefined ? `${name}-` : ""}${ruleName}`;
                        }
                        return [
                            ruleName,
                            `${css(cssObject)}${(0, typeGuard_1.typeGuard)(ruleName, ruleName in refClassesCache)
                                ? ` ${refClassesCache[ruleName]}`
                                : ""}`,
                        ];
                    }));
                    (0, objectKeys_1.objectKeys)(refClassesCache).forEach(ruleName => {
                        if (ruleName in classes) {
                            return;
                        }
                        classes[ruleName] =
                            refClassesCache[ruleName];
                    });
                    return {
                        classes,
                        theme,
                        css,
                        cx,
                    };
                }, [cache$1, css, cx, theme, (0, getDependencyArrayRef_1.getDependencyArrayRef)(params)]);
            };
        };
    }
    function useStyles() {
        const theme = useTheme();
        const { css, cx } = (0, cssAndCx.useCssAndCx)();
        return { theme, css, cx };
    }
    return { makeStyles, useStyles };
}
exports.createMakeStyles = createMakeStyles;
});

unwrapExports(makeStyles$1);
makeStyles$1.createMakeStyles;

var capitalize_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/** @see <https://docs.tsafe.dev/capitalize> */
function capitalize(str) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (str.charAt(0).toUpperCase() + str.slice(1));
}
exports.capitalize = capitalize;
});

unwrapExports(capitalize_1);
capitalize_1.capitalize;

var withStyles = createCommonjsModule(function (module, exports) {
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithStyles = void 0;

/* eslint-disable @typescript-eslint/no-explicit-any */




function createWithStyles(params) {
    const { useTheme } = params;
    const { makeStyles } = (0, makeStyles$1.createMakeStyles)({ useTheme });
    function withStyles(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params) {
        const Component_ = typeof Component === "string"
            ? (() => {
                const tag = Component;
                const Out = function (_a) {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return (0, React__default["default"].createElement)(tag, props, children);
                };
                Object.defineProperty(Out, "name", {
                    "value": (0, capitalize_1.capitalize)(tag),
                });
                return Out;
            })()
            : Component;
        const name = (() => {
            const { name } = Component_;
            return typeof name === "string" ? name : undefined;
        })();
        const useStyles = makeStyles((params === null || params === void 0 ? void 0 : params.name) !== undefined ? params : { name })(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function"
            ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes))
            : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Out = (0, React__default["default"].forwardRef)(function (props, ref) {
            const { className, classes: classesFromProps } = props, rest = __rest(props, ["className", "classes"]);
            // eslint-disable-next-line prefer-const
            let { classes, cx } = useStyles(props);
            classes = (0, mergeClasses_1.useMergedClasses)(classes, classesFromProps || undefined);
            return ((0, jsxRuntime__default["default"].jsx)(Component_, Object.assign({ ref: ref, className: cx(classes.root, className) }, (typeof Component === "string" ? {} : { classes }), rest), void 0));
        });
        if (name !== undefined) {
            Object.defineProperty(Out, "name", {
                "value": `${name}WithStyles`,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Out;
    }
    return { withStyles };
}
exports.createWithStyles = createWithStyles;
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
    const cssObjectByRuleName = {};
    const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
    Object.keys(cssObjectByRuleNameWithMediaQueries).forEach(ruleNameOrMediaQuery => ((ruleNameOrMediaQuery.startsWith("@media")
        ? cssObjectByRuleNameWithMediaQueriesByMediaQuery
        : cssObjectByRuleName)[ruleNameOrMediaQuery] =
        cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]));
    Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach(mediaQuery => {
        const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
        Object.keys(cssObjectByRuleNameBis).forEach(ruleName => {
            var _a;
            return (cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, ((_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {})), { [mediaQuery]: cssObjectByRuleNameBis[ruleName] }));
        });
    });
    return cssObjectByRuleName;
}
});

unwrapExports(withStyles);
withStyles.createWithStyles;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics$2(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics$2(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics$2;

// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoistNonReactStatics_cjs(targetComponent, sourceComponent);
});

var hoistNonReactStatics$1 = hoistNonReactStatics;

var isBrowser$1 = typeof document !== 'undefined';
var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return React.useContext(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = React.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = React.useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme$1 = function useTheme() {
  return React.useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (process.env.NODE_ENV !== 'production' && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if (process.env.NODE_ENV !== 'production' && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return _extends({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = React.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = React.useContext(ThemeContext);
    return /*#__PURE__*/React.createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/React.forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics$1(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var isBrowser$1$1 = typeof document !== 'undefined';
var useInsertionEffect$1 = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  if (!isBrowser$1$1) {
    return create();
  }

  useInsertionEffect$1(create);
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (process.env.NODE_ENV !== 'production' && !!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, React.useContext(ThemeContext));

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion$1, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/React.createElement(WrappedComponent, newProps));
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(_extends_1);

var pkg = {
	name: "@emotion/react",
	version: "11.8.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/babel-plugin": "^11.7.1",
		"@emotion/cache": "^11.7.1",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.1.0",
		"@emotion/utils": "^1.1.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.7.1",
		"@emotion/css-prettifier": "1.0.1",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.8.1",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return React.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return React.createElement.apply(null, createElementArgArray);
};

var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : React.useLayoutEffect;
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, React.useContext(ThemeContext));

  if (!isBrowser$1) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = React.useRef();
  useInsertionEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (process.env.NODE_ENV !== 'production' && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectMaybe(function () {
    var rules = '';

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);

      if (!isBrowser$1 && res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$1) {
      return rules;
    }
  });

  if (!isBrowser$1 && rules.length !== 0) {
    var _ref2;

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: React.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (process.env.NODE_ENV !== 'production') {
  ClassNames.displayName = 'EmotionClassNames';
}

if (process.env.NODE_ENV !== 'production') {
  var isBrowser = typeof document !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}

var emotionReact_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ClassNames: ClassNames,
  Global: Global,
  createElement: jsx,
  css: css,
  jsx: jsx,
  keyframes: keyframes,
  CacheProvider: CacheProvider,
  ThemeContext: ThemeContext,
  ThemeProvider: ThemeProvider,
  __unsafe_useEmotionCache: __unsafe_useEmotionCache,
  useTheme: useTheme$1,
  get withEmotionCache () { return withEmotionCache; },
  withTheme: withTheme
});

var GlobalStyles_1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;

const reactEmotion = __importStar(emotionReact_esm);
function GlobalStyles(props) {
    const { styles } = props;
    return (0, jsxRuntime__default["default"].jsx)(reactEmotion.Global, { styles: reactEmotion.css(styles) }, void 0);
}
exports.GlobalStyles = GlobalStyles;
});

unwrapExports(GlobalStyles_1);
GlobalStyles_1.GlobalStyles;

var tssReact = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMakeAndWithStyles = exports.TssCacheProvider = exports.getTssDefaultEmotionCache = exports.GlobalStyles = exports.keyframes = exports.createWithStyles = exports.createMakeStyles = exports.useMergedClasses = exports.useCssAndCx = void 0;
/** @see <https://docs.tss-react.dev/api-references> */

Object.defineProperty(exports, "useCssAndCx", { enumerable: true, get: function () { return cssAndCx.useCssAndCx; } });

Object.defineProperty(exports, "useMergedClasses", { enumerable: true, get: function () { return mergeClasses_1.useMergedClasses; } });

Object.defineProperty(exports, "createMakeStyles", { enumerable: true, get: function () { return makeStyles$1.createMakeStyles; } });

Object.defineProperty(exports, "createWithStyles", { enumerable: true, get: function () { return withStyles.createWithStyles; } });
/** @see <https://docs.tss-react.dev/api-references/keyframes> */

Object.defineProperty(exports, "keyframes", { enumerable: true, get: function () { return emotionReact_esm.keyframes; } });
/** @see <https://docs.tss-react.dev/api-references/globalstyles> */

Object.defineProperty(exports, "GlobalStyles", { enumerable: true, get: function () { return GlobalStyles_1.GlobalStyles; } });
/** @see <https://docs.tss-react.dev/cache> */

Object.defineProperty(exports, "getTssDefaultEmotionCache", { enumerable: true, get: function () { return cache.getTssDefaultEmotionCache; } });
Object.defineProperty(exports, "TssCacheProvider", { enumerable: true, get: function () { return cache.TssCacheProvider; } });
/** @see <https://docs.tss-react.dev/api-references/makestyles-usestyles> */
function createMakeAndWithStyles(params) {
    return Object.assign(Object.assign({}, (0, makeStyles$1.createMakeStyles)(params)), (0, withStyles.createWithStyles)(params));
}
exports.createMakeAndWithStyles = createMakeAndWithStyles;
});

unwrapExports(tssReact);
tssReact.createMakeAndWithStyles;
tssReact.TssCacheProvider;
tssReact.getTssDefaultEmotionCache;
tssReact.GlobalStyles;
tssReact.keyframes;
tssReact.createWithStyles;
var tssReact_7 = tssReact.createMakeStyles;
tssReact.useMergedClasses;
tssReact.useCssAndCx;

var useTheme = function () { return ({
    palette: {
        primary: '#49A057',
        secondary: '#307AF6',
        lightGrey: '#b8c3d5',
        light: '#f2f2f2',
        white: '#ffffff',
        black: '#000000',
        secondaryBlack: '#232323',
        alabaster: '#fafafa',
        searchBackground: '#E5E5E5',
        superLightGrey: '#f3f3f3',
        blackSqueeze: '#f9fbfd',
        dark: '#1c2d41',
        primaryBlue: '#307AF6',
        darkGrey: '#A5A5A5',
        activeSideBar: '#EFEFEF',
        backgroundLight: '#F9F9F9',
        primaryColor: '#22ca80',
        secondaryColor: '#7c8798',
        borderColor: '#edf2f9',
        textGreyPlaceholder: '#D2D2D2',
        textColorGrey: '#818181',
        textColorLightGrey: '#85888B'
    },
    spacing: {
        sm: '4px',
        unit: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        circle: '50%',
        round: '55px'
    },
    mostFont: 'Rubik',
    boxShadows: {
        bsBoxShadow: '0px 2px 17px rgba(120, 120, 120, 0.1)',
        bsBoxShadowHover: '0px 2px 10px rgba(69, 71, 99, 0.25)',
        bsBoxShadowDark: '0px 4px 10px rgba(69, 71, 99, 0.6)',
    },
    fontWeights: {
        bold: 700,
        semiBold: 500,
    }
}); };
var makeStyles = tssReact_7({ useTheme: useTheme }).makeStyles;

var useStyles$7 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        mostButton: {
            color: 'white',
            backgroundColor: palette.primary,
            border: 'none',
            marginTop: spacing.xl,
            borderRadius: spacing.unit,
            width: '280px',
            height: '40px',
            '&:active': {
                color: palette.lightGrey
            }
        },
    });
});

var Button = function (props) {
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    var classes = useStyles$7().classes;
    return (jsxRuntime.jsx("button", __assign({}, rest, { className: classnames$1(classes.mostButton, className) }, { children: children })));
};

var useStyles$6 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        dialogWrapper: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
        },
        visible: {
            display: 'flex'
        },
        invisible: {
            display: 'none'
        },
        dialogContent: {
            position: 'relative',
            padding: '74px 21px 21px 21px',
            width: '613px',
            height: '198px',
            background: palette.alabaster,
            borderRadius: spacing.unit,
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        text: {
            margin: '0 0 40px 0',
            color: palette.textColorLightGrey,
        },
        actionWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            button: {
                width: '280px',
                height: '46px',
                border: "1px solid ".concat(palette.black),
                borderRadius: spacing.unit,
                cursor: 'pointer',
                '&:first-child': {
                    backgroundColor: palette.secondaryBlack,
                    color: palette.alabaster,
                },
                '&:last-child': {
                    backgroundColor: palette.alabaster,
                    color: palette.secondaryBlack,
                },
            },
        },
        close: {
            '&::after': {
                top: '15px',
                right: '15px',
                position: 'absolute',
                content: '"292C"',
                cursor: 'pointer'
            }
        }
    });
});

var Dialog = function (props) {
    var _a;
    var text = props.text, _b = props.confirmText, confirmText = _b === void 0 ? 'Accept' : _b, _c = props.rejectText, rejectText = _c === void 0 ? 'Decline' : _c, isOpen = props.isOpen, className = props.className, close = props.close, onConfirmAction = props.onConfirmAction, onRejectAction = props.onRejectAction;
    var classes = useStyles$6().classes;
    var handleConfirm = function () {
        if (onConfirmAction) {
            onConfirmAction();
        }
        close();
    };
    var handleReject = function () {
        if (onRejectAction) {
            onRejectAction();
        }
        close();
    };
    return (jsxRuntime.jsx("div", __assign({ className: classnames$1(classes.dialogWrapper, className, (_a = {},
            _a[classes.invisible] = !isOpen,
            _a[classes.visible] = isOpen,
            _a)) }, { children: jsxRuntime.jsxs("div", __assign({ className: classes.dialogContent }, { children: [jsxRuntime.jsx("span", { className: classes.close, onClick: close }), jsxRuntime.jsx("p", __assign({ className: classes.text }, { children: text })), jsxRuntime.jsxs("div", __assign({ className: classes.actionWrapper }, { children: [jsxRuntime.jsx("button", __assign({ onClick: handleConfirm }, { children: confirmText })), jsxRuntime.jsx("button", __assign({ onClick: handleReject }, { children: rejectText }))] }))] })) })));
};

var useStyles$5 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        input: {
            paddingLeft: '10px',
            height: '46px',
            width: '100%',
            background: palette.darkGrey,
            border: 'none',
            borderRadius: spacing.unit,
            '&:focus-visible': {
                border: 'none',
            },
            '&::placeholder': {
                color: palette.textGreyPlaceholder
            },
            '&:focus': {
                outline: 'none',
            },
            '&:disabled': {
                color: palette.textColorGrey
            }
        }
    });
});

var Input = function (_a) {
    var inputProps = _a.inputProps, value = _a.value, onChange = _a.onChange;
    var classes = useStyles$5().classes;
    var className = inputProps.className, type = inputProps.type, placeholder = inputProps.placeholder, onFocus = inputProps.onFocus, onBlur = inputProps.onBlur, disabled = inputProps.disabled;
    return (jsxRuntime.jsx("input", { type: type, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: classnames$1(classes.input, className) }));
};

var useStyles$4 = makeStyles()(function (_a) {
    var palette = _a.palette; _a.spacing; var mostFont = _a.mostFont;
    return ({
        inputWrapper: {
            margin: '20px 0',
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        label: {
            alignSelf: 'flex-start',
            margin: '0 0 5px 0',
            fontSize: '12px',
            fontFamily: mostFont,
            color: palette.white,
        },
        error: {
            fontSize: '12px',
            color: 'red',
            margin: '5px 0px 0px 0px',
            alignSelf: 'flex-start',
        }
    });
});

var InputWrapper = function (props) {
    var error = props.error, label = props.label, isTouched = props.isTouched, children = props.children, className = props.className, value = props.value;
    var classes = useStyles$4().classes;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames$1(className, classes.inputWrapper) }, { children: [jsxRuntime.jsx("p", __assign({ className: classes.label }, { children: label })), children, (error && value && isTouched) && error.map(function (item, idx) { return (jsxRuntime.jsx("p", __assign({ className: classes.error }, { children: item }), idx)); })] })));
};

var useStyles$3 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        input: {
            paddingLeft: '9px',
            height: '46px',
            width: '100%',
            background: palette.darkGrey,
            border: 'none',
            borderRadius: spacing.unit,
            '&:focus-visible': {
                border: 'none',
            },
            '&::placeholder': {
                color: palette.textGreyPlaceholder,
            },
            '&:focus': {
                outline: 'none',
            },
            '&:disabled': {
                color: palette.textColorGrey,
            },
        },
        eyePassword: {
            position: 'absolute',
            right: '15px',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: spacing.circle,
            cursor: 'pointer',
        },
        dirty: {
            top: '49%',
        },
        clean: {
            top: '62%'
        },
        visible: {
            color: palette.white,
            backgroundImage: 'url(./assets/images/svg/eye.svg)',
        },
        invisible: {
            backgroundImage: 'url(./assets/images/svg/eye-slash.svg)',
        },
        passwordFieldWr: {
            width: '100%'
        }
    });
});

var PasswordField = function (props) {
    var _a;
    var inputProps = props.inputProps, error = props.error, onChange = props.onChange, value = props.value;
    var type = inputProps.type, className = inputProps.className, rest = __rest(inputProps, ["type", "className"]);
    var classes = useStyles$3().classes;
    var _b = React.useState(false), isPasswordVisible = _b[0], setIsPasswordVisible = _b[1];
    var _c = React.useState(type || 'text'), fieldType = _c[0], setFieldType = _c[1];
    var passwordToggleType = React.useCallback(function () {
        setIsPasswordVisible(!isPasswordVisible);
        if (fieldType === 'text') {
            setFieldType('password');
        }
        else {
            setFieldType('text');
        }
    }, [setIsPasswordVisible, isPasswordVisible, fieldType, setFieldType]);
    return (jsxRuntime.jsxs("div", __assign({ className: classnames$1(classes.passwordFieldWr, className) }, { children: [jsxRuntime.jsx("input", __assign({ type: fieldType, onChange: onChange, value: value, className: classes.input }, rest)), jsxRuntime.jsx("span", { className: classnames$1(classes.eyePassword, (_a = {},
                    _a[classes.invisible] = !isPasswordVisible,
                    _a[classes.visible] = isPasswordVisible,
                    _a[classes.dirty] = error === null || error === void 0 ? void 0 : error.length,
                    _a[classes.clean] = !(error === null || error === void 0 ? void 0 : error.length),
                    _a)), onClick: passwordToggleType })] })));
};

var useStyles$2 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        progressbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '530px',
            '&:active': {
                color: palette.lightGrey
            }
        },
        progressbarWrapper: {
            width: '90%',
            display: 'flex',
            backgroundColor: palette.light,
            borderRadius: spacing.sm,
            height: '3px',
            overflow: 'hidden',
        },
        progressInnerWrapper: {
            height: '3px',
            backgroundColor: palette.primary
        },
        progressBarText: {
            marginLeft: '10px'
        }
    });
});

var ProgressBar = function (props) {
    var current = props.current, max = props.max, _a = props.width, width = _a === void 0 ? 300 : _a, _b = props.color, color = _b === void 0 ? '#50C0E8' : _b, className = props.className;
    var classes = useStyles$2().classes;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames$1(classes.progressbar, className) }, { children: [jsxRuntime.jsx("div", __assign({ className: classes.progressbarWrapper, style: { width: width } }, { children: jsxRuntime.jsx("span", { className: classes.progressInnerWrapper, style: {
                        width: "".concat(current / max * 100, "%"),
                        backgroundColor: color
                    } }) })), jsxRuntime.jsx("span", __assign({ className: classes.progressBarText }, { children: current }))] })));
};

/*eslint-disable max-len*/
var WhiteSearchIcon = function () { return (jsxRuntime.jsxs("svg", __assign({ width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382", stroke: "#FFFFFF", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M19 19L15.71 15.71", stroke: "#FFFFFF", strokeLinecap: "round", strokeLinejoin: "round" })] }))); };

/*eslint-disable max-len*/
var SearchIcon = function () { return (jsxRuntime.jsxs("svg", __assign({ width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382", stroke: "#85888B", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M19 19L15.71 15.71", stroke: "#85888B", strokeLinecap: "round", strokeLinejoin: "round" })] }))); };

var useStyles$1 = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        searchWrapper: {
            position: 'relative',
        },
        searchIcon: {
            position: 'absolute',
            top: '20%',
            left: '5%',
        },
        searchInput: {
            paddingLeft: '45px',
            width: '218px',
            height: '32px',
            borderRadius: spacing.lg,
            border: "0.5px solid ".concat(palette.superLightGrey)
        }
    });
});

var SearchField = function (props) {
    var color = props.color, onButtonClick = props.onButtonClick, className = props.className, rest = __rest(props, ["color", "onButtonClick", "className"]);
    var classes = useStyles$1().classes;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames$1(classes.searchWrapper, className) }, { children: [jsxRuntime.jsx("span", __assign({ onClick: onButtonClick, className: classes.searchIcon }, { children: color === 'white' ?
                    jsxRuntime.jsx(WhiteSearchIcon, {})
                    :
                        jsxRuntime.jsx(SearchIcon, {}) })), jsxRuntime.jsx("input", __assign({}, rest, { className: classes.searchInput }))] })));
};

var useStyles = makeStyles()(function () { return ({
    userCardSection: {
        display: 'flex',
        height: '69px',
        flexDirection: 'column',
        width: '300px',
    }
}); });

var CardInfoSection = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = useStyles().classes;
    return (jsxRuntime.jsx("div", __assign({ className: classnames$1(classes.userCardSection, className) }, { children: children })));
};

exports.Button = Button;
exports.Dialog = Dialog;
exports.Input = Input;
exports.InputWrapper = InputWrapper;
exports.PasswordField = PasswordField;
exports.ProgressBar = ProgressBar;
exports.SearchField = SearchField;
exports.UserCardInfoSection = CardInfoSection;
exports.buildFormData = buildFormData;
exports.createAction = createAction;
exports.createReducer = createReducer;
exports.generatePaginationItems = generatePaginationItems;
exports.getPageRange = getPageRange;
exports.safeGet = safeGet;
//# sourceMappingURL=index.js.map
