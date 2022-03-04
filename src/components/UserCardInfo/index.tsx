import { FC } from 'react';
import cn from 'classnames';

import useStyles from './styles';

const UserCardInfo: FC<{ className?: string }> = ({ children, className }) => {
  const { classes } = useStyles();
  return (
    <div className={cn(classes.userCardInfo, className)}>{children}</div>
  );
};

export default UserCardInfo;
