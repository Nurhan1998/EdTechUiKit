import makeStyles from 'styles';


const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
    input: {
      paddingLeft: '9px',
      height: '46px',
      width: '100%',
      background: palette.darkGrey,
      border: 'none',
      borderRadius: spacing.unit,
      '&:focus-visible':  {
        border: 'none',
      },
      '&::placeholder': {
        color: palette.textGreyPlaceholder,
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        color: palette.textColorGrey,
      },
    },
    eyePassword: {
      position: 'absolute',
      right: '15px',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: spacing.circle,
      cursor: 'pointer',
    },
    dirty: {
      top: '49%',
    },
    clean: {
      top: '62%'
    },
    visible: {
      color: palette.white,
      backgroundImage: 'url(./assets/images/svg/eye.svg)',
    },
    invisible: {
      backgroundImage: 'url(./assets/images/svg/eye-slash.svg)',
    },
    passwordFieldWr: {
      width: '100%'
    }
  })
);

export default useStyles;
