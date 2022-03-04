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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useStyles from './styles';
var SkillsAverageItem = function (props) {
    var classes = useStyles().classes;
    var max = props.max, current = props.current, text = props.text, isMobile = props.isMobile, isPercent = props.isPercent;
    var value = isPercent ? "".concat(current / max * 100, "%") : "".concat(current, "/").concat(max);
    return (_jsxs("div", __assign({ className: classes.skillsAverageItem }, { children: [_jsx("p", __assign({ className: classes.text }, { children: text })), !isMobile && (_jsx(_Fragment, { children: _jsxs("p", __assign({ className: classes.text }, { children: ["Average index:", _jsxs("span", { children: ["\u00A0", value] })] })) })), isMobile && _jsxs("span", { children: ["\u00A0", value] })] })));
};
export default SkillsAverageItem;
//# sourceMappingURL=index.js.map