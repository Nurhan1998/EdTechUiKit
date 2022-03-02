import makeStyles from 'styles';


const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
    mostButton: {
      color: 'white',
      backgroundColor: palette.primary,
      border: 'none',
      marginTop: spacing.xl,
      borderRadius: spacing.unit,
      width: '280px',
      height: '40px',

      '&:active': {
        color: palette.lightGrey
      }
    },
  })
);

export default useStyles;
