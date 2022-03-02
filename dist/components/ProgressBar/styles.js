import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        progressbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '530px',
            '&:active': {
                color: palette.lightGrey
            }
        },
        progressbarWrapper: {
            width: '90%',
            display: 'flex',
            backgroundColor: palette.light,
            borderRadius: spacing.sm,
            height: '3px',
            overflow: 'hidden',
        },
        progressInnerWrapper: {
            height: '3px',
            backgroundColor: palette.primary
        },
        progressBarText: {
            marginLeft: '10px'
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map