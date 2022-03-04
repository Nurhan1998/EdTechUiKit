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
import ProgressBar from '../ProgressBar';
import useStyles from './styles';
var SkillWithProgress = function (props) {
    var classes = useStyles().classes;
    var text = props.text, max = props.max, current = props.current, className = props.className, progressWidth = props.progressWidth;
    return (_jsxs("div", __assign({ className: cn(classes.skillWithProgress, className) }, { children: [_jsx("p", __assign({ className: classes.text }, { children: text })), _jsx(ProgressBar, { width: progressWidth, current: current, max: max })] })));
};
export default SkillWithProgress;
//# sourceMappingURL=index.js.map