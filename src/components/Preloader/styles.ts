import makeStyles from 'styles';
import { keyframes } from 'tss-react';


const useStyles = makeStyles()(
  ({ palette, spacing }) => ({
    loaderDivMixin: {
      borderRadius: spacing.circle,
      padding: spacing.unit,
      border: '2px solid transparent',
      animation: 'rotate linear 3.5s infinite',
    },

    loaderContainer: {
      position: 'relative',
      margin: '75px auto',
      width: '150px',
      height: '150px',
      display: 'block',
      overflow: 'hidden'
    },
    div: {
      height: '100%'
    },

    mostLoader: {
      borderRadius: spacing.circle,
      padding: spacing.sm,
      animation: `${keyframes`
    0% {
      transform: rotate(0deg);
      borderTopColor: ${palette.darkGrey}
    }
    50% {
      transform: rotate(180deg);
      borderTopColor: ${palette.primary}
    }
    100% {
      transform: rotate(360deg);
      borderTopColor: ${palette.darkGrey}
    }
  `} 4s infinite linear`
    },

    loader: {
      willChange: 'transform *'
    }

  })
);

export default useStyles;
