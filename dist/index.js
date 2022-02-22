'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var get = require('lodash/get');
var isBoolean = require('lodash/isBoolean');
var jsxRuntime = require('react/jsx-runtime');
var classes$8 = require('styles.module.scss');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var isBoolean__default = /*#__PURE__*/_interopDefaultLegacy(isBoolean);
var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes$8);

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

var Button = function (props) {
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    return (jsxRuntime.jsx("button", __assign({}, rest, { className: classnames(classes__default["default"].mostButton, className) }, { children: children }), void 0));
};

var classes$7 = {"dialog-wrapper":"styles-module_dialog-wrapper__yk6LW","visible":"styles-module_visible__fV-L1","invisible":"styles-module_invisible__zjc8Y","dialog-content":"styles-module_dialog-content__-Ci-7","text":"styles-module_text__Z0eOq","action-wrapper":"styles-module_action-wrapper__ZcSwV","dialog-content_close":"styles-module_dialog-content_close__SILig"};

var Dialog = function (props) {
    var _a;
    var text = props.text, _b = props.confirmText, confirmText = _b === void 0 ? 'Accept' : _b, _c = props.rejectText, rejectText = _c === void 0 ? 'Decline' : _c, isOpen = props.isOpen, className = props.className, close = props.close, onConfirmAction = props.onConfirmAction, onRejectAction = props.onRejectAction;
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
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes$7.dialogWrapper, className, (_a = {},
            _a[classes$7.invisible] = !isOpen,
            _a[classes$7.visible] = isOpen,
            _a)) }, { children: jsxRuntime.jsxs("div", __assign({ className: classes$7.dialogContent }, { children: [jsxRuntime.jsx("span", { className: classes$7.dialogContent_close, onClick: close }, void 0), jsxRuntime.jsx("p", __assign({ className: classes$7.text }, { children: text }), void 0), jsxRuntime.jsxs("div", __assign({ className: classes$7.actionWrapper }, { children: [jsxRuntime.jsx("button", __assign({ onClick: handleConfirm }, { children: confirmText }), void 0), jsxRuntime.jsx("button", __assign({ onClick: handleReject }, { children: rejectText }), void 0)] }), void 0)] }), void 0) }), void 0));
};

var classes$6 = {"input":"styles-module_input__KRJnF"};

var Input = function (_a) {
    var inputProps = _a.inputProps, value = _a.value, onChange = _a.onChange;
    var className = inputProps.className, type = inputProps.type, placeholder = inputProps.placeholder, onFocus = inputProps.onFocus, onBlur = inputProps.onBlur, disabled = inputProps.disabled;
    return (jsxRuntime.jsx("input", { type: type, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: classnames(classes$6.input, className) }, void 0));
};

var classes$5 = {"inputWrapper":"styles-module_inputWrapper__0d8w8","label":"styles-module_label__-RvO9","error":"styles-module_error__pXe6s"};

var InputWrapper = function (props) {
    var error = props.error, label = props.label, isTouched = props.isTouched, children = props.children, className = props.className, value = props.value;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(className, classes$5.inputWrapper) }, { children: [jsxRuntime.jsx("p", __assign({ className: classes$5.label }, { children: label }), void 0), children, (error && value && isTouched) && error.map(function (item, idx) { return (jsxRuntime.jsx("p", __assign({ className: classes$5.error }, { children: item }), idx)); })] }), void 0));
};

var classes$4 = {"input":"styles-module_input__t1a3B","eye-password":"styles-module_eye-password__ILHLV","dirty":"styles-module_dirty__9C5Ot","clean":"styles-module_clean__D6asa","visible":"styles-module_visible__CHTxB","invisible":"styles-module_invisible__gQTw3"};

var PasswordField = function (props) {
    var _a;
    var inputProps = props.inputProps, error = props.error, onChange = props.onChange, value = props.value;
    var type = inputProps.type, className = inputProps.className, rest = __rest(inputProps, ["type", "className"]);
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
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes$4.passwordFieldWr, className) }, { children: [jsxRuntime.jsx("input", __assign({ type: fieldType, onChange: onChange, value: value, className: classes$4.input }, rest), void 0), jsxRuntime.jsx("span", { className: classnames(classes$4.eyePassword, (_a = {},
                    _a[classes$4.invisible] = !isPasswordVisible,
                    _a[classes$4.visible] = isPasswordVisible,
                    _a[classes$4.dirty] = error === null || error === void 0 ? void 0 : error.length,
                    _a[classes$4.clean] = !(error === null || error === void 0 ? void 0 : error.length),
                    _a)), onClick: passwordToggleType }, void 0)] }), void 0));
};

