import cn from 'classnames';

import { IProgressBarProps } from './types';
import classes from './styles.module.scss';


const ProgressBar = (props: IProgressBarProps): JSX.Element => {
  const {
    current,
    max,
    width = 300,
    color='#50C0E8',
    className
  } = props;

  return (
    <div className={cn(classes.progressbar, className)}>
      <div className={classes.progressbarWrapper} style={{ width: width }}>
        <span
          className={classes.progressbarInner_wrapper}
          style={{
            width: `${current / max * 100}%`,
            backgroundColor: color
          }}
        />
      </div>
      <span className={classes.progressbarText}>
        {current}
      </span>
    </div>
  );
};

export default ProgressBar;
