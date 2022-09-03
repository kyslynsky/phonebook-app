import styled from 'styled-components';
import { Button, Input, Label } from 'components/GlobalStyles';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { RiContactsBook2Fill } from 'react-icons/ri';

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddFormLabelIco = styled(Label)`
  flex-direction: row;
  align-items: center;
`;

export const AddFormInput = styled(Input)`
  min-width: 280px;
  margin-top: 3px;
  font-weight: 500;
`;

export const AddFormBtn = styled(Button)`
  margin-top: 12px;
  padding: 10px 20px;
  width: 120px;
`;

export const UserIco = styled(RiContactsBook2Fill)`
  position: absolute;
  width: 28px;
  height: 28px;
`;

export const PhoneIco = styled(FaPhoneSquareAlt)`
  position: absolute;
  width: 28px;
  height: 28px;
  
`;
