import cn from 'classnames';

import { IDialog } from './types';
import classes from './styles.module.scss';


const Dialog = (props: IDialog): JSX.Element => {
  const {
    text,
    confirmText = 'Accept',
    rejectText = 'Decline',
    isOpen,
    className,
    close,
    onConfirmAction,
    onRejectAction
  } = props;

  return (
    <div className={cn(classes.dialogWrapper, className, {
      [classes.invisible]: !isOpen,
      [classes.visible]: isOpen,
    })}>
      <div className={classes.dialogContent}>
        <span className={classes.dialogContent_close} onClick={close}/>
        <p className={classes.text}>{text}</p>
        <div className={classes.actionWrapper}>
          <button onClick={onConfirmAction}>{confirmText}</button>
          <button onClick={onRejectAction}>{rejectText}</button>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
