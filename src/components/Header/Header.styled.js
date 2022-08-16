import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #2da8d8ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d9514eff;
  }
`;
