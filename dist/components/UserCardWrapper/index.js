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
import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import useStyles from './styles';
var UserCardWrapper = function (_a) {
    var children = _a.children, className = _a.className;
    var classes = useStyles().classes;
    return (_jsx("div", __assign({ className: cn(classes.userCardWrapper, className) }, { children: children })));
};
export default UserCardWrapper;
//# sourceMappingURL=index.js.map