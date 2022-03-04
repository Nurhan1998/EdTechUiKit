import cn from 'classnames';

import ProgressBar from '../ProgressBar';

import { ISkillWithProgress } from './types';
import useStyles from './styles';

const SkillWithProgress = (props: ISkillWithProgress): JSX.Element => {
  const { classes } = useStyles();
  const { text, max, current, className, progressWidth } = props;
  return (
    <div className={cn(classes.skillWithProgress, className)}>
      <p className={classes.text}>{text}</p>
      <ProgressBar width={progressWidth} current={current} max={max}/>
    </div>
  );
};

export default SkillWithProgress;
