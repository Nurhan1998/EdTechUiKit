import { TActionReturnType } from '../types/redux';

export type TUtilType<T = undefined> = (payload?: T) => TActionReturnType<T>;

const createAction = <T = undefined>(actionType: string): TUtilType<T> =>
  payload => ({
    type: actionType,
    payload,
  });

export default createAction;
