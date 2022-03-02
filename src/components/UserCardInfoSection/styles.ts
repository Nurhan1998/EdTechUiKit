import makeStyles from 'styles';

const useStyles = makeStyles()(
  ({ fontWeights }) => ({
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
  })
);
export default useStyles;
