import { useSelector } from 'react-redux';
import { Main, Heading } from './styles';
import Form from '../Form/Form';
import Toaster from '../Toaster/Toaster';
import { ToastType } from '../Toast/Toast';

export type AppState = {
  toasts: ToastType[];
  position: string;
};

const App = () => {
  const toasts = useSelector((state: AppState) => state.toasts);
  const position = useSelector((state: AppState) => state.position);

  return (
    <>
      <Main>
        <Heading>Create toast notifications</Heading>
        <Form />
      </Main>
      <Toaster toasts={toasts} position={position} />
    </>
  );
};

export default App;
