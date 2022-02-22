import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import classes from 'styles.module.scss';


const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={cn(classes.mostButton, className)}>
      {children}
    </button>
  );
};

export default Button;
