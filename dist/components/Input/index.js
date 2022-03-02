import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import makeStyles from './styles';
var Input = function (_a) {
    var inputProps = _a.inputProps, value = _a.value, onChange = _a.onChange;
    var classes = makeStyles().classes;
    var className = inputProps.className, type = inputProps.type, placeholder = inputProps.placeholder, onFocus = inputProps.onFocus, onBlur = inputProps.onBlur, disabled = inputProps.disabled;
    return (_jsx("input", { type: type, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: cn(classes.input, className) }));
};
export default Input;
//# sourceMappingURL=index.js.map