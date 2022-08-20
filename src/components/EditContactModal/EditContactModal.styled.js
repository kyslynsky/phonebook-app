import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  padding: 28px;
  background-color: #ddd;
  border-radius: 4px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
  background-color: transparent;
  border: none;
`;

export const CloseIco = styled(GrClose)`
  width: 22px;
  height: 22px;
`;
