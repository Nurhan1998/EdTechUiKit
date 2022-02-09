import { FC } from 'react';
import cn from 'classnames';

import classes from './styles.module.scss';
import { IInputWrapper } from './types';

const InputWrapper: FC<IInputWrapper> = props => {
  const {
    error,
    label,
    isTouched,
    children,
    className,
    value
  } = props;

  return (
    <div className={cn(className, classes.inputWrapper)}>
      <p className={classes.label}>{label}</p>
      {children}
      {(error && value && isTouched) && error.map((item, idx) => (
        <p className={classes.error} key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default InputWrapper;
