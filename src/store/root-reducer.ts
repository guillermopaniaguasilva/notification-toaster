import { combineReducers } from 'redux';
import { toastsReducer } from './toasts/toasts.reducer';
import { positionReducer } from './position/position.reducer';

export const rootReducer = combineReducers({
  position: positionReducer,
  toasts: toastsReducer,
});
