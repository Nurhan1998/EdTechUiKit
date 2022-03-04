import { FC } from 'react';
import cn from 'classnames';

import useStyles from './styles';

const UserCardWrapper: FC<{ className?: string }> = ({ children, className }) => {
  const { classes } = useStyles();
  return(
    <div className={cn(classes.userCardWrapper, className)}>
      {children}
    </div>
  );
};

export default UserCardWrapper;
