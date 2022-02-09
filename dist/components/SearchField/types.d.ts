import { ChangeEventHandler, FocusEventHandler } from 'react';
export interface ISearch {
    color?: string;
    className?: string;
    type?: string;
    value?: string | ReadonlyArray<string> | number | undefined;
    placeholder?: string;
    onChange?: ChangeEventHandler | undefined;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    disabled?: boolean;
    onButtonClick?: () => void;
}
//# sourceMappingURL=types.d.ts.map