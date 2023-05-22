import { POSITION_TYPES } from './position.types';

export const changePosition = (position: string) => ({
  type: POSITION_TYPES.SET_POSITION,
  payload: position,
});
