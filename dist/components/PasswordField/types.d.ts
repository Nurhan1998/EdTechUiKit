import { ChangeEvent, InputHTMLAttributes } from 'react';
export interface IPasswordFieldProps {
    isTouched?: boolean;
    label?: string;
    error?: string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
//# sourceMappingURL=types.d.ts.map