import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        dialogWrapper: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
        },
        visible: {
            display: 'flex'
        },
        invisible: {
            display: 'none'
        },
        dialogContent: {
            position: 'relative',
            padding: '74px 21px 21px 21px',
            width: '613px',
            height: '198px',
            background: palette.alabaster,
            borderRadius: spacing.unit,
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        text: {
            margin: '0 0 40px 0',
            color: palette.textColorLightGrey,
        },
        actionWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            button: {
                width: '280px',
                height: '46px',
                border: "1px solid ".concat(palette.black),
                borderRadius: spacing.unit,
                cursor: 'pointer',
                '&:first-child': {
                    backgroundColor: palette.secondaryBlack,
                    color: palette.alabaster,
                },
                '&:last-child': {
                    backgroundColor: palette.alabaster,
                    color: palette.secondaryBlack,
                },
            },
        },
        close: {
            '&::after': {
                top: '15px',
                right: '15px',
                position: 'absolute',
                content: '"292C"',
                cursor: 'pointer'
            }
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map