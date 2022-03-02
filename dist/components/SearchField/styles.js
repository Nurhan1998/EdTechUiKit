import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        searchWrapper: {
            position: 'relative',
        },
        searchIcon: {
            position: 'absolute',
            top: '20%',
            left: '5%',
        },
        searchInput: {
            paddingLeft: '45px',
            width: '218px',
            height: '32px',
            borderRadius: spacing.lg,
            border: "0.5px solid ".concat(palette.superLightGrey)
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map