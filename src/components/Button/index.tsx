import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import useStyles from './styles';


const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { children, className, ...rest } = props;
  const { classes } = useStyles();
  return (
    <button {...rest} className={cn(classes.mostButton, className)}>
      {children}
    </button>
  );
};

export default Button;
