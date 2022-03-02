import { FC } from 'react';
import cn from 'classnames';

import { IUserCardInfoSection } from './types';
import useStyles from './styles';


const CardInfoSection: FC<IUserCardInfoSection> = ({ children, className }) => {
  const { classes } = useStyles();
  return (
    <div className={cn(classes.userCardSection, className)}>{children}</div>
  );
};

export default CardInfoSection;