var classes$3 = {"loader-container":"styles-module_loader-container__DRmDv","most-loader":"styles-module_most-loader__OaAs3","rotate":"styles-module_rotate__PheSR","rotate2":"styles-module_rotate2__o1aaP","loader":"styles-module_loader__mHr56"};

var Preloader = function (_a) {
    var className = _a.className;
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes$3.loaderContainer, classes$3.mostLoader, className) }, { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", {}, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }, void 0) }), void 0));
};

var classes$2 = {"progressbar":"styles-module_progressbar__ACHMo","progressbar-wrapper":"styles-module_progressbar-wrapper__8AQMd","progressbar-inner_wrapper":"styles-module_progressbar-inner_wrapper__uV7J-","progressbar-text":"styles-module_progressbar-text__ydVvZ"};

var ProgressBar = function (props) {
    var current = props.current, max = props.max, _a = props.width, width = _a === void 0 ? 300 : _a, _b = props.color, color = _b === void 0 ? '#50C0E8' : _b, className = props.className;
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes$2.progressbar, className) }, { children: [jsxRuntime.jsx("div", __assign({ className: classes$2.progressbarWrapper, style: { width: width } }, { children: jsxRuntime.jsx("span", { className: classes$2.progressbarInner_wrapper, style: {
                        width: "".concat(current / max * 100, "%"),
                        backgroundColor: color
                    } }, void 0) }), void 0), jsxRuntime.jsx("span", __assign({ className: classes$2.progressbarText }, { children: current }), void 0)] }), void 0));
};

/*eslint-disable max-len*/
var WhiteSearchIcon = function () { return (jsxRuntime.jsxs("svg", __assign({ width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382", stroke: "#FFFFFF", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M19 19L15.71 15.71", stroke: "#FFFFFF", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }), void 0)); };

/*eslint-disable max-len*/
var SearchIcon = function () { return (jsxRuntime.jsxs("svg", __assign({ width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382", stroke: "#85888B", strokeLinecap: "round", strokeLinejoin: "round" }, void 0), jsxRuntime.jsx("path", { d: "M19 19L15.71 15.71", stroke: "#85888B", strokeLinecap: "round", strokeLinejoin: "round" }, void 0)] }), void 0)); };

var classes$1 = {"search-wrapper":"styles-module_search-wrapper__Qzz4K","search-icon":"styles-module_search-icon__UOF7-","search-input":"styles-module_search-input__W4W-i"};

var SearchField = function (props) {
    var color = props.color, onButtonClick = props.onButtonClick, className = props.className, rest = __rest(props, ["color", "onButtonClick", "className"]);
    return (jsxRuntime.jsxs("div", __assign({ className: classnames(classes$1.searchWrapper, className) }, { children: [jsxRuntime.jsx("span", __assign({ onClick: onButtonClick, className: classes$1.searchIcon }, { children: color === 'white' ?
                    jsxRuntime.jsx(WhiteSearchIcon, {}, void 0)
                    :
                        jsxRuntime.jsx(SearchIcon, {}, void 0) }), void 0), jsxRuntime.jsx("input", __assign({}, rest, { className: classes$1.searchInput }), void 0)] }), void 0));
};

var classes = {"userCardSection":"styles-module_userCardSection__X0uby","userCardSection_content":"styles-module_userCardSection_content__JTyTG","progressbar-text":"styles-module_progressbar-text__0S-si"};

var CardInfoSection = function (_a) {
    var children = _a.children, className = _a.className;
    return (jsxRuntime.jsx("div", __assign({ className: classnames(classes.userCardSection, className) }, { children: children }), void 0));
};

exports.Button = Button;
exports.Dialog = Dialog;
exports.Input = Input;
exports.InputWrapper = InputWrapper;
exports.PasswordField = PasswordField;
exports.Preloader = Preloader;
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
