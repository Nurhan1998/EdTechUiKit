'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var get = require('lodash/get');
var isBoolean = require('lodash/isBoolean');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isBoolean__default = /*#__PURE__*/_interopDefaultLegacy(isBoolean);

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".styles-module_most-button__FgGOj {\n  color: white;\n  background-color: #49A057;\n  border: none;\n  margin-top: 20px;\n  border-radius: 8px;\n  width: 280px;\n  height: 40px; }\n  .styles-module_most-button__FgGOj:active {\n    color: #b8c3d5; }\n";
var classes$3 = {"most-button":"styles-module_most-button__FgGOj"};
styleInject(css_248z$3);

var Button = function (props) {
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    return (jsxRuntime.jsx("button", __assign({}, rest, { className: classnames(classes$3.mostButton, className) }, { children: children }), void 0));
};

var css_248z$2 = ".styles-module_dialog-wrapper__yk6LW {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  justify-content: center;\n  align-items: center; }\n  .styles-module_dialog-wrapper__yk6LW.styles-module_visible__fV-L1 {\n    display: flex; }\n  .styles-module_dialog-wrapper__yk6LW.styles-module_invisible__zjc8Y {\n    display: none; }\n  .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 {\n    position: relative;\n    padding: 74px 21px 21px 21px;\n    width: 613px;\n    height: 198px;\n    background: #fafafa;\n    border-radius: 8px;\n    opacity: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between; }\n    .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 .styles-module_text__Z0eOq {\n      margin: 0 0 40px 0;\n      color: #85888B; }\n    .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 .styles-module_action-wrapper__ZcSwV {\n      display: flex;\n      justify-content: space-between;\n      width: 100%; }\n      .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 .styles-module_action-wrapper__ZcSwV button {\n        width: 280px;\n        height: 46px;\n        border: 1px solid #000000;\n        border-radius: 8px;\n        cursor: pointer; }\n        .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 .styles-module_action-wrapper__ZcSwV button:first-child {\n          background-color: #232323;\n          color: #fafafa; }\n        .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content__-Ci-7 .styles-module_action-wrapper__ZcSwV button:last-child {\n          background-color: #fafafa;\n          color: #232323; }\n    .styles-module_dialog-wrapper__yk6LW .styles-module_dialog-content_close__SILig::after {\n      top: 15px;\n      right: 15px;\n      position: absolute;\n      content: \"\\00d7\";\n      cursor: pointer; }\n";
var classes$2 = {"dialog-wrapper":"styles-module_dialog-wrapper__yk6LW","visible":"styles-module_visible__fV-L1","invisible":"styles-module_invisible__zjc8Y","dialog-content":"styles-module_dialog-content__-Ci-7","text":"styles-module_text__Z0eOq","action-wrapper":"styles-module_action-wrapper__ZcSwV","dialog-content_close":"styles-module_dialog-content_close__SILig"};
styleInject(css_248z$2);

var Dialog = function (props) {
    var _a;
    var text = props.text, _b = props.confirmText, confirmText = _b === void 0 ? 'Accept' : _b, _c = props.rejectText, rejectText = _c === void 0 ? 'Decline' : _c, isOpen = props.isOpen, className = props.className, close = props.close, onConfirmAction = props.onConfirmAction, onRejectAction = props.onRejectAction;
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes$2.dialogWrapper, className, (_a = {},
            _a[classes$2.invisible] = !isOpen,
            _a[classes$2.visible] = isOpen,
            _a)) }, { children: jsxRuntime.jsxs("div", __assign({ className: classes$2.dialogContent }, { children: [jsxRuntime.jsx("span", { className: classes$2.dialogContent_close, onClick: close }, void 0), jsxRuntime.jsx("p", __assign({ className: classes$2.text }, { children: text }), void 0), jsxRuntime.jsxs("div", __assign({ className: classes$2.actionWrapper }, { children: [jsxRuntime.jsx("button", __assign({ onClick: onConfirmAction }, { children: confirmText }), void 0), jsxRuntime.jsx("button", __assign({ onClick: onRejectAction }, { children: rejectText }), void 0)] }), void 0)] }), void 0) }), void 0));
};

var css_248z$1 = ".styles-module_input__KRJnF {\n  padding-left: 10px;\n  height: 46px;\n  width: 100%;\n  background: #A5A5A5;\n  border: none;\n  border-radius: 8px; }\n  .styles-module_input__KRJnF:focus-visible {\n    border: none; }\n  .styles-module_input__KRJnF::placeholder {\n    color: #D2D2D2; }\n  .styles-module_input__KRJnF:focus {\n    outline: none; }\n  .styles-module_input__KRJnF:disabled {\n    color: #818181; }\n";
var classes$1 = {"input":"styles-module_input__KRJnF"};
styleInject(css_248z$1);

var Input = function (_a) {
    var inputProps = _a.inputProps, value = _a.value, onChange = _a.onChange;
    var className = inputProps.className, type = inputProps.type, placeholder = inputProps.placeholder, onFocus = inputProps.onFocus, onBlur = inputProps.onBlur, disabled = inputProps.disabled;
    return (jsxRuntime.jsx("input", { type: type, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: classnames(classes$1.input, className) }, void 0));
};

var css_248z = ".styles-module_inputWrapper__0d8w8 {\n  margin: 20px 0;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .styles-module_inputWrapper__0d8w8 .styles-module_label__-RvO9 {\n    align-self: flex-start;\n    margin: 0 0 5px 0;\n    font-size: 12px;\n    font-family: Rubik;\n    color: white; }\n  .styles-module_inputWrapper__0d8w8 .styles-module_error__pXe6s {\n    font-size: 12px;\n    color: red;\n    margin: 5px 0px 0px 0px;\n    align-self: flex-start; }\n";
var classes = {"inputWrapper":"styles-module_inputWrapper__0d8w8","label":"styles-module_label__-RvO9","error":"styles-module_error__pXe6s"};
styleInject(css_248z);

var InputWrapper = function (props) {
    var error = props.error, label = props.label, isTouched = props.isTouched, children = props.children, className = props.className, value = props.value;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(className, classes.inputWrapper) }, { children: [jsxRuntime.jsx("p", __assign({ className: classes.label }, { children: label }), void 0), children, (error && value && isTouched) && error.map(function (item, idx) { return (jsxRuntime.jsx("p", __assign({ className: classes.error }, { children: item }), idx)); })] }), void 0));
};

exports.Button = Button;
exports.Dialog = Dialog;
exports.Input = Input;
exports.InputWrapper = InputWrapper;
exports.buildFormData = buildFormData;
exports.createAction = createAction;
exports.createReducer = createReducer;
exports.generatePaginationItems = generatePaginationItems;
exports.getPageRange = getPageRange;
exports.safeGet = safeGet;
//# sourceMappingURL=index.js.map
