import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, CloseButton, ToastText, Image } from './styles';
import { deleteToast } from '../../store/toasts/toasts.action';

export type ToastType = {
  id: string;
  text: string;
  type: string;
  autodeleteTimeout?: number;
};

export type ToastProps = {
  id: string;
  text: string;
  autoDeleteTimeout?: number;
  className: string;
  type: string;
};

const getToastIcon = (type: string) => {
  switch (type) {
    case 'info':
      return 'assets/images/info.svg';
    case 'success':
      return 'assets/images/check.svg';
    case 'warning':
      return 'assets/images/warning.svg';
    case 'danger':
      return 'assets/images/error.svg';
    default:
      return 'assets/images/info.svg';
  }
};

const Toast = ({
  text,
  id,
  autoDeleteTimeout,
  className,
  type,
}: ToastProps) => {
  const dispatch = useDispatch();

  console.log('autodeltetimeout:', autoDeleteTimeout);

  useEffect(() => {
    if (autoDeleteTimeout) {
      const interval = setInterval(() => {
        dispatch(deleteToast(id));
      }, autoDeleteTimeout);
      return () => clearInterval(interval);
    }
  });

  return (
    <ToastContainer type={type} className={className}>
      <Image src={getToastIcon(type)} alt={type} />
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
