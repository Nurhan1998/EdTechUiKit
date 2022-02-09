import { TActionReturnType } from '../types/redux';
export declare type TUtilType<T extends Record<string, unknown> | boolean = never> = (payload?: T) => TActionReturnType<T>;
declare const createAction: <T extends boolean | Record<string, unknown> = never>(actionType: string) => TUtilType<T>;
export default createAction;
//# sourceMappingURL=createAction.d.ts.map