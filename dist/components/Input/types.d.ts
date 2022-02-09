import { ChangeEvent, InputHTMLAttributes } from 'react';
export interface IInput {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
}
//# sourceMappingURL=types.d.ts.map