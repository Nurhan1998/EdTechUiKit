import cn from 'classnames';

import { ISkillsAverage } from './types';
import useStyles from './styles';

const SkillsAverageItem = (props: ISkillsAverage): JSX.Element => {
  const { classes } = useStyles();
  const { max, current, text, isMobile, isPercent, className } = props;
  const value = isPercent ? `${current / max * 100}%` : `${current}/${max}`;

  return (
    <div className={cn(classes.skillsAverageItem, className)}>
      <p className={classes.text}>{text}</p>
      {!isMobile && (
        <>
          <p className={classes.text}>
            Average index:<span>&nbsp;{value}</span>
          </p>
        </>
      )}
      {isMobile && <span>&nbsp;{value}</span>}
    </div>
  );
};

export default SkillsAverageItem;
