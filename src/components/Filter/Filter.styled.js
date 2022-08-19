import styled from 'styled-components';
import { Label, Input } from 'components/GlobalStyles';
import { RiUserSearchFill } from 'react-icons/ri';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 30px 0;
  text-align: center;
`;

export const FilterLabel = styled(Label)`
  align-items: center;
`;

export const FilterIco = styled(RiUserSearchFill)`
  position: absolute;
  width: 28px;
  height: 28px;
`;

export const FilteInput = styled(Input)`
  width: 280px;
  font-weight: 500;
`;
