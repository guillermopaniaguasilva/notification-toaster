import { AnyAction } from 'redux';
import { TOASTS_TYPES } from './toasts.types';
import { ToastType } from '../../components/Toast/Toast';

const INITIAL_STATE: ToastType[] = [];

export const toastsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case TOASTS_TYPES.CREATE_TOAST:
      return [
        ...state,
        {
          text: payload.text,
          id: Date.now().toString(36),
          type: payload.type,
          autodeleteTimeout: payload.autodeleteTimeout,
        },
      ];
    case TOASTS_TYPES.DELETE_TOAST:
      return [...state.filter((toast: ToastType) => toast.id !== payload)];
    default:
      return state;
  }
};
