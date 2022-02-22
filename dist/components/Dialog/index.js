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
    return (_jsx("div", __assign({ className: cn(classes.dialogWrapper, className, (_a = {},
            _a[classes.invisible] = !isOpen,
            _a[classes.visible] = isOpen,
            _a)) }, { children: _jsxs("div", __assign({ className: classes.dialogContent }, { children: [_jsx("span", { className: classes.dialogContent_close, onClick: close }, void 0), _jsx("p", __assign({ className: classes.text }, { children: text }), void 0), _jsxs("div", __assign({ className: classes.actionWrapper }, { children: [_jsx("button", __assign({ onClick: handleConfirm }, { children: confirmText }), void 0), _jsx("button", __assign({ onClick: handleReject }, { children: rejectText }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default Dialog;
//# sourceMappingURL=index.js.map