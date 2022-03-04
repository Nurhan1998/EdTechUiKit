import makeStyles from 'styles';

const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
    userCardWrapper: {
      padding: '11px 20px 11px 11px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: palette.white,
      borderRadius: spacing.sm,
      borderTop: `1px solid ${palette.superLightGrey}`,
      height: '91px',

      '> *': {
        padding:'0 15px',
      }
    }
  })
);
export default useStyles;
