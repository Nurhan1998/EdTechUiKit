import { TActionReturnType } from '../types/redux';
export declare type TUtilType<T> = (payload?: T) => TActionReturnType<T>;
declare const createAction: <T>(actionType: string) => TUtilType<T>;
export default createAction;
//# sourceMappingURL=createAction.d.ts.map