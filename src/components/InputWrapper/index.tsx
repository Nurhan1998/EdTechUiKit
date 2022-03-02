import { FC } from 'react';
import cn from 'classnames';

import useStyles from './styles';
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
  const { classes } = useStyles();

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
