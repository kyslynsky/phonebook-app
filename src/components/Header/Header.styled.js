import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBar = styled.header`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  margin-bottom: 4vw;
`;

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  display: block;
  padding: 7px 17px;
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  line-height: normal;
  color: #1976d2;
  transition: all 0.2s ease-in-out;
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};

  &.active {
    color: #2da8d8ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #1565c0;
  }
`;
