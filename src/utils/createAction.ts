import { TActionReturnType } from '../types/redux';

export type TUtilType<T extends Record<string, unknown> | boolean = never> = (
  payload?: T
) => TActionReturnType<T>;

const createAction =
  <T extends Record<string, unknown> | boolean = never>(
    actionType: string
  ): TUtilType<T> =>
    payload => ({
      type: actionType,
      payload,
    });

export default createAction;
