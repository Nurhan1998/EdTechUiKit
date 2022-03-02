import cn from 'classnames';

import { IInput } from 'components/Input/types';

import makeStyles from './styles';

const Input = ({ inputProps, value, onChange }: IInput): JSX.Element => {
  const { classes } = makeStyles();
  const {
    className,
    type,
    placeholder,
    onFocus,
    onBlur,
    disabled
  } = inputProps;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      className={cn(classes.input, className)}
    />
  );
};

export default Input;
