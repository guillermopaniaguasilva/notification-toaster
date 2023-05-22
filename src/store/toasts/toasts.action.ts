import { TOASTS_TYPES } from './toasts.types';

export const addToast = (text: string, type: string) => ({
  type: TOASTS_TYPES.CREATE_TOAST,
  payload: { text, type },
});

export const deleteToast = (id: string) => ({
  type: TOASTS_TYPES.DELETE_TOAST,
  payload: id,
});
