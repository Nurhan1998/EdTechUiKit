'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var get = require('lodash/get');
var isBoolean = require('lodash/isBoolean');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var cache$1 = require('@emotion/cache');
var react$1 = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isBoolean__default = /*#__PURE__*/_interopDefaultLegacy(isBoolean);
var jsxRuntime__default = /*#__PURE__*/_interopDefaultLegacy(jsxRuntime);
var react__default = /*#__PURE__*/_interopDefaultLegacy(react);
var cache__default = /*#__PURE__*/_interopDefaultLegacy(cache$1);
var react__default$1 = /*#__PURE__*/_interopDefaultLegacy(react$1);

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

var classnames = createCommonjsModule(function (module) {
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

var isBrowser = typeof document !== 'undefined';
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
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
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

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
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
    const ref = (0, react__default["default"].useRef)();
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

var cache = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TssCacheProvider = exports.useTssEmotionCache = exports.getDoExistsTssDefaultEmotionCacheMemoizedValue = exports.getTssDefaultEmotionCache = void 0;


const cache_1 = __importDefault(cache__default["default"]);
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
const context = (0, react__default["default"].createContext)(undefined);
function useTssEmotionCache() {
    const cacheExplicitlyProvidedForTss = (0, react__default["default"].useContext)(context);
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
    return (0, react__default["default"].useMemo)(() => mergeClasses(classes, classesOv, cx), [classes, classesOv, cx]);
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
                return (0, react__default["default"].useMemo)(() => {
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
                    return (0, react__default["default"].createElement)(tag, props, children);
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
        const Out = (0, react__default["default"].forwardRef)(function (props, ref) {
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

const reactEmotion = __importStar(react__default$1["default"]);
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

Object.defineProperty(exports, "keyframes", { enumerable: true, get: function () { return react__default$1["default"].keyframes; } });
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
    return (jsxRuntime.jsx("button", __assign({}, rest, { className: classnames(classes.mostButton, className) }, { children: children })));
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
                content: '292C',
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
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes.dialogWrapper, className, (_a = {},
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
    return (jsxRuntime.jsx("input", { type: type, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: classnames(classes.input, className) }));
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
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(className, classes.inputWrapper) }, { children: [jsxRuntime.jsx("p", __assign({ className: classes.label }, { children: label })), children, (error && value && isTouched) && error.map(function (item, idx) { return (jsxRuntime.jsx("p", __assign({ className: classes.error }, { children: item }), idx)); })] })));
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
    var _b = react.useState(false), isPasswordVisible = _b[0], setIsPasswordVisible = _b[1];
    var _c = react.useState(type || 'text'), fieldType = _c[0], setFieldType = _c[1];
    var passwordToggleType = react.useCallback(function () {
        setIsPasswordVisible(!isPasswordVisible);
        if (fieldType === 'text') {
            setFieldType('password');
        }
        else {
            setFieldType('text');
        }
    }, [setIsPasswordVisible, isPasswordVisible, fieldType, setFieldType]);
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes.passwordFieldWr, className) }, { children: [jsxRuntime.jsx("input", __assign({ type: fieldType, onChange: onChange, value: value, className: classes.input }, rest)), jsxRuntime.jsx("span", { className: classnames(classes.eyePassword, (_a = {},
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
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes.progressbar, className) }, { children: [jsxRuntime.jsx("div", __assign({ className: classes.progressbarWrapper, style: { width: width } }, { children: jsxRuntime.jsx("span", { className: classes.progressInnerWrapper, style: {
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
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes.searchWrapper, className) }, { children: [jsxRuntime.jsx("span", __assign({ onClick: onButtonClick, className: classes.searchIcon }, { children: color === 'white' ?
                    jsxRuntime.jsx(WhiteSearchIcon, {})
                    :
                        jsxRuntime.jsx(SearchIcon, {}) })), jsxRuntime.jsx("input", __assign({}, rest, { className: classes.searchInput }))] })));
};

var useStyles = makeStyles()(function (_a) {
    var fontWeights = _a.fontWeights;
    return ({
        userCardSection: {
            display: 'flex',
            height: '69px',
            flexDirection: 'column',
            width: '300px',
        },
        '@media screen and (min-width: $tablet-media)  and (max-width: $lg-media)': {
            userCardSection: {
                width: '270px',
                userCardSection_content: {
                    progressbar: {
                        progressbarText: {
                            fontSize: '14px',
                            fontWeight: fontWeights.semiBold
                        }
                    }
                }
            }
        }
    });
});

var CardInfoSection = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = useStyles().classes;
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes.userCardSection, className) }, { children: children })));
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
