import makeStyles from 'styles';

const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
    input: {
      paddingLeft: '10px',
      height: '46px',
      width: '100%',
      background: palette.darkGrey,
      border: 'none',
      borderRadius: spacing.unit,
      '&:focus-visible': {
        border: 'none',
      },
      '&::placeholder': {
        color: palette.textGreyPlaceholder
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        color: palette.textColorGrey
      }
    }
  })
);

export default useStyles;
