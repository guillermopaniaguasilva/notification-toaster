import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, CloseButton, ToastText } from './styles';
import { deleteToast } from '../../store/toasts/toasts.action';

export type ToastType = {
  id: string;
  text: string;
  type: string;
};

export type ToastProps = {
  id: string;
  text: string;
  autoDeleteTimeout: number;
  className: string;
  type: string;
};

const Toast = ({
  text,
  id,
  autoDeleteTimeout,
  className,
  type,
}: ToastProps) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(deleteToast(id));
  //   }, autoDeleteTimeout);
  //   return () => clearInterval(interval);
  // });

  return (
    <ToastContainer type={type} className={className}>
      <ToastText>{text}</ToastText>
      <CloseButton
        onClick={() => {
          dispatch(deleteToast(id));
        }}
      >
        X
      </CloseButton>
    </ToastContainer>
  );
};

export default Toast;
