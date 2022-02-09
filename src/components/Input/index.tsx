import cn from 'classnames';

import { IInput } from 'components/Input/types';

import classes from './styles.module.scss';

const Input = ({ inputProps, value, onChange }: IInput): JSX.Element => {
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
