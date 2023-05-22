import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormElement, Input, Submit, Select } from './styles';
import { addToast } from '../../store/toasts/toasts.action';
import { changePosition } from '../../store/position/position.action';

const Form = () => {
  const [toastText, setToastText] = useState('');
  const [type, setType] = useState('default');
  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToastText(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addToast(toastText, type));
  };

  const onPositionSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changePosition(e.target.value));
  };

  const onTypeSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <FormElement onSubmit={onSubmit}>
      <Input
        value={toastText}
        onChange={onInputChange}
        placeholder="Enter some text..."
      />
      <Select name="position" onChange={onPositionSelectChange}>
        <option>Select position</option>
        <option value="top-right">Top right</option>
        <option value="bottom-right">Bottom right</option>
        <option value="bottom-left">Bottom left</option>
        <option value="top-left">Top left</option>
      </Select>
      <Select name="type" onChange={onTypeSelectChange} value={type}>
        <option value="default">Select type</option>
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </Select>
      <Submit disabled={!toastText}>Show!</Submit>
    </FormElement>
  );
};

export default Form;
