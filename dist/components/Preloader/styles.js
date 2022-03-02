var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import makeStyles from 'styles';
import { keyframes } from 'tss-react';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        loaderDivMixin: {
            borderRadius: spacing.circle,
            padding: spacing.unit,
            border: '2px solid transparent',
            animation: 'rotate linear 3.5s infinite',
        },
        loaderContainer: {
            position: 'relative',
            margin: '75px auto',
            width: '150px',
            height: '150px',
            display: 'block',
            overflow: 'hidden'
        },
        div: {
            height: '100%'
        },
        mostLoader: {
            borderRadius: spacing.circle,
            padding: spacing.sm,
            animation: "".concat(keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      transform: rotate(0deg);\n      borderTopColor: ", "\n    }\n    50% {\n      transform: rotate(180deg);\n      borderTopColor: ", "\n    }\n    100% {\n      transform: rotate(360deg);\n      borderTopColor: ", "\n    }\n  "], ["\n    0% {\n      transform: rotate(0deg);\n      borderTopColor: ", "\n    }\n    50% {\n      transform: rotate(180deg);\n      borderTopColor: ", "\n    }\n    100% {\n      transform: rotate(360deg);\n      borderTopColor: ", "\n    }\n  "])), palette.darkGrey, palette.primary, palette.darkGrey), " 4s infinite linear")
        },
        loader: {
            willChange: 'transform *'
        }
    });
});
export default useStyles;
var templateObject_1;
//# sourceMappingURL=styles.js.map