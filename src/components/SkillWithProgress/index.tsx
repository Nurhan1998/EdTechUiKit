import ProgressBar from '../ProgressBar';

import { ISkillWithProgress } from './types';
import useStyles from './styles';

const SkillWithProgress = (props: ISkillWithProgress): JSX.Element => {
  const { classes } = useStyles();
  const { text, max, current } = props;
  return (
    <div className={classes.skillWithProgress}>
      <p className={classes.text}>{text}</p>
      <ProgressBar current={current} max={max}/>
    </div>
  );
};

export default SkillWithProgress;
