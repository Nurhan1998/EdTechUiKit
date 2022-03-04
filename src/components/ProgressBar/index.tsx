import cn from 'classnames';

import { IProgressBarProps } from './types';
import useStyles from './styles';


const ProgressBar = (props: IProgressBarProps): JSX.Element => {
  const {
    current,
    max,
    width = 100,
    color='#50C0E8',
    className
  } = props;
  const { classes } = useStyles();

  return (
    <div className={cn(classes.progressbar, className)}>
      <div className={classes.progressbarWrapper} style={{ width: width }}>
        <span
          className={classes.progressInnerWrapper}
          style={{
            width: `${current / max * 100}%`,
            backgroundColor: color
          }}
        />
      </div>
      <span className={classes.progressBarText}>
        {current}
      </span>
    </div>
  );
};

export default ProgressBar;
