import { useCallback, useState } from 'react';
import cn from 'classnames';

import classes from './styles.module.scss';
import { IPasswordFieldProps } from './types';


const PasswordField = (props: IPasswordFieldProps): JSX.Element => {
  const { inputProps, error, onChange, value } = props;

  const {
    type,
    className,
    ...rest
  } = inputProps;

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [fieldType, setFieldType] = useState<string>(type || 'text');

  const passwordToggleType = useCallback(
    () => {
      setIsPasswordVisible(!isPasswordVisible);
      if (fieldType === 'text') {
        setFieldType('password');
      } else {
        setFieldType('text');
      }
    },
    [setIsPasswordVisible, isPasswordVisible, fieldType, setFieldType]
  );

  return (
    <div className={cn(classes.passwordFieldWr, className)}>
      <input
        type={fieldType}
        onChange={onChange}
        value={value}
        className={classes.input}
        {...rest}
      />
      <span
        className={cn(classes.eyePassword, {
          [classes.invisible]: !isPasswordVisible,
          [classes.visible]: isPasswordVisible,
          [classes.dirty]: error?.length,
          [classes.clean]: !error?.length,
        })}
        onClick={passwordToggleType}
      />
    </div>
  );
};

export default PasswordField;
