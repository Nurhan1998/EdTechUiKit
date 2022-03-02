import makeStyles from 'styles';
var useStyles = makeStyles()(function (_a) {
    var fontWeights = _a.fontWeights;
    return ({
        userCardSection: {
            display: 'flex',
            height: '69px',
            flexDirection: 'column',
            width: '300px',
        },
        '@media screen and (min-width: $tablet-media)  and (max-width: $lg-media)': {
            userCardSection: {
                width: '270px',
                userCardSection_content: {
                    progressbar: {
                        progressbarText: {
                            fontSize: '14px',
                            fontWeight: fontWeights.semiBold
                        }
                    }
                }
            }
        }
    });
});
export default useStyles;
//# sourceMappingURL=styles.js.map