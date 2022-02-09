import { FC } from 'react';
import cn from 'classnames';

import { IUserCardInfoSection } from './types';
import classes from './styles.module.scss';


const CardInfoSection: FC<IUserCardInfoSection> = ({ children, className }) => (
  <div className={cn(classes.userCardSection, className)}>{children}</div>
);

export default CardInfoSection;
