import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing, mostFont = _a.mostFont;
    return ({
        inputWrapper: {
            margin: '20px 0',
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        label: {
            alignSelf: 'flex-start',
            margin: '0 0 5px 0',
            fontSize: '12px',
            fontFamily: mostFont,
            color: palette.white,
        },
        error: {
            fontSize: '12px',
            color: 'red',
            margin: '5px 0px 0px 0px',
            alignSelf: 'flex-start',
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map