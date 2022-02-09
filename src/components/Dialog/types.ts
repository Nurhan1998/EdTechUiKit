export interface IDialog {
  text: string;
  confirmText?: string;
  rejectText?: string;
  isOpen: boolean;
  close: () => void;
  onConfirmAction?: () => void;
  onRejectAction?: () => void;
  className?: string;
}
