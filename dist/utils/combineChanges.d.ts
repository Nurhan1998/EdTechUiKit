import { IPayloadAction, THandler } from '../types/redux';
declare type TUtilType<T, S = void> = (state: T, action: IPayloadAction<S>) => T;
declare const _default: <T, S = void>(changes: THandler<T, S>[]) => TUtilType<T, S>;
export default _default;
//# sourceMappingURL=combineChanges.d.ts.map