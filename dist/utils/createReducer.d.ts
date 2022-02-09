import { IPayloadAction, THandlers } from '../types/redux';
declare const createReducer: <T, S = never>(initialState: T, handlers: THandlers<T, S>) => (state: T | undefined, action: IPayloadAction<S, string, never, never>) => T;
export default createReducer;
//# sourceMappingURL=createReducer.d.ts.map