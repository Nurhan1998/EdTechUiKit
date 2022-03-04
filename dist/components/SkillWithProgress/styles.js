import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing, fontWeights = _a.fontWeights;
    return ({
        skillWithProgress: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            '&:not(last-child)': {
                marginBottom: '4px',
            },
            progressbar: {
                '&-text': {
                    fontSize: '14px',
                    width: '13px',
                    fontWeight: fontWeights.semiBold,
                }
            }
        },
        text: {
            margin: 0,
            fontSize: '14px',
            color: palette.textColorLightGrey,
            whiteSpace: 'nowrap',
        },
        // @media screen and (max-width: $md-xs-media) {
        // .skillWithProgress {
        //     width: 100%;
        //     display: flex;
        //     justify-content: space-between;
        //     margin-bottom: 6px;
        //
        //   .progressbar {
        //     &-text {
        //         font-size: 12px;
        //         font-weight: $semiBold;
        //       }
        //     }
        //   }
        // }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map