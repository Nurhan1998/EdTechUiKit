import { TActionReturnType } from '../types/redux';
export declare type TUtilType<T = undefined> = (payload?: T) => TActionReturnType<T>;
declare const createAction: <T = undefined>(actionType: string) => TUtilType<T>;
export default createAction;
//# sourceMappingURL=createAction.d.ts.map