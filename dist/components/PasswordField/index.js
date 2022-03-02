var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import cn from 'classnames';
import useStyles from './styles';
var PasswordField = function (props) {
    var _a;
    var inputProps = props.inputProps, error = props.error, onChange = props.onChange, value = props.value;
    var type = inputProps.type, className = inputProps.className, rest = __rest(inputProps, ["type", "className"]);
    var classes = useStyles().classes;
    var _b = useState(false), isPasswordVisible = _b[0], setIsPasswordVisible = _b[1];
    var _c = useState(type || 'text'), fieldType = _c[0], setFieldType = _c[1];
    var passwordToggleType = useCallback(function () {
        setIsPasswordVisible(!isPasswordVisible);
        if (fieldType === 'text') {
            setFieldType('password');
        }
        else {
            setFieldType('text');
        }
    }, [setIsPasswordVisible, isPasswordVisible, fieldType, setFieldType]);
    return (_jsxs("div", __assign({ className: cn(classes.passwordFieldWr, className) }, { children: [_jsx("input", __assign({ type: fieldType, onChange: onChange, value: value, className: classes.input }, rest)), _jsx("span", { className: cn(classes.eyePassword, (_a = {},
                    _a[classes.invisible] = !isPasswordVisible,
                    _a[classes.visible] = isPasswordVisible,
                    _a[classes.dirty] = error === null || error === void 0 ? void 0 : error.length,
                    _a[classes.clean] = !(error === null || error === void 0 ? void 0 : error.length),
                    _a)), onClick: passwordToggleType })] })));
};
export default PasswordField;
//# sourceMappingURL=index.js.map