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
import cn from 'classnames';
import WhiteSearchIcon from '../Icons/WhiteSearchIcon';
import SearchIcon from '../Icons/SearchIcon';
import classes from './styles.module.scss';
var SearchField = function (props) {
    var color = props.color, onButtonClick = props.onButtonClick, className = props.className, rest = __rest(props, ["color", "onButtonClick", "className"]);
    return (_jsxs("div", __assign({ className: cn(classes.searchWrapper, className) }, { children: [_jsx("span", __assign({ onClick: onButtonClick, className: classes.searchIcon }, { children: color === 'white' ?
                    _jsx(WhiteSearchIcon, {}, void 0)
                    :
                        _jsx(SearchIcon, {}, void 0) }), void 0), _jsx("input", __assign({}, rest, { className: classes.searchInput }), void 0)] }), void 0));
};
export default SearchField;
//# sourceMappingURL=index.js.map