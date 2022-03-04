import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        userCardWrapper: {
            padding: '11px 20px 11px 11px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: palette.white,
            borderRadius: spacing.sm,
            borderTop: "1px solid ".concat(palette.superLightGrey),
            height: '91px',
            '> *': {
                padding: '0 15px',
            }
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map