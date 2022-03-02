import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        input: {
            paddingLeft: '10px',
            height: '46px',
            width: '100%',
            background: palette.darkGrey,
            border: 'none',
            borderRadius: spacing.unit,
            '&:focus-visible': {
                border: 'none',
            },
            '&::placeholder': {
                color: palette.textGreyPlaceholder
            },
            '&:focus': {
                outline: 'none',
            },
            '&:disabled': {
                color: palette.textColorGrey
            }
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map