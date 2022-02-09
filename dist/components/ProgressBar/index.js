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
import classes from './styles.module.scss';
var ProgressBar = function (props) {
    var current = props.current, max = props.max, _a = props.width, width = _a === void 0 ? 300 : _a, _b = props.color, color = _b === void 0 ? '#50C0E8' : _b, className = props.className;
    return (_jsxs("div", __assign({ className: cn(classes.progressbar, className) }, { children: [_jsx("div", __assign({ className: classes.progressbarWrapper, style: { width: width } }, { children: _jsx("span", { className: classes.progressbarInner_wrapper, style: {
                        width: "".concat(current / max * 100, "%"),
                        backgroundColor: color
                    } }, void 0) }), void 0), _jsx("span", __assign({ className: classes.progressbarText }, { children: current }), void 0)] }), void 0));
};
export default ProgressBar;
//# sourceMappingURL=index.js.map