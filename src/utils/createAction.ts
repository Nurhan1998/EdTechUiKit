import { TActionReturnType } from '../types/redux';

export type TUtilType<T> = (payload?: T) => TActionReturnType<T>;

const createAction = <T>(actionType: string): TUtilType<T> =>
  payload => ({
    type: actionType,
    payload,
  });

export default createAction;
