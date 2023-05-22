import { styled } from 'styled-components';

export const FormElement = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  /* border: 2px solid rgb(7, 114, 228); */
  border-radius: 8px;
  padding: 16px 0;

  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  width: 80%;
  margin-bottom: 18px;
  padding: 16px 0 16px 8px;
  font-size: 16px;
  /* border: 0; */

  &:focus {
    /* border-radius: 8px; */
  }

  @media only screen and (min-width: 600px) {
    margin-bottom: 0px;
    /* margin-right: 8px; */
  }
`;

export const AutoDeleteContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px 0;
`;

export const Checkbox = styled.input``;

export const Label = styled.label``;

export const Select = styled.select`
  width: 80%;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 16px 0 16px 4px;

  &:first-of-type {
    margin-top: 16px;
  }
`;

export const Submit = styled.button`
  margin-top: 8px;
  width: 80%;
  background-color: rgb(7, 114, 228);
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;

  &:hover&:not(:disabled) {
    cursor: pointer;
    background-color: rgb(2, 84, 173);
    border-color: rgb(2, 84, 173);
  }

  &:disabled {
    background-color: #e0dfda;
  }
`;
