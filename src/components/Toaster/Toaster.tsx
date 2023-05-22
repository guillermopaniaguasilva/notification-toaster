import { ToasterContainer } from './styles';
import Toast, { ToastType } from '../Toast/Toast';

type ToasterProps = {
  toasts: ToastType[];
  position: string;
};

const Toaster = ({ toasts, position }: ToasterProps) => {
  return (
    <ToasterContainer className={position}>
      {toasts.map(({ text, id, type, autodeleteTimeout }, index) => (
        <Toast
          className={position}
          key={index}
          text={text}
          id={id}
          autoDeleteTimeout={autodeleteTimeout}
          type={type}
        />
      ))}
    </ToasterContainer>
  );
};

export default Toaster;
