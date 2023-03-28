import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0px;
  padding: 10px;
  width: 400px;
  border: 1px solid black;
`;

export const FormField = styled.label`
  display: flex;
  gap: 2px;
  flex-direction: column;
  width: 270px;
  font-size: 18px;
`;

export const FormButton = styled.button`
  width: 150px;
  padding: 10px 15px;
  text-transform: capitalize;
  font-size: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  background-color: #C3C1C1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #00CCCC;
  }
`;
