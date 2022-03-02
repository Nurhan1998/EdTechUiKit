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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import useStyles from './styles';
var InputWrapper = function (props) {
    var error = props.error, label = props.label, isTouched = props.isTouched, children = props.children, className = props.className, value = props.value;
    var classes = useStyles().classes;
    return (_jsxs("div", __assign({ className: cn(className, classes.inputWrapper) }, { children: [_jsx("p", __assign({ className: classes.label }, { children: label })), children, (error && value && isTouched) && error.map(function (item, idx) { return (_jsx("p", __assign({ className: classes.error }, { children: item }), idx)); })] })));
};
export default InputWrapper;
//# sourceMappingURL=index.js.map