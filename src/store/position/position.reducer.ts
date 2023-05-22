import { AnyAction } from 'redux';
import { POSITION_TYPES } from './position.types';

const INITIAL_STATE = 'top-right';

export const positionReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case POSITION_TYPES.SET_POSITION:
      return payload;
    default:
      return state;
  }
};
