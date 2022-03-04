import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var palette = _a.palette, spacing = _a.spacing, fontWeights = _a.fontWeights;
    return ({
        skillsAverageItem: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '4px',
        },
        text: {
            margin: 0,
            fontSize: '14px',
            color: palette.textColorLightGrey,
            whiteSpace: 'nowrap',
            span: {
                color: palette.secondaryBlack,
                fontWeight: fontWeights.semiBold,
            }
        }
        // @media screen and (max-width: $md-xs-media) {
        // .skillsAverageItem {
        //     display: flex;
        //     justify-content: flex-start;
        //     margin-bottom: 2px;
        //
        //   .text {
        //       font-size: 12px;
        //       color: $secondaryBlack;
        //     }
        //     span {
        //       font-size: 12px;
        //       color: $secondaryBlack;
        //     }
        //   }
        // }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map