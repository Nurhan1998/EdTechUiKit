import makeStyles from 'styles';

const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
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
      border: `0.5px solid ${palette.superLightGrey}`
    }
  })
);

export default useStyles;
