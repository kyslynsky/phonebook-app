import styled from 'styled-components';
import { Button } from 'components/GlobalStyles';
import { TiDelete } from 'react-icons/ti';
import { MdModeEditOutline } from 'react-icons/md';

export const ListItem = styled.li`
  max-width: 450px;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

export const ContactBtnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactBtn = styled(Button)`
  width: 48px;
  height: 42px;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const EditIco = styled(MdModeEditOutline)`
  width: 28px;
  height: 28px;
  transition: all 0.2s ease-in-out;

  ${ContactBtn}:hover &,
  ${ContactBtn}:focus & {
    fill: #f9ddb1;
  }
`;

export const DeleteIco = styled(TiDelete)`
  width: 28px;
  height: 28px;
  transition: all 0.2s ease-in-out;

  ${ContactBtn}:hover &,
  ${ContactBtn}:focus & {
    fill: #ffa590;
  }
`;
