import cn from 'classnames';

import { IDialog } from './types';
import useStyles from './styles';

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
  const { classes } = useStyles();

  const handleConfirm = (): void => {
    if(onConfirmAction) {
      onConfirmAction();
    }
    close();
  };

  const handleReject = (): void => {
    if(onRejectAction) {
      onRejectAction();
    }
    close();
  };

  return (
    <div className={cn(classes.dialogWrapper, className, {
      [classes.invisible]: !isOpen,
      [classes.visible]: isOpen,
    })}>
      <div className={classes.dialogContent}>
        <span className={classes.close} onClick={close}/>
        <p className={classes.text}>{text}</p>
        <div className={classes.actionWrapper}>
          <button onClick={handleConfirm}>{confirmText}</button>
          <button onClick={handleReject}>{rejectText}</button>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
