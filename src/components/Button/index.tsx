import { FC } from 'react';
import cn from 'classnames';

import { IButtonProps } from './types';
import classes from './styles.module.scss';

const Button: FC<IButtonProps> = props => {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={cn(classes.mostButton, className)}>
      {children}
    </button>
  );
};

export default Button;
