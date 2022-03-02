import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        mostButton: {
            color: 'white',
            backgroundColor: palette.primary,
            border: 'none',
            marginTop: spacing.xl,
            borderRadius: spacing.unit,
            width: '280px',
            height: '40px',
            '&:active': {
                color: palette.lightGrey
            }
        },
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map